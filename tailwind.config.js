/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai'],
        poppins: ['Poppins']
      }, 
      backgroundImage: {
        'hero': "url('/img/hero1.jpg')",
        'hero3': "url('/img/hero3.jpg')"
      }
    },
  },
  plugins: [],
}

