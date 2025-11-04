// authRoutes.js

import express from 'express';
import { connectToDatabase } from '../lib/db.js';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer'; // NEW
import dotenv from 'dotenv'; // NEW

dotenv.config(); // NEW: Load environment variables

const router = express.Router();

// ------------------------------------------------------------------
// NEW: Nodemailer Transporter Configuration
// ------------------------------------------------------------------
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'smtp.mailgun.org'
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Helper function to generate a 6-digit code
const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


// ------------------------------------------------------------------
// NEW: Route for Live Email Existence Check (Kept as is)
// ------------------------------------------------------------------
router.post('/check-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length > 0) {
            return res.status(409).json({ exists: true, message: 'User already exists.' });
        }

        return res.status(200).json({ exists: false, message: 'Email is available.' });
    } catch (err) {
        console.error("Email Check Database Error:", err.message);
        res.status(500).json({ message: "Server error during email check." });
    }
});
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// NEW: Route to Request Email Verification Code
// ------------------------------------------------------------------
router.post('/request-verification', async (req, res) => {
    const { username, email, password } = req.body; // Full registration payload

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide username, email, and password.' });
    }
    
    // Check if user already exists (Redundancy check)
    try {
        const db = await connectToDatabase();
        const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUsers.length > 0) {
            return res.status(409).json({ message: 'User already exists.' });
        }

        // 1. Generate Code and Expiry (e.g., 10 minutes)
        const code = generateVerificationCode();
        const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

        // 2. Hash the password for temporary storage
        const hashPassword = await bcrypt.hash(password, 10);
        
        // 3. Store the temp user data and code in a dedicated table
        // NOTE: You must create a 'verification_codes' table (see instructions below)
        await db.query(
            "REPLACE INTO verification_codes (email, username, hashed_password, code, expires_at) VALUES (?, ?, ?, ?, ?)", 
            [email, username, hashPassword, code, expiry]
        );

        // 4. Send the email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Registration Verification Code',
            html: `
                <p>Hello ${username},</p>
                <p>Thank you for registering. Please use the following 6-digit code to verify your email address:</p>
                <h2 style="color: #1a4570; background: #f0f0f0; padding: 15px; border-radius: 8px; display: inline-block;">${code}</h2>
                <p>This code is valid for 10 minutes.</p>
                <p>If you did not request this, please ignore this email.</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Verification code sent to your email.' });

    } catch (err) {
        console.error("Request Verification Error:", err.message);
        res.status(500).json({ message: "Server error. Could not send verification code.", error: err.message });
    }
});


// ------------------------------------------------------------------
// NEW: Route to Finalize Registration after Code Verification
// ------------------------------------------------------------------
router.post('/verify-code', async (req, res) => {
    const { email, code } = req.body;

    if (!email || !code) {
        return res.status(400).json({ message: 'Email and verification code are required.' });
    }

    try {
        const db = await connectToDatabase();
        
        // 1. Check for the valid code in the temp table
        const [rows] = await db.query(
            'SELECT username, hashed_password FROM verification_codes WHERE email = ? AND code = ? AND expires_at > NOW()', 
            [email, code]
        );

        if (rows.length === 0) {
            // Check if code expired or is incorrect
            return res.status(401).json({ message: 'Invalid or expired verification code.' });
        }

        const { username, hashed_password } = rows[0];

        // 2. Move user data from temp table to permanent 'users' table
        await db.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)" , 
            [username, email, hashed_password]
        );

        // 3. Clean up the verification code from the temp table
        await db.query('DELETE FROM verification_codes WHERE email = ?', [email]);


        res.status(201).json({ message: "User created successfully." });

    } catch (err) {
        console.error("Verification/Registration Error:", err.message);
        res.status(500).json({ message: "Server error during verification/registration.", error: err.message });
    }
});


// --- MODIFIED: Registration Route (Removed, replaced by /request-verification & /verify-code) ---
router.post('/register', async (req, res) => {
    return res.status(405).json({ message: 'Please use /request-verification and /verify-code routes for registration.' });
});


// --- EXISTING: Login Route (Kept as is) ---
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password.' });
    }

    try {
        const db = await connectToDatabase();
        
        const [users] = await db.query('SELECT id, password, username FROM users WHERE email = ?', [email]);
        
        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials.' }); 
        }

        const user = users[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        return res.status(200).json({ message: 'Login successful' });

    } catch (err) {
        console.error("Login Database Error:", err.message);
        res.status(500).json({ message: "Server error during login.", error: err.message });
    }
});

export default router;