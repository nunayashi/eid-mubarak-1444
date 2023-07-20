/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-lg': "url('/img/hero-lg.jpg')",
        'hero-sm': "url('/img/hero-sm.jpg')",
    }),
      fontFamily: {
        almarai: ['Almarai'],
        poppins: ['Poppins']
      },  
    },
  },
  plugins: [],
}

