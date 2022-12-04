import type { AppProps } from 'next/app'
import 'styles/globals.scss'
import { ThemeProvider } from '@material-tailwind/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
