import Image from 'next/image'
import Link from 'next/link'

const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL
export default function NavbarLogo({ logo, name = '' }) {
  return (
    <Link href="/">
      <a>
        {logo ? (
          <Image
            src={`${BackendURL}/assets/${logo.id}/${logo.filename_download}`}
            alt={name}
            height={58}
            width={96}
          />
        ) : (
          <Image src="/logo.svg" alt="NETWORK NAME" height={60} width={60} />
        )}
      </a>
    </Link>
  )
}
