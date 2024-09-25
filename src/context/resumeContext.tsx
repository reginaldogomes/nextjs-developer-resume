'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// Definição do tipo dos dados do perfil
interface Experience {
  role: string
  company: string
  duration: string
  details: string
}

interface Education {
  degree: string
  institution: string
  year: string
}

interface Profile {
  name: string
  title: string
  description: string
  experience: Experience[]
  education: Education[]
  skills: string[]
}

// Valores iniciais dos dados do perfil
const initialProfile: Profile = {
  name: 'Reginaldo Gomes',
  title: 'Analista Desenvolvedor Front-end',
  description:
    'Desenvolvedor Front-End com sólida experiência em JavaScript, especializado em React.js e Next.js para o desenvolvimento de interfaces modernas, dinâmicas e escaláveis. Atuo de forma consistente em ambientes de cloud computing, com foco em AWS, e aplico boas práticas de DevOps para automação e gerenciamento eficiente de infraestrutura.',
  experience: [
    {
      role: 'Web Development Analyst',
      company: 'Tech Company',
      duration: '2022 - Present',
      details:
        'Working on cloud-based digital solutions, focusing on front-end technologies like React, Next.js, and AWS services.',
    },
    {
      role: 'Frontend Developer',
      company: 'Lisait',
      duration: '2021 - 2022',
      details:
        'Developed web applications using React.js, integrated APIs, and improved application performance.',
    },
  ],
  education: [
    {
      degree: "Bachelor's in Software Engineering",
      institution: 'University XYZ',
      year: '2024',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'AWS',
    'Clean Architecture',
    'SOLID',
    'Python',
    'Go',
  ],
}

// Criando o contexto com valor inicial
const ProfileContext = createContext<{
  profile: Profile
  setProfile: (profile: Profile) => void
}>({
  profile: initialProfile,
  setProfile: () => {},
})

// Provider que encapsula a aplicação
export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile>(initialProfile)

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

// Hook para usar o contexto
export const useProfile = () => useContext(ProfileContext)
