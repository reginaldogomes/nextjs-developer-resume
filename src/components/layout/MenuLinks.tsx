'use client' // ⚠️ Certifica que esse componente roda no cliente

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const menuItems = [
  { href: '/resume', label: 'Currículo' },
  { href: '/about', label: 'Sobre' },
  { href: '/solutions', label: 'Serviços' },
  { href: '/contact', label: 'Contato' },
]

const MenuLinks = ({ handleLinkClick }: { handleLinkClick?: () => void }) => {
  const pathname = usePathname() // Detecta a página ativa

  return (
    <nav className="flex flex-col md:flex-row items-center gap-4">
      {menuItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={handleLinkClick}
          className={`text-lg font-medium px-4 py-2 rounded-md transition-all hover:bg-accent hover:text-white ${
            pathname === href ? 'bg-accent text-white' : 'text-gray-300'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default MenuLinks
