import NavbarItem from './item'
import NavbarLogo from './logo'

export default function MobileNavbar({ show = false, items = [] }) {
  return show ? (
    <>
      <div className="bg-secondary w-1/2 absolute top-0 h-screen flex flex-col items-center pt-2">
        <NavbarLogo />
        <nav className="text-white-text font-semibold pt-10">
          <ul className="">
            {items.map(({ label, target }, idx) => (
              <NavbarItem
                key={`navbar_item_${idx}`}
                href={target}
                label={label}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  ) : null
}
