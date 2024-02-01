/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif", "system-ui", "ui-sans-serif"],
        serif: ["Playfair Display", "Georgia", "ui-serif", "serif"]
      },
      colors: {
        primary: "#003d35",
        secondary: "#D5A021",
        dark: "#1b1e32",
        gray: "#3f4242"
      }
    },
  },
  plugins: [],
}
