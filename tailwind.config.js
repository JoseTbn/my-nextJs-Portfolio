const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        texture: `url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')`
                 },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scrollZ: {
          '0%': { transform: 'translateX(1%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        scrollX: 'scrollX 40s linear infinite',
        scrollZ: 'scrollZ 40s linear infinite'
      },
    
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
