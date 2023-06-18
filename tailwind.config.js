/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'green-black': '#012626',
        'green-blue': '#04BFAD',
        'green-blue-hover': '#046B61',
        'green-main': '#01403A',
        'green-button': '#038C7F',
      },
      spacing: {
        '75px': '75px',
      },
    },
  },
  plugins: [
  ],
  blocklist: [
    'container',
    'collapse',
  ],
}