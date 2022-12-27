import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Layout from 'components/layout'
import PageComponent from 'components/page'
import SeoHead from 'components/seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { queryNetworkPages } from 'requests/GRAPHQL/queryNetworkContentPages'
import { queryPage } from 'requests/GRAPHQL/queryPage'

export default function ComparePage() {
  const {
    query: { slug }
  } = useRouter()
  const { data, isLoading } = useQuery(['page', slug], () =>
    queryPage(slug, 'compare')
  )
  if (isLoading) return <div>is Loading ...</div>

  const {
    footerItems,
    navbarItems,
    socialMediaItems,
    pages: [currentPage],
    name,
    url,
    favicon,
    description,
    logo
  } = data
  return (
    <>
      <SeoHead
        title={`${currentPage.page.headline} | ${name}`}
        description={description}
        url={url}
        favicon={favicon}
      />
      <Layout
        footerItems={footerItems}
        navbarItems={navbarItems}
        socials={socialMediaItems}
        navbarLogo={logo}
      >
        {currentPage && <PageComponent page={currentPage.page} />}
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const pages = await queryNetworkPages('compare')
  const paths = pages.reduce((accum, { page }) => {
    accum.push({ params: { slug: page.slug } })
    return accum
  }, [])
  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['page', slug], () =>
    queryPage(slug, 'compare')
  )
  return {
    // Passed to the page component as props
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
