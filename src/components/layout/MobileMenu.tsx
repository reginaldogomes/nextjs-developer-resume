import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MenuLinks from './MenuLinks'
import { Loading } from '@/components/shared/Loading'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLinkClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      {/* Botão para abrir o menu com ícone */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        className="text-foreground hover:text-accent-foreground p-2"
        aria-label="Abrir Menu"
      >
        <Menu size={28} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-accent bg-opacity-95 backdrop-blur-xl z-50 flex flex-col items-center justify-center px-6 py-10"
          >
            {/* Botão de fechar com ícone branco, canto superior direito */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white hover:text-gray-300 transition-colors"
              aria-label="Fechar Menu"
            >
              <X size={32} />
            </button>

            {/* Links maiores e centralizados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6 text-3xl font-semibold text-white"
            >
              <MenuLinks handleLinkClick={handleLinkClick} />
            </motion.div>

            {/* Loading discreto e fixo no rodapé */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none">
              {isLoading && <Loading />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
