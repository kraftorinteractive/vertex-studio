/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-100': '#0C032D',
        'brand-200': '#1E1E1E',
        'brand-300': '#2A1C8A',
        'brand-400': '#4227B4',
        'brand-500': '#6F6F6F',
        'brand-600': '#707070',
        'brand-700': '#B7B7B7',
        'brand-accent': '#FF8C36',
        'brand-light': '#E8E8E8',
        'brand-lighter': '#E4E4E4',
        'brand-lightest': '#E7E7E7',
        'brand-dark': '#181818',
      },
      fontFamily: {
        clash: ['"Clash Display"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
