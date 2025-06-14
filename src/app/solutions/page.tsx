import PageHead from '@/components/layout/PageHead'
import Services from '@/components/Services'

const PageHeadData = {
  title: 'Serviços',
  description:
    'Ofereço soluções personalizadas e inovadoras em tecnologia. Entre em contato pelos canais abaixo para juntos criarmos resultados significativos.',
}

const Page = () => {
  return (
    <section className="max-w-5xl mx-auto px-4">
      <PageHead
        title={PageHeadData.title}
        description={PageHeadData.description}
      />
      <Services />
    </section>
  )
}

export default Page
