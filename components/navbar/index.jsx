import NavbarLogo from './logo'
import NavbarItems from './items'
import MobileNavbar from './mobile'
import { useState } from 'react'

export default function Navbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false)
  const toggleMobileNavbar = () => {
    setShowMobileNavbar((prev) => !prev)
  }
  return (
    <div className="bg-secondary">
      <div className="container flex justify-between items-center mx-auto py-2">
        <NavbarLogo />
        <NavbarItems
          openMobileNavbar={toggleMobileNavbar}
          show={showMobileNavbar}
        />
      </div>
      <MobileNavbar show={showMobileNavbar} />
    </div>
  )
}
