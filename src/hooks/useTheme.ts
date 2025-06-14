import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const enabled = saved === 'dark' || (!saved && prefersDark)
    html.classList.toggle('dark', enabled)
    setIsDark(enabled)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const enabled = !html.classList.contains('dark')
    html.classList.toggle('dark', enabled)
    localStorage.setItem('theme', enabled ? 'dark' : 'light')
    setIsDark(enabled)
  }

  return { isDark, toggleTheme }
}
