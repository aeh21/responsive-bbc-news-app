/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      nero: "#141414",
      "bbc-red": "#B80000",
      "bbc-blue": "#0071F1",
    },
    container: {
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [],
};
