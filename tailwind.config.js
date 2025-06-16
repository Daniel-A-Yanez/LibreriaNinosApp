/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          principal: '#90A686',
          claro: '#B9BF8E',
        },
        coral: '#D9967E',
        beige: '#D9D3B8',
        gris: {
          fondo: '#F2F2F2'
        }
      }
    },
  },
  plugins: [],
}
