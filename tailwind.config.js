// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This array MUST include the path to all your component files
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Ensure this line is correct
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}