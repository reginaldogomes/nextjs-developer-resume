import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section
      className={`flex flex-col justify-center items-center w-full gap-8 lg:w-[1024px] p-16 ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
