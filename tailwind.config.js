/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
      'primary':'linear-gradient(red, yellow)',
      },
    },
  },
  plugins: [],
}
