import Main from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'
import Services from '@/components/Services'
import React from 'react'

const Page = () => {
  return (
    <section className="w-full mx-auto px-4 py-16 space-y-12">
      <PageHead
        title="Serviços"
        description="Esta é uma breve descrição do conteúdo."
      />
      <Services />
    </section>
  )
}

export default Page
