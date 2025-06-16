import { FiCpu, FiSearch, FiZap, FiCloud } from 'react-icons/fi'
import { FaPalette, FaRobot, FaShoppingCart } from 'react-icons/fa'
import { HiOutlineRocketLaunch, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { AiOutlineAppstore, AiOutlineBarChart } from 'react-icons/ai'

export const services = [
  {
    slug: 'ui-design',
    icon: <FaPalette className="text-primary w-5 h-5" />,
    title: 'UI Design',
    description: 'Design de interfaces intuitivas, modernas e acessíveis.',
    content: `Criação de interfaces responsivas e acessíveis focadas na experiência do usuário (UX). Utilizo Figma, Design Tokens, sistemas de grade e bibliotecas modernas como Tailwind e Shadcn UI para garantir consistência visual e escalabilidade.`,
  },
  {
    slug: 'front-end',
    icon: <FiCpu className="text-primary w-5 h-5" />,
    title: 'Front-end',
    description: 'Desenvolvimento moderno com React, Next.js e TypeScript.',
    content: `Criação de aplicações modernas, modulares e performáticas com React, Next.js 15, TypeScript, Server Actions, hooks personalizados e boas práticas de acessibilidade. Utilizo bibliotecas como Framer Motion, Radix UI e integrações com APIs externas.`,
  },
  {
    slug: 'design-systems',
    icon: <AiOutlineAppstore className="text-primary w-5 h-5" />,
    title: 'Design Systems',
    description: 'Soluções visuais reutilizáveis para consistência e escala.',
    content: `Estruturação de Design Systems escaláveis com documentação, tokens de design e bibliotecas UI. Crio sistemas visuais integrados entre Figma e código com Shadcn, Radix e Tailwind para acelerar o desenvolvimento e garantir uniformidade.`,
  },
  {
    slug: 'seo-tecnico',
    icon: <FiSearch className="text-primary w-5 h-5" />,
    title: 'SEO Técnico',
    description: 'Otimização de sites para buscadores e Core Web Vitals.',
    content: `Auditoria e implementação de melhorias técnicas para SEO, incluindo estruturação de metadados, sitemap, performance, acessibilidade e responsividade. Integração com ferramentas como Google Search Console e análise com Lighthouse.`,
  },
  {
    slug: 'performance-web',
    icon: <HiOutlineRocketLaunch className="text-primary w-5 h-5" />,
    title: 'Performance Web',
    description: 'Velocidade e fluidez para máxima experiência digital.',
    content: `Otimização de performance com foco em tempo de carregamento, lazy loading, compactação, SSR e análise com ferramentas como Lighthouse e WebPageTest. Aplicações mais rápidas, leves e com melhor UX.`,
  },
  {
    slug: 'agentes-inteligentes',
    icon: <FaRobot className="text-primary w-5 h-5" />,
    title: 'Agentes Inteligentes',
    description: 'Criação de bots e agentes de IA para automação digital.',
    content: `Implantação de agentes de IA com Copilot Studio, OpenAI, RAG e Power Automate para atendimento, vendas, suporte e fluxos internos. Integração com WhatsApp, CRMs, APIs e bancos de dados para automações inteligentes.`,
  },
  {
    slug: 'cloud-computing',
    icon: <FiCloud className="text-primary w-5 h-5" />,
    title: 'Cloud Computing',
    description: 'Infraestrutura escalável e segura na nuvem.',
    content: `Criação, configuração e gestão de ambientes cloud com AWS, Azure e Vercel. Utilização de containers, deploy contínuo, proxies reversos com NGINX, certificados SSL e monitoramento com PM2 e Uptime Kuma.`,
  },
  {
    slug: 'estrategias-digitais',
    icon: <HiOutlineGlobeAlt className="text-primary w-5 h-5" />,
    title: 'Estratégias Digitais',
    description: 'Conectando produtos, APIs, marketing e vendas.',
    content: `Planejamento e execução de estratégias digitais unindo tecnologia e negócios. Integrações com APIs, CRMs, automações de marketing, analytics e personalização da jornada do cliente com foco em resultados.`,
  },
  {
    slug: 'ecommerce',
    icon: <FaShoppingCart className="text-primary w-5 h-5" />,
    title: 'E-commerce',
    description: 'Lojas modernas, escaláveis e otimizadas para conversão.',
    content: `Criação de lojas online integradas com gateways de pagamento, sistemas de frete e CRM. Utilização de frameworks modernos como Next.js Commerce, Storefronts, Shopify Headless ou WooCommerce com foco em performance e SEO.`,
  },
]

export type ServiceType = (typeof services)[number]
