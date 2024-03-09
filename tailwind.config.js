/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#D371DD",
      },
    },
  },
  plugins: [require("daisyui")],
};
