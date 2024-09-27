/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#46289a',
        'light': '#7542ff',
      },
      fontFamily: {
        satoshi: ['"Satoshi Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

