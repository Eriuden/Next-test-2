import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/globals.css'
import { ThemeProvider} from "styles-components"
import Head from 'next/head'


const theme = {
  colors: {
    primary: "#355C7D",
  },
}

export default function App({ Component, pageProps }) {

  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />) 
  }
  return (
    <>
      <Head>
        <title>About site</title>
        <meta name='description' content='blabla'/>
        
      </Head>
      
      <ThemeProvider thme = {theme}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </>
    
)}
