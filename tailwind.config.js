/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#D371DD",
        secondary: "#3C2C9F",
        warn: "#E31629",
      },
      backgroundImage: {
        "mw-gradient-primary":
          "linear-gradient(to right, #3c2c9fb2, #c934d2b2)",
      },
    },
  },
  plugins: [require("daisyui")],
};
