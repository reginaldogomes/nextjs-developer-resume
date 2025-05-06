'use client'
import Section from '@/components/Section'
import { useProfile } from '@/context/resumeContext'
import Link from 'next/link'

export const Hero = () => {
  const { profile } = useProfile()

  return (
    <Section>
      <h1 className="text-4xl text-center lg:text-5xl">{profile.title}</h1>
      <p className="text-2xl text-center">{profile.description}</p>
      <Link
        href="/about"
        className="mx-auto bg-primary text-white text-2xl p-4"
      >
        Sobre Mim
      </Link>
    </Section>
  )
}
