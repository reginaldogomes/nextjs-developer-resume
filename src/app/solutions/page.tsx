import PageHead from '@/components/layout/PageHead'
import Services from '@/components/Services'

const PageHeadData = {
  title: 'Serviços',
  description:
    'Estou sempre aberto a novas ideias, oportunidades e conexões profissionais. Fique à vontade para entrar em contato pelos canais abaixo:',
}

const Page = () => {
  return (
    <section className="w-full mx-auto px-4 py-16 space-y-12">
      <PageHead
        title={PageHeadData.title}
        description={PageHeadData.description}
      />
      <Services />
    </section>
  )
}

export default Page
