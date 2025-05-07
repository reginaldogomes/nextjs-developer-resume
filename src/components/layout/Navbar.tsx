'use client'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Verifica se está no ambiente do cliente
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth < 768)

      // Configura o estado inicial
      setIsMobile(window.innerWidth < 768)

      // Adiciona o listener de resize
      window.addEventListener('resize', handleResize)

      // Remove o listener ao desmontar o componente
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <nav>{isMobile ? <MobileMenu /> : <DesktopMenu />}</nav>
}

export default Navbar
