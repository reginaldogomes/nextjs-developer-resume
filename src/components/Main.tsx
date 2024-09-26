import { ReactNode } from 'react'

interface MainProps {
  children?: ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex flex-col p-4 justify-center w-full h-screen items-center">
      {children}
    </main>
  )
}
