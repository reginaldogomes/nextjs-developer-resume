'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-zinc-700 transition-colors duration-300"
      >
        {/* trilha do botão */}
        <motion.div className="absolute inset-0 flex items-center px-1" layout>
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-6 h-6 bg-white dark:bg-zinc-900 rounded-full shadow-md flex items-center justify-center"
            animate={{ x: isDark ? 24 : 0 }} // <-- movimento horizontal
          >
            {isDark ? (
              <Moon className="w-4 h-4 text-zinc-700" />
            ) : (
              <Sun className="w-4 h-4 text-yellow-400" />
            )}
          </motion.div>
        </motion.div>
      </button>
    </div>
  )
}
