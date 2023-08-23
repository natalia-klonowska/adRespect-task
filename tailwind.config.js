/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        black: '#111',
        beige: '#DCC1AB',
        green: '#1B5B31',
        grey: '#F5F0EC',
        hoverGrey: '#808080',
      },
      content: {
        arrowNav: 'url("/src/images/icons/arrow-nav.svg")',
        arrowDown: 'url("/src/images/icons/arrow-down.svg")',
      },
      boxShadow: {
        dark: '4px 4px 4px 4px rgba(0, 0, 0, 0.25)',
        light: '0px 0px 4px 4px rgba(0, 0, 0, 0.08)',
        button: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        hoverButton: '0px 4px 4px 0px rgba(0, 0, 0, 0.5)',
      },
      dropShadow: {
        text: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      height: {
        slide: 'calc(100vh - 72px)',
      },
      backgroundImage: {
        intro: 'url("/src/images/photos/intro.jpeg")',
      }
    },
  },
  plugins: [],
}
