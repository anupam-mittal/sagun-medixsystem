/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Replace 'Inter' with your desired font
        gallient: ['Gallient', 'sans-serif'],
        caveat : ['Caveat', 'sans-serif'],
        bannerHeading : ["BannerHeadingFont", "sans-serif"],
      },
      fontSize :{
        "huge" : ['5rem', '1'],
      },
    },
  },
  plugins: [],
}

