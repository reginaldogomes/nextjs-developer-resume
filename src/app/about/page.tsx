'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const about = `Sou um Desenvolvedor Full-Stack Web com Especialização em Front-End, com mais de 15 anos de experiência no desenvolvimento de aplicações web. Minha atuação é focada na criação de interfaces de alto desempenho, garantindo responsividade, usabilidade e uma experiência aprimorada para o usuário.`

const journey = `Minha trajetória começou há mais de 15 anos, quando me apaixonei pelo desenvolvimento web. Desde então, trabalhei em diversos projetos, adquirindo conhecimento em tecnologias modernas e metodologias ágeis. Minha especialidade é transformar ideias em interfaces intuitivas e de alto desempenho.`

export default function Page() {
  return (
    <motion.div
      className="container mx-auto p-6 flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Sobre Mim</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{about}</p>
        </CardContent>
      </Card>

      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Minha Trajetória</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{journey}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
