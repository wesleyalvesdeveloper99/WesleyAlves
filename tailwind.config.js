/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7957c9',
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}
