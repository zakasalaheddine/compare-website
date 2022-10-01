import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const getIconForType = (type) => {
  switch (type) {
    case 'facebook':
      return <FaFacebookF />

    case 'twitter':
      return <FaTwitter />

    case 'instagram':
      return <FaInstagram />

    default:
      return null
  }
}

export default function Footer({
  pagesTitle = '',
  pages = [],
  socialTitle = '',
  socialMedia = []
}) {
  return (
    <footer className="bg-secondary py-16">
      <div className="xl:w-3/5 mx-2 lg:mx-auto flex justify-between flex-col md:flex-row">
        <div className="flex-1 mx-3 md:mx-0 mb-5">
          <h3 className="font-black text-lg text-bgWhite mb-10">
            {pagesTitle}
          </h3>
          <div className="flex md:items-center justify-between mr-10 flex-col md:flex-row">
            {pages.map(({ name, target }, idx) => (
              <Link href={target} key={`footer__page__${idx}`}>
                <a className="text-secondary-light font-light">{name}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-3 md:mx-0">
          <h3 className="font-black text-lg text-bgWhite mb-8">
            {socialTitle}
          </h3>
          <div className="flex items-center  md:justify-between">
            {socialMedia.map(({ type, target }, idx) => (
              <a
                href={target}
                target="_blank"
                rel="noreferrer"
                key={`social__media__${idx}`}
                className="text-bgWhite border-2 border-bgWhite rounded-full p-2 mr-2"
              >
                {getIconForType(type)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
