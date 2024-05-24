/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["Instrument Serif", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: "64px",
        h2: "48px",
        h3: "40px",
        p: "20px",
      },
    },
  },
  plugins: [],
};
