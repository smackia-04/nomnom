/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily : {
      'fontall' : ['Circular']
    },
    extend: {
    },
  },
  plugins: [],
});

