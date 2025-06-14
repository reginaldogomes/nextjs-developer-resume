import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const shouldUseDark =
      savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
    root.classList.toggle('dark', shouldUseDark)
    setIsDark(shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const isDarkMode = root.classList.toggle('dark')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    setIsDark(isDarkMode)
  }

  return { isDark, toggleTheme }
}
