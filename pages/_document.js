import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <Script
          async
          type="module"
          crossOrigin=""
          strategy='beforeInteractive'
          src="https://zakalink-loader.vercel.app/assets/index.js"
          onLoad={() => console.log(`loader script loaded correctly`)}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
