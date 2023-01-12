/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto'],
      'big-noodle-titling': ['BigNoodleTitling'],
      'montserrat': ['Montserrat'],
      'actor': ['Actor'],
      'century-gothic': ['Century Gothic'],
      'poppins': ['Poppins']
    },
    extend: {
    }
  },
  plugins: [],
}