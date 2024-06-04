/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-border": "inset 0 0 0 2px black",
      },
    },
  },
  plugins: [],
};
