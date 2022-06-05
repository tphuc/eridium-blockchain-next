import { violet } from '@radix-ui/colors';
import { globalCss } from 'stitches.config';
import '../styles/globals.css'




const globalStyles = globalCss({
  '*': { boxSizing: "border-box" },
  'html, body': {
    margin: 0, padding: 0,
  },
  'a': {
    color:violet.violet10,
    textDecoration:"none"
  }

});

function MyApp({ Component, pageProps }) {
  globalStyles()
 
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
