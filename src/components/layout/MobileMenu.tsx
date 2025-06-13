import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import MenuLinks from './MenuLinks'
import { Loading } from '@/components/shared/Loading'
import { X } from 'lucide-react'

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
      <Button onClick={() => setIsOpen(true)} variant="outline">
        Abrir Menu
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-accent bg-opacity-95 backdrop-blur-lg z-50 flex flex-col items-center justify-center px-6 py-10"
          >
            {/* Botão de fechar no topo à direita */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-foreground hover:text-white transition-colors"
              aria-label="Fechar Menu"
            >
              <X size={28} />
            </button>

            {/* Links com fonte maior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6 text-2xl font-medium text-white"
            >
              <MenuLinks handleLinkClick={handleLinkClick} />
            </motion.div>

            {/* Loading discreto no canto inferior */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              {isLoading && <Loading />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
