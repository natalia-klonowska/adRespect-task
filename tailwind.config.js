/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
        arrowNav: 'url("../images/icons/arrow-nav.svg")',
        arrowDown: 'url("../images/icons/arrow-down.svg")',
      },
      boxShadow: {
        dark: '4px 4px 4px 4px rgba(0, 0, 0, 0.25)',
        light: '0px 0px 4px 4px rgba(0, 0, 0, 0.08)',
        button: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        hoverButton: '0px 4px 4px 0px rgba(0, 0, 0, 0.5)',
      },
      height: {
        slide: 'calc(100vh - 72px)',
      },
      spacing: {
        ButtonCenter: 'calc(50% - 61.5px)',
      },
      backgroundImage: {
        intro: 'url("../images/photos/intro.jpeg")',
        about: 'url("../images/photos/about.jpeg")',
        gradient: 'linear-gradient(360deg, #DCC1AB 0%, rgba(214, 183, 158, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}
