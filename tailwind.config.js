/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Segoe Print'],
    },
    extend: {
      spacing: {
        'vw-7': '7vw',
      },
    },
  },
  plugins: [],
};
