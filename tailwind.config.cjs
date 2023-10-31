/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      fontSize: {
        "5xl": ["5.2rem", "1.2"],
      },
    },
  },
  plugins: [],
};
