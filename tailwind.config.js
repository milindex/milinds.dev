// const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#282C34',
      'secondary': '#21252B',
      'rest-hover': '#3E4249',
    }),
    colors: {
      'rest': '#9DA5B3',
      'active': '#D7DAE0',
      'windows-warning': '#D30B2B',
      'windows-white': '#FEF9FA',
      'special-skyblue': '#4F79CA',
      'special-white': '#CDEDF7',
      'special-active': '#2C313A',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
