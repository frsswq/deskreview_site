/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/preline/dist/*.js",
    "./index.html",
    "./work.html",
    "./contact.html",
    "./404.html",
    "./blog.html",
    "./work/*/**.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        'desk-gray': {
          300: '#eaecec',
          500: '#bbbdbf',
          700: '#343535',
        },
        'desk-blue': '#2e59a9',
        'desk-brown': '#574a43',
        'desk-orange': '#e36c2a',
        'desk-white': '#ffffff',
        'desk-black': '#050505',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};