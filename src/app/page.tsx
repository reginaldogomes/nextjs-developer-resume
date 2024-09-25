import Image from 'next/image'
import { Main } from '@/components/Main'
import { Hero } from '@/components/Hero'
import FeatureList from '@/components/Skills'

export default function Home() {
  return (
    <Main>
      <Hero />
      <FeatureList />
    </Main>
  )
}
