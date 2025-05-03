import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Loading } from './shared/Loading'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/contact', label: 'Contact' },
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLinkClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsLoading(false)
    }, 1500) // Simula carregamento de 1.5 segundos
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="transition-all hover:bg-blue-600 hover:text-white"
      >
        Abrir Menu
      </Button>

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
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-white px-4 py-2 rounded-md transition-all hover:bg-blue-600 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Loader visual para transição */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white mt-4 text-lg"
              >
                <Loading />
              </motion.div>
            )}

            <Button
              onClick={() => setIsOpen(false)}
              variant="destructive"
              className="mt-6 transition-all hover:bg-red-600 hover:text-white"
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
