module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeGrey: {
          light: "#242424",
          default: "#1F1F1F",
          dark: "#171717",
        },
        themePurple: "#8A2387",
        themeRed: {
          light: "#F64F59",
          default: "#E94057",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
