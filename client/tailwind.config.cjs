/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#ff335f",
        secondary: "#ff1447",
        menu: "#212224",
        background: "#1c1c21",
        cards: "#26262c"

      },
      animation: {
        typing: "typing 4s steps(20), blink .5s step-end infinite alternate",
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;'

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
      pulse: {

        opacity: .5
      }
    }


  },
  plugins: [],
}

// #ff5277, #ff2957, #ff335f,#ff1447