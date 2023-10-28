import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "#f1f1f1",
        inverse: "#0e0e0e",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        chosunilbo: ["Chosunilbo_myungjo", "sans-serif"],
        notoSans: ["Noto Sans KR", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOutIn: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.1s linear forwards",
        fadeOutIn: "fadeOutIn 1s linear forwards",
      },
      boxShadow: {
        lightWindow: "0 0 0 2000px #f1f1f1",
        darkWindow: "0 0 0 2000px #0E0E0E",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "880px" },
        md: { max: "740px" },
        sm: { max: "550px" },
      },
    },
  },
  plugins: [
    typography,
    function ({ addUtilities }) {
      const newUtilities = {
        ".scroll-hidden": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
