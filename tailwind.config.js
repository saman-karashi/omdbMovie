/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    screens:{
    sm:'480px',
    md:'768px',
    lg:'1000px',
    xl:'1440px'
    },
    extend: {
      colors:{
        lightGray:'#e6e5e5',
        darkGray:'#a7a7a7',
        lightGreen:'#2deba4',
        yellow:'#ffe643',
        darkRed:'#f21729',
        black:'#272727',
        darkSky:'#35b6ef',
        "black-800":'#303030'
        },
        spacing:{
        '500':'31.25rem'
        },
        height:{
        '800':'50rem',
        '1000':'62.5rem'
        }
    },
  },
  plugins: [],
}
