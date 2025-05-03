import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-100">
      <GiHamburgerMenu size={32} />
    </nav>
  )
}
