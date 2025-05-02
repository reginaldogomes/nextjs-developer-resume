import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import Link from 'next/link'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botão para abrir o modal */}
      <Button onClick={() => setIsOpen(true)} variant="outline">
        Abrir Menu
      </Button>

      {/* Modal do menu */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md w-full">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            {menuItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
          {/* Botão de ação */}
          <DialogClose asChild>
            <Button variant="destructive">Fechar Menu</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MobileMenu
