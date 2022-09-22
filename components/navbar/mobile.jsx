import NavbarItem from './item'
import NavbarLogo from './logo'

export default function MobileNavbar({ show = false }) {
  return show ? (
    <>
      <div className="bg-bg-dark opacity-30 w-screen h-screen"></div>
      <div className="bg-secondary w-1/2 absolute top-0 h-screen flex flex-col items-center pt-10">
        <NavbarLogo />
        <nav className="text-white-text font-semibold pt-10">
          <ul className="">
            <NavbarItem href="/" label="Platforms" />
            <NavbarItem href="/" label="Amazon" />
            <NavbarItem href="/" label="POD" />
            <NavbarItem href="/" label="Reviews" />
            <NavbarItem href="/" label="Ressources" />
          </ul>
        </nav>
      </div>
    </>
  ) : null
}
