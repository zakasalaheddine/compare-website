import Footer from '../footer'
import Navbar from '../navbar'

export default function Layout({
  footerItems,
  navbarItems,
  socials,
  children
}) {
  return (
    <>
      <Navbar items={navbarItems} />
      {children}
      <Footer
        pagesTitle="Links"
        socialTitle="Follow us"
        pages={footerItems}
        socialMedia={socials}
      />
    </>
  )
}
