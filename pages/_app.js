import '../styles/globals.css'
import { initializeApp } from "firebase/app";
import firebaseClientConfig from 'config/firebaseClient'

initializeApp(firebaseClientConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
