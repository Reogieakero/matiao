import express from 'express';
import { connectToDatabase } from '../lib/db.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// ------------------------------------------------------------------
// NEW: Route for Live Email Existence Check
// ------------------------------------------------------------------
router.post('/check-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        const db = await connectToDatabase();
        // Check if user already exists based on email
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length > 0) {
            // Return 409 Conflict if user exists
            return res.status(409).json({ exists: true, message: 'User already exists.' });
        }

        // Return 200 OK if user does not exist (email available)
        return res.status(200).json({ exists: false, message: 'Email is available.' });
    } catch (err) {
        console.error("Email Check Database Error:", err.message);
        res.status(500).json({ message: "Server error during email check." });
    }
});
// ------------------------------------------------------------------
// END NEW ROUTE
// ------------------------------------------------------------------


// --- EXISTING: Registration Route ---
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide username, email, and password.' });
    }

    try {
        const db = await connectToDatabase();
        
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length > 0) {
            // Retain this check as a final security measure against race conditions
            return res.status(409).json({ message: 'User already exists.' });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)" , [username, email, hashPassword]);

        res.status(201).json({ message: "User created successfully." });
    } catch (err) {
        console.error("Database Error:", err.message);
        res.status(500).json({ message: "Server error during registration.", error: err.message });
    }
});


// --- EXISTING: Login Route ---
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