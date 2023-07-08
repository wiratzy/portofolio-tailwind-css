/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary: '#f59e0b',
        secondary: '#fcd34d',
        pucet: '#64748b',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

