import Main from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'
import Services from '@/components/Services'
import React from 'react'

const Page = () => {
  return (
    <Main>
      <PageHead
        title="Serviços"
        description="Esta é uma breve descrição do conteúdo."
      />
      <Services />
    </Main>
  )
}

export default Page
