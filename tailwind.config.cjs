/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary: {
          50: '#FDF5F5',
          100: '#FAEBEB',
          200: '#F3CDCD',
          300: '#EBADAD',
          400: '#DC7373',
          500: '#CC3636',
          600: '#B63131',
          700: '#7B2121',
          800: '#5C1919',
          900: '#3C1010'
        },
        secondary: {
          50: '#F5F9F4',
          100: '#EBF3E8',
          200: '#CDDFC6',
          300: '#ADCBA1',
          400: '#73A55E',
          500: '#367E18',
          600: '#317116',
          700: '#214C0F',
          800: '#19390B',
          900: '#102507'
        },
        tertiary: {
          50: '#FFFEFB',
          100: '#FFFDF6',
          200: '#FFFAE8',
          300: '#FFF6D9',
          400: '#FFF0BD',
          500: '#FFE9A0',
          600: '#E3D08F',
          700: '#998C60',
          800: '#736948',
          900: '#4A442F'
        },
      }

    },
  },
  plugins: [],
}
