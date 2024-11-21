/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/preline/dist/*.js",
    "./index.html",
    "./work.html",
    "./contact.html",
    "./work/*/**.html"
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
