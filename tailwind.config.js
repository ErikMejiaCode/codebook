/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        darkAccent: "#282828",
        darkGradient: "#181818",
      },
    },
  },
  plugins: [],
};
