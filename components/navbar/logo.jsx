import Image from 'next/image'
import Link from 'next/link'

export default function NavbarLogo() {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.svg" alt="NETWORK NAME" height={58} width={96} />
      </a>
    </Link>
  )
}
