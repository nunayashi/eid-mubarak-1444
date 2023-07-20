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
      }
    },
  },
  plugins: [],
}

