import Link from 'next/link'

export default function NavbarItem({ href, label }) {
  return (
    <li className="mr-5 pb-4 lg:pb-0">
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </li>
  )
}
