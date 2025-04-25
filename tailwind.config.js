/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ternary: "var(--color-ternary)",
        white: "var(--color-white)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        caprasimo: "var(--font-caprasimo)",
      },
    },
  },
  plugins: [],
};
