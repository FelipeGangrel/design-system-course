import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ignite Call" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
