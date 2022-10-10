/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111923',
        secondary: '#1F2937',
        accent: '#10B981',
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
