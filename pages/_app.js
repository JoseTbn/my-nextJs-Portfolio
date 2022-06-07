import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Home from './index' 


function MyApp({ Component, pageProps }) {
  return(  
    
  <Home> 
  <Component {...pageProps} /> 
  </Home>
  )
}

export default MyApp
