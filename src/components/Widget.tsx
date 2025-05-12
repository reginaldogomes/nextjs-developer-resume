'use client'

import { FaUserTie } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

interface AboutMeProps {
  title: string
  description: string
  icon?: React.ReactNode
  buttonText?: string
  buttonLink?: string
}

const AboutMe: React.FC<AboutMeProps> = ({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
}) => (
  <section className="w-full py-16 px-6 bg-[#1c2129] text-foreground border border-border rounded-2xl shadow-lg">
    <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:gap-10">
      {/* Ícone */}
      <div className="text-5xl text-accent mb-6 md:mb-0 md:mt-2">
        {icon || <FaUserTie />}
      </div>

      {/* Conteúdo */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-accent">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-[#c0cad4]">
          {description}
        </p>

        {buttonText && buttonLink && (
          <Button
            className="mt-6 bg-accent text-white hover:brightness-110 transition duration-300"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        )}
      </div>
    </div>
  </section>
)

export default AboutMe
