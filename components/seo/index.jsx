import Head from 'next/head'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function SeoHead({ title, description, favicon, url, ogImage }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {favicon && (
        <link
          rel="icon"
          href={`${BackendURL}/assets/${favicon.id}/${favicon.filename_download}`}
        />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && (
        <meta
          property="og:image"
          content={`${BackendURL}/assets/${favicon.id}/${favicon.filename_download}`}
        />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {ogImage && (
        <meta
          property="twitter:image"
          content={`${BackendURL}/assets/${favicon.id}/${favicon.filename_download}`}
        />
      )}
    </Head>
  )
}
