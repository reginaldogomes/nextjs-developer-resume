import { FaUserTie, FaBriefcase, FaCloud, FaRobot } from 'react-icons/fa'
import AboutMe from '@/components/Widget'

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 bg-background">
      <AboutMe
        icon={<FaUserTie className="text-purple-400 text-4xl" />}
        title="Sobre"
        description="Mais do que escrever códigos, ofereço soluções digitais estratégicas que geram valor real e resultados concretos para empresas e clientes."
        buttonLink="/sobre"
      />
      <AboutMe
        icon={<FaBriefcase className="text-purple-400 text-4xl" />}
        title="Currículo"
        description="Minha trajetória inclui ampla atuação corporativa em projetos de tecnologia, destacando competências técnicas e foco em inovação estratégica."
        buttonLink="/cv"
      />
      <AboutMe
        icon={<FaCloud className="text-purple-400 text-4xl" />}
        title="Cloud"
        description="Especialista em soluções escaláveis, seguras e com alta disponibilidade na nuvem."
        buttonLink="/cloud"
      />
      <AboutMe
        icon={<FaRobot className="text-purple-400 text-4xl" />}
        title="IA e Bots"
        description="Implantação de IA generativa, automação de vendas e chatbots personalizados."
        buttonLink="/ia"
      />
    </div>
  )
}
