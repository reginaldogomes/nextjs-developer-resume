import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section
      className={`flex flex-col justify-center items-center pt-16 pb-16 pl-8 pr-8 gap-8 lg:w-[1024px] ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
