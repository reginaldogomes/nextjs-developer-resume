'use client'
import Navbar from './Navbar'
import Logo from '../shared/Logo'

export const Header = () => {
  return (
    <header className="sticky top-0 z-11 p-4 bg-background shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}
