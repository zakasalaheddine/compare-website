import Link from 'next/link'

export default function Disclaimers() {
  return (
    <div className="text-bg-light text-xs">
      <Link href="/">
        <a className="ml-2">الخصوصية</a>
      </Link>
      |
      <Link href="/">
        <a className="mr-2">السياسات الإعلانية</a>
      </Link>
    </div>
  )
}
