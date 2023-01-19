/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif']
      },
    },
  },
  plugins: [],
};
