import React from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import SocialLinks from '@/components/SocialLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Reginaldo<span className="text-primary">Gomes</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Desenvolvedor Front-end focado em criar experiências digitais
              modernas, rápidas e acessíveis.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Sobre
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Projetos
              </Link>
              <Link
                href="/solutions"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Serviços
              </Link>
              <Link
                href="/resume"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Currículo
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contato
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Conecte-se</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Reginaldo Gomes. Todos os direitos reservados.
          </p>
          <p>Desenvolvido com Next.js e Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
