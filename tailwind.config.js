const defaultTheme = require('tailwindcss/defaultTheme')

enabled: process.env.NODE_ENV === "production"

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      keyframes: {
        move: {
          '-100%': { transform: 'translate-x-full ' },
          '100%': { transform: 'translate-x-full ' },
           

        
     },  
},
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'move': 'translateX 25s linear infinite'
       }
    
  },
        screens: {
          'xs': '475px',
          ...defaultTheme.screens,
        },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
