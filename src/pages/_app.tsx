import type { AppType } from 'next/app'

import '../utils/client/styles/tailwind.css'

import { Fragment, lazy } from 'react'
import { Manrope, Inter } from 'next/font/google'
import clsx from 'clsx'
import Head from 'next/head'

import { api } from '@/utils/client/api'

const manrope = Manrope({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-manrope',
})

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
})

const ReactQueryDevtools = lazy(() =>
  import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
)

const App: AppType = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>TNP Front-end Interview</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style jsx global>
        {`
          :root {
            --font-manrope: ${manrope.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>

      <div
        className={clsx(
          manrope.variable,
          'min-h-screen bg-gray-100 font-sans text-gray-700'
        )}
      >
        <Component {...pageProps} />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </Fragment>
  )
}

export default api.withTRPC(App)
