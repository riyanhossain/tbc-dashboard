/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111923',
        secondary: '#1F2937',
        table: '#202A39',
        'table-text': '#AEBCD3',
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
