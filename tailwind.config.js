/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        notoSans: ["Noto Sans KR", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.1s linear forwards",
      },
      boxShadow: {
        lightWindow: "0 0 0 2000px #f1f1f1",
        darkWindow: "0 0 0 2000px #0E0E0E",
      },
    },
  },
  plugins: [],
};
