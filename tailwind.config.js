/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          dark: "#34B2A9",
          light: "#c80000",
        },
        primary: {
          light: "#E3E4E6",
          dark: "#060608",
        },
        fontColor: {
          light: "#060608",
          dark: "#E3E4E6",
        },
        secondary: "#252532",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
