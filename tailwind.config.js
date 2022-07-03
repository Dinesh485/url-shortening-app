/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        Gray: "hsl(0, 0%, 75%)",
        "Grayish-Violet": "hsl(257, 7%, 63%)",
        "Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)",
        Cyan: "hsl(180, 66%, 49%)",
        "Dark-Violet": "hsl(257, 27%, 26%)",
        Red:'hsl(0, 87%, 67%)',
      },
    },
  },
  plugins: [],
};