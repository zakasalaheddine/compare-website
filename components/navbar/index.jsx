import NavbarLogo from './logo'
import NavbarItems from './items'
import MobileNavbar from './mobile'
import { useState } from 'react'

export default function Navbar({ items }) {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false)
  const toggleMobileNavbar = () => {
    setShowMobileNavbar((prev) => !prev)
  }
  return (
    <div className="bg-secondary">
      <div className="container flex justify-between items-center mx-auto py-2">
        <NavbarLogo />
        <NavbarItems
          items={items}
          openMobileNavbar={toggleMobileNavbar}
          show={showMobileNavbar}
        />
      </div>
      <MobileNavbar show={showMobileNavbar} items={items} />
    </div>
  )
}
