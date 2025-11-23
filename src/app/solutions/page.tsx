import Container from '@/components/ui/Container'
import PageHead from '@/components/layout/PageHead'
import ServicesCards from '@/components/sections/ServicesCards'
import servicesData from '@/data/services.json'

const PageHeadData = {
  title: 'Serviços',
  description: 'Ofereço soluções personalizadas e inovadoras em tecnologia.',
}

const Page = () => {
  return (
    <section className="w-full py-24">
      <Container>
        <PageHead
          title={PageHeadData.title}
          description={PageHeadData.description}
        />
        <ServicesCards services={servicesData} />
      </Container>
    </section>
  )
}

export default Page
