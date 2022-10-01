import Link from 'next/link'
import MarkdownContent from '../content'
import Footer from '../footer'
import Navbar from '../navbar'
import PageComponent from '../page'

export default function Layout({
  page,
  footer,
  isHome = true,
  disclosureTitle,
  disclosureContent
}) {
  const { Pages_Title, pages, Socials_Title, socials } = footer
  return (
    <>
      <Navbar />

      {!isHome && (
        <div className="container flex justify-between items-center mx-auto py-8">
          <div>
            <Link href="/">
              <a className="text-secondary-light underline">Home</a>
            </Link>{' '}
            {'>>'} {page.headline}
          </div>
          <div className="text-secondary-light underline cursor-pointer">
            {disclosureTitle}
          </div>
        </div>
      )}
      <div className="absolute hidden">
        <MarkdownContent content={disclosureContent} />
      </div>
      <PageComponent page={page} isHomePage={isHome} />
      <Footer
        pagesTitle={Pages_Title}
        socialTitle={Socials_Title}
        pages={pages}
        socialMedia={socials}
      />
    </>
  )
}
