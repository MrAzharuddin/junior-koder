/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#673AB7',
        secondary: '#FA6F20',
        'btn-bg': '#673AB7',
      },
      fontFamily:{
        quicksand:['Quicksand', "sans-serif"]
      }
    },
  },
  plugins: [],
};
