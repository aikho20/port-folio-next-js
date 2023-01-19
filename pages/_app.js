import { ThemeProvider } from 'next-themes'
import '../styles/app.scss'

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider attribute='class'>
  <Component {...pageProps} /> 
 </ThemeProvider>)
}
