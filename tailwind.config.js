/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'unifraktur':['UnifrakturMaguntia', 'sans-serif'],
        'mont':['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

