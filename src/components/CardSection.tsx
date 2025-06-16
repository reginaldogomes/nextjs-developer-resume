import { CustomLink } from './CustomLink'

type CardData = {
  title: string
  description: string
  buttonLabel: string
  linkTo: string
}

const cardsData: CardData[] = [
  {
    title: 'Currículo',
    description:
      'Resumo da minha experiência profissional, com foco em desenvolvimento de soluções digitais estratégicas que entregam valor e resultados concretos para empresas e clientes.',
    buttonLabel: 'Ver detalhes',
    linkTo: '/resume',
  },
  {
    title: 'Serviços',
    description:
      'Descrição dos serviços que ofereço, fundamentados em ampla atuação corporativa em tecnologia, combinando expertise técnica e inovação para impulsionar negócios.',
    buttonLabel: 'Ver detalhes',
    linkTo: '/solutions',
  },
]

export const CardsSection: React.FC = () => {
  return (
    <section className="container mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        {cardsData.map(({ title, description, buttonLabel, linkTo }) => (
          <div
            key={title}
            className="bg-card rounded-lg p-6 shadow-md border"
            role="region"
            aria-labelledby={`${title.toLowerCase()}-title`}
          >
            <h2
              id={`${title.toLowerCase()}-title`}
              className="font-mono font-bold text-lg mb-3 text-accent"
            >
              {title}
            </h2>
            <p className="text-muted leading-relaxed whitespace-pre-line mb-5">
              {description}
            </p>
            <CustomLink href={linkTo} variant={'outline'}>
              {buttonLabel}
            </CustomLink>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardsSection
