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
      'pages-primary': '#5DC986',
      'activity-rest': '#ABB2BF',
    },
    extend: {
      width: {
        '275' : '275px',
      }
    },
    fontSize: {
      'xs-11': '11px',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      '7xl': '5rem',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
