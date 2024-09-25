'use client'
import Navbar from './Navbar'

export const Header = () => {
  return (
    <header className="sticky top-0 z-1 p-2	flex bg-primary-foreground">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-2xl font-semibold">Reginaldo Gomes</h3>
        <Navbar />
      </div>
    </header>
  )
}
