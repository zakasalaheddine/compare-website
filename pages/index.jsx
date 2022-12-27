import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import PageComponent from 'components/page'
import SeoHead from 'components/seo'
import Head from 'next/head'
import Layout from '../components/layout'
import { queryNetwork } from '../requests'

export default function Home() {
  const { data: network, isLoading } = useQuery(['network'], queryNetwork)

  if (isLoading) return <div>is Loading</div>

  const {
    footerItems,
    navbarItems,
    socialMediaItems,
    homepage,
    name,
    url,
    favicon,
    description,
    logo
  } = network
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
        <PageComponent page={homepage} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['network'], queryNetwork)
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
