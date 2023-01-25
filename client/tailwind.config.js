/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/home-hero-triathlon_1920x1569.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
