import Link from 'next/link'
import Script from 'next/script'
import MarkdownContent from '../content'
import Footer from '../footer'
import Navbar from '../navbar'
import PageComponent from '../page'

export default function Layout({
  footerItems,
  navbarItems,
  socials,
  children
}) {
  // const { Pages_Title, pages, Socials_Title, socials } = footer
  return (
    <>
      <Navbar items={navbarItems} />
      {children}
      <Footer
        pagesTitle="روابط"
        socialTitle="تابعنا"
        pages={footerItems}
        socialMedia={socials}
      />
    </>
  )
}
