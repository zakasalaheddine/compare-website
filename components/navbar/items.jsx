import NavbarItem from './item'

export default function NavbarItems({
  openMobileNavbar,
  show = false,
  items = []
}) {
  return (
    <nav className="text-white-text font-semibold">
      <ul className="hidden lg:flex">
        {items.map(({ label, target }, idx) => (
          <NavbarItem key={`navbar_item_${idx}`} href={target} label={label} />
        ))}
      </ul>
      <button
        className="navbar-burger flex lg:hidden items-center p-3"
        onClick={openMobileNavbar}
      >
        {show ? (
          <svg
            className="h-6 w-6 text-white-text cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="block h-4 w-4 fill-white-text"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        )}
      </button>
    </nav>
  )
}
