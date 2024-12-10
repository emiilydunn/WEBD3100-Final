/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#FAF4E4',
        'custom-brown': '#72644B',
        'custom-footer': '#E8B893',
      },
      fontFamily: {
        Harmonia: ['Harmonia', 'sans-serif'],
        Lydian: ['Lydian'],

      },
    },
  },
  plugins: [],
}

