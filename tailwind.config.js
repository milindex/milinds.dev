/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '9xl': '9rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem', // 1024px
        xl: '2rem', // 1280px
      },
    },
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        error: '#ef5854',
        success: '#21b7a8',
        lightbg: 'var(--light-bg)',
        darkbg: 'var(--dark-bg)',
        og: {
          background: '#141416',
          text: '#FCFCFD',
        },
        primary: {
          main: 'var(--primary-color)',
          hover: 'var(--secondary-color)',
        },
        dark: {
          heading: {
            primary: '#FCFCFD',
            secondary: '#777E90',
          },
          textfield: {
            primary: '#212123',
            border: '#FA7D70',
            placeholder: '#F95342',
            background: '#B0B0B0',
            color: '#111111',
          },
        },
        light: {
          heading: {
            primary: '#141416',
            secondary: '#777E90',
          },
          textfield: {
            primary: '#E0E0E0',
            border: '#291A1A',
            placeholder: '#F95342',
            background: '#E0E0E0',
            color: '#111111',
          },
        },
      },
      animation: {
        shockwave: 'shockwave 1s ease-in 20;',
        'pulse-twice': 'pulse 3s linear 2',
      },
      keyframes: {
        shockwave: {
          '0%': {
            transform: 'scale(1)',
            'box-shadow': '0 0 2px var(--secondary-color)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0,
            'box-shadow':
              '0 0 50px darken(var(--secondary-color), 20%), inset 0 0 10px var(--secondary-color)',
          },
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
        textColor: ['dark'],
      },
    },
  },
  plugins: [],
};
