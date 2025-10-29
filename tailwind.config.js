const flowbiteReact = require("flowbite-react/plugin/tailwindcss");
const tailwindcssAnimated = require("tailwindcss-animated");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      fontFamily: {
        rosellinda: ['"SVN-Rosellinda Alyamore"', 'cursive'],
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      "3xl": "1790px",

    }
  },
  plugins: [flowbiteReact, tailwindcssAnimated],
}