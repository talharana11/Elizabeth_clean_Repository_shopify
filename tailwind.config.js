/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./assets/*.liquid", // Adjust according to your file structure
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
