import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botão para abrir o menu */}
      <Button onClick={() => setIsOpen(true)} variant="outline">
        Abrir Menu
      </Button>

      {/* Menu Mobile Customizado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Menu</h2>

            <nav className="flex flex-col items-center gap-4">
              {menuItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg font-medium text-white hover:text-blue-300"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Botão para fechar o menu */}
            <Button
              onClick={() => setIsOpen(false)}
              variant="destructive"
              className="mt-6"
            >
              Fechar Menu
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
