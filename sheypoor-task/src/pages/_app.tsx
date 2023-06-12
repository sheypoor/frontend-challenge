import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>sheypoor Task</title>
        <meta name='description' content="Let's hire me!!" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#0c65bb' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} /> 
      <ToastContainer limit={1} rtl />
    </>
  )
   
         
        
}
