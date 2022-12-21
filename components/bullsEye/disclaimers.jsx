import Link from 'next/link'

export default function Disclaimers() {
  return (
    <div className="text-bg-light text-xs">
      <Link href="/">
        <a className="mr-2">Privacy Policy</a>
      </Link>
      |
      <Link href="/">
        <a className="ml-2">Advertising Disclosure</a>
      </Link>
    </div>
  )
}
