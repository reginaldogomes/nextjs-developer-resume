import Main from '@/components/layout/Main'
import Services from '@/components/Services'
import React from 'react'

const Page = () => {
  return (
    <Main>
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold">Serviços Especializados</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Estratégia, design e desenvolvimento para experiências digitais
          excepcionais.
        </p>
      </div>
      <Services />
    </Main>
  )
}

export default Page
