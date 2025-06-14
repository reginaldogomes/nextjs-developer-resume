'use client'

import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all"
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    </button>
  )
}
