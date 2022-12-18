/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#673AB7",
        secondary: "#FA6F20",
        tertiary: "#F9F3ED",
        "btn-bg": "#673AB7",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
