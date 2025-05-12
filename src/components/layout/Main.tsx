'use client' // Adicione esta diretiva se estiver usando Next.js App Router

import { ReactNode } from 'react'

interface MainProps {
  children?: ReactNode
  className?: string // Prop opcional para classes adicionais
}

export const Main = ({ children, className = '' }: MainProps) => {
  return (
    <main
      className={`flex flex-col justify-center w-full items-center bg-background ${className}`}
    >
      {children}
    </main>
  )
}

// Exportação padrão para facilitar a importação
export default Main
