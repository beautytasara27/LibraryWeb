/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": ["Poppins", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "viva-beautiful":["Viva-Beautiful", "sans-serif"],
      },
      colors: {
        malibu: "#79CBFB",
        deep: "#071E3E",
        blizzard: "#ABD8F1",
        havelock: "#4A70D4",
        cerulean: "#049CD4",
        allports: "#04749C",
      },
    },
  },
  plugins: [],
};
