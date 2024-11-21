/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/preline/dist/*.js",
    "./docs/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
