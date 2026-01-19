/** @type {import('tailwindcss').Config} */
export default {
  // Scan Vite entry and all JS/TS/JSX/TSX files for class names
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {},
  },
  plugins: [],
};

