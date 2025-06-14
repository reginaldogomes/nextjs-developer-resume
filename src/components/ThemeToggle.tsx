'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mb-2 text-sm bg-black text-white px-3 py-1 rounded-md shadow-lg"
        >
          {isDark ? 'Modo Claro' : 'Modo Escuro'}
        </motion.div>
      )}

      {/* Toggle */}
      <button
        onClick={toggleTheme}
        className="w-14 h-8 rounded-full bg-gray-300 dark:bg-zinc-700 p-1 flex items-center shadow-inner transition-colors duration-300"
        aria-label="Alternar tema"
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-6 h-6 bg-white dark:bg-zinc-900 rounded-full shadow-md flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-zinc-700" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-400" />
          )}
        </motion.div>
      </button>
    </div>
  )
}
