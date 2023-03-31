/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,vue}"],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1280px',
      xl: '2560px',
    },
    colors: {
      // Color palette
      'black': '#000000',
      'white': '#FFFFFF',
      'purple': '#9F00A4',
      'yellow': '#FFBB00',
      'blue': '#4791FF',
      'light-blue': '#28F6E8',
      'green': '#00940A',
      'dark-green': '#003706',

    },
    fontSize:{
      'xs': '1.2rem',
      'sm': '1.4rem',
      'base': '1.6rem',
      'l': '1.8rem',
      'xl': '2.2rem',
      '2xl': '2.4rem',
      '3xl': '3.2rem',
      '4xl': '3.8rem',
      '5xl': '4.6rem',
      '6xl': '5.7rem',
    },
    borderRadius: {
      'none': '0',
      'xs': '6px',
      'sm': '8px',
      'md': '12px',
      'lg': '20px',
      'full': '50%',
    },
    borderWidth: {
      '1': '1px',
    },
    boxShadow:{
      'sm': '0 2px 4px 0 rgb(0 0 0 / 0.45)',
      'md': '3px 4px 6px 1px rgb(0 0 0 / 0.45)',
      'md2': '0 4px 6px 1px rgb(0 0 0 / 0.35)',
      'md3': '3px 4px 6px 1px rgb(255 255 255 / 0.35)',
      'lg': '6px 10px 15px -3px rgb(0 0 0 / 0.45)',
      'xl': '9px 20px 25px -5px rgb(0 0 0 / 0.45)',
    },
    extend: {
      fontFamily: {
        Roboto:['Roboto', 'sans-serif'],
        Monument:['Monument', 'sans-serif']
      },
      backgroundImage: {
        'neighbourhood': "url('/src/assets/images/Background.png')",
        'neighbourhoodXL': "url('/src/assets/images/Background@2x.png')"
      },
      width: {
        '814': '814px',
        '550': '750px',
      },
      height: {
        '54': '54px',
        '68': '68px',
      },
      lineHeight:{
        '27': '27px',
      },
      textUnderlineOffset: {
        10: '10px',
      }
    },
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

