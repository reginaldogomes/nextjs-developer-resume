'use client'

import { ReactNode } from 'react'

interface MainProps {
  children?: ReactNode
  className?: string
}

export default function Main({ children, className = '' }: MainProps) {
  return (
    <main
      className={`flex flex-col justify-center w-full items-center bg-background ${className}`}
    >
      {children}
    </main>
  )
}
