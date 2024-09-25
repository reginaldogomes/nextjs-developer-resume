'use client'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import { useProfile } from '@/context/resumeContext'

export const Hero = () => {
  const { profile } = useProfile()

  return (
    <Section>
      <h1 className="text-4xl text-center lg:text-5xl">{profile.title}</h1>
      <p className="text-2xl text-center">{profile.description}</p>
      <Button
        variant="secondary"
        className="mx-auto bg-blue-600 text-white text-2xl p-4"
      >
        Sobre Mim
      </Button>
    </Section>
  )
}
