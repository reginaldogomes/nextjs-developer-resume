'use client'

import { FaUserTie } from 'react-icons/fa' // Ícone padrão
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
  <section className="w-full py-16 px-6 bg-gray-800 text-white flex flex-col items-center text-center md:flex-row md:text-left md:gap-8 md:items-start">
    {/* Ícone opcional */}
    <div className="text-4xl text-blue-400">{icon || <FaUserTie />}</div>

    {/* Conteúdo */}
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-lg text-gray-300">{description}</p>

      {/* Botão opcional */}
      {buttonText && buttonLink && (
        <Button
          className="mt-6 bg-blue-500 text-white hover:bg-blue-600 transition"
          asChild
        >
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      )}
    </div>
  </section>
)

export default AboutMe
