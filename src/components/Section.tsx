import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section
      className={`flex flex-col justify-center items-center p-16 w-full lg:w-[1024px] gap-8 ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
