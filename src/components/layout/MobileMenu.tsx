import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    }, 1500)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outline">
        Abrir Menu
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-accent bg-opacity-90 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-6"
          >
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-2xl font-bold text-white mb-6"
            >
              Menu
            </motion.h2>

            <MenuLinks handleLinkClick={handleLinkClick} />

            {isLoading && <Loading />}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              <Button onClick={() => setIsOpen(false)} variant="destructive">
                Fechar Menu
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
