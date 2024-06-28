// tailwind.config.js
const {nextui} = require("@nextui-org/react");
const { iconsPlugin, dynamicIconsPlugin } = require('@egoist/tailwindcss-icons')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), iconsPlugin(), dynamicIconsPlugin()],
};