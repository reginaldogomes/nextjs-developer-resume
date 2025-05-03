'use client'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const userData = {
  nome: 'João da Silva',
  cargo: 'Desenvolvedor Front-end',
  resumo:
    'Desenvolvedor apaixonado por tecnologia, com experiência em criação de aplicações modernas e responsivas.',
  objetivo:
    'Busco desafios que me permitam evoluir e contribuir com soluções eficientes em tecnologia.',
  experiencia: [
    '💼 Desenvolvedor Front-end - Empresa XYZ (2021 - Atual)',
    '💼 Estagiário em Desenvolvimento Web - Startup ABC (2019 - 2021)',
  ],
  competencias: [
    '🚀 React & Next.js',
    '🎨 Tailwind CSS',
    '⚙️ Git & CI/CD',
    '📦 Node.js & MongoDB',
  ],
}

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4 py-10 sm:px-6">
      <motion.div
        className="w-full max-w-3xl bg-opacity-90 backdrop-blur-md p-8 shadow-xl rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-3xl font-bold text-gray-900">
            {userData.nome}
          </CardTitle>
          <p className="text-gray-500 text-lg">{userData.cargo}</p>
        </CardHeader>

        <CardContent className="space-y-8">
          {[
            { title: 'Resumo Profissional', content: userData.resumo },
            { title: 'Objetivo Profissional', content: userData.objetivo },
            {
              title: 'Experiência Profissional',
              content: userData.experiencia,
            },
            { title: 'Competências Técnicas', content: userData.competencias },
          ].map((item, index) => (
            <motion.section
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                index % 2 === 0
                  ? 'bg-gray-800 text-gray-200'
                  : 'bg-gray-700 text-gray-100'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              {Array.isArray(item.content) ? (
                <ul className="space-y-2 mt-2">
                  {item.content.map((text, i) => (
                    <li key={i} className="text-gray-300 text-base">
                      {text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-base mt-2">{item.content}</p>
              )}
            </motion.section>
          ))}
        </CardContent>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button className="bg-gray-800 text-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all">
            Baixar Currículo
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Page
