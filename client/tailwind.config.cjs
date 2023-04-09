/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#ff335f",
        secondary: "#ff1447",
        menu: "",
        background: "#1d1d25"
      },
      animation: {
        typing: "typing 7s steps(20), blink .5s step-end infinite alternate",

      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "20ch" }

        },
        blink: {
          from: { "border-right-color": "transparent", },
          to: { "border-right-color": "white" },
        },
      },
    },
    plugins: [],
  }
}
// #ff5277, #ff2957, #ff335f,#ff1447