/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow" : "#B88E2F",
        "gray-primary" : "#333333",
        "gray-secondary" : "#666666",
      },
      fontFamily:{
        'primary' : ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'heroImage' : "url('./assets/Image/heroImg.png')",
      }
    },
  },
  plugins: [],
}