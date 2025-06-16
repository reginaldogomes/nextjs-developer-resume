export interface Article {
  id: number
  title: string
  slug: string
  autor: string
  tags: string[]
  publishedAt: string
  resumo: string
  content: string
}

export const articles: Article[] = [
  {
    id: 1,
    title:
      '5 Estratégias para Elevar a Qualidade de Aplicações React com Observabilidade, Performance e Código Limpo',
    slug: 'estrategias-qualidade-react-observabilidade-performance',
    autor: 'Reginaldo Gomes',
    tags: [
      'React',
      'TypeScript',
      'New Relic',
      'Performance',
      'Tailwind',
      'Logs',
    ],
    publishedAt: '2025-06-14',
    resumo:
      'Descubra como utilizar observabilidade, performance e boas práticas com TypeScript e Tailwind para construir aplicações React robustas, rastreáveis e com alta performance.',
    content: `### 5 Estratégias para Elevar a Qualidade de Aplicações React com Observabilidade, Performance e Código Limpo

Em um cenário onde a experiência do usuário é determinante para o sucesso de produtos digitais, o papel do desenvolvedor front-end vai muito além de escrever código funcional...

1. **Instrumentação com New Relic**: monitore suas aplicações React em tempo real.
2. **Boas práticas com TypeScript**: tipos fortes ajudam a manter o código escalável e seguro.
3. **Estilização com Tailwind**: produtividade com design consistente.
4. **Auditoria com Lighthouse**: meça performance, acessibilidade e SEO.
5. **Tratamento de erros com logs e Sentry**: rastreamento eficiente e inteligente.`,
  },
  {
    id: 2,
    title:
      'Como Monitorar Aplicações Front-End com New Relic e Sentry: Guia Prático para Desenvolvedores',
    slug: 'monitorar-front-end-new-relic-sentry',
    autor: 'Reginaldo Gomes',
    tags: [
      'New Relic',
      'Sentry',
      'Monitoramento',
      'Front-end',
      'Observabilidade',
      'React',
    ],
    publishedAt: '2025-06-10',
    resumo:
      'Aprenda como integrar e utilizar ferramentas como New Relic e Sentry para obter visibilidade total sobre o comportamento e os erros de aplicações front-end em produção.',
    content: `### Como Monitorar Aplicações Front-End com New Relic e Sentry

Em aplicações modernas, não basta saber que algo deu errado — é preciso saber o porquê, onde e como reproduzir. É aí que entram ferramentas como New Relic e Sentry...

- **New Relic** para rastrear métricas de desempenho e gargalos em tempo real.
- **Sentry** para capturar e contextualizar erros com stack traces e breadcrumbs.
- **Alertas personalizados** para agir proativamente com base nos indicadores certos.`,
  },
  {
    id: 3,
    title:
      'Melhores Práticas de Performance e Acessibilidade com Lighthouse em Projetos React',
    slug: 'performance-acessibilidade-lighthouse-react',
    autor: 'Reginaldo Gomes',
    tags: [
      'Lighthouse',
      'Performance',
      'Acessibilidade',
      'React',
      'Auditoria',
      'UX',
    ],
    publishedAt: '2025-06-05',
    resumo:
      'Auditar sua aplicação com Lighthouse é essencial para garantir performance, acessibilidade e SEO. Veja como aplicar as métricas corretamente em projetos com React.',
    content: `### Melhores Práticas de Performance e Acessibilidade com Lighthouse

Quando falamos em qualidade de aplicações web, o Lighthouse se torna um grande aliado. Ele avalia métricas técnicas e de usabilidade que impactam diretamente na experiência do usuário.

- **Performance**: análise de tempo de carregamento, LCP e TTI.
- **Acessibilidade**: contrastes, navegação por teclado, uso de ARIA.
- **Boas práticas**: HTTPS, segurança, sem erros JavaScript.
- **SEO técnico**: uso correto de tags, metadados e indexação.`,
  },
]
