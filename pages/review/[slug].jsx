import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Layout from 'components/layout'
import PageComponent from 'components/page'
import SeoHead from 'components/seo'
import { useRouter } from 'next/router'
import { queryNetworkPages } from 'requests/GRAPHQL/queryNetworkContentPages'
import { queryPage } from 'requests/GRAPHQL/queryPage'

export default function ReviewPage() {
  const {
    query: { slug }
  } = useRouter()
  const { data, isLoading } = useQuery(['page', slug], () =>
    queryPage(slug, 'review')
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
        title={name}
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
  const pages = await queryNetworkPages('review')
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
    queryPage(slug, 'review')
  )
  return {
    // Passed to the page component as props
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
