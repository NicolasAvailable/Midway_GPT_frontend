/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#D371DD",
        warn: "#E31629",
      },
    },
  },
  plugins: [require("daisyui")],
};
