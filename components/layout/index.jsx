import Footer from '../footer'
import Navbar from '../navbar'

export default function Layout({
  footerItems,
  navbarItems,
  socials,
  children,
  navbarLogo
}) {
  return (
    <>
      <Navbar items={navbarItems} navbarLogo={navbarLogo} />
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
