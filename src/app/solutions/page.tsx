import PageHead from '@/components/layout/PageHead'
import Services from '@/components/Services'

const PageHeadData = {
  title: 'Serviços',
  description: 'Ofereço soluções personalizadas e inovadoras em tecnologia.',
}

const Page = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <PageHead
        title={PageHeadData.title}
        description={PageHeadData.description}
      />
      <Services />
    </section>
  )
}

export default Page
