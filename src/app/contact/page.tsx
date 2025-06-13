'use client'

import PageHead from '@/components/layout/PageHead'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const PageHeadData = {
  title: 'Contato',
  description:
    'Estou sempre aberto a novas ideias, oportunidades e conexões profissionais. Fique à vontade para entrar em contato pelos canais abaixo:',
}

const contactData = {
  phone: '(31) 9 9881 1678',
  email: 'contato@reginaldogomes.dev.br',
  location: 'Belo Horizonte, MG',
}

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <PageHead
        title={PageHeadData.title}
        description={PageHeadData.description}
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {[
          {
            icon: <FaPhoneAlt className="text-primary text-2xl" />,
            label: 'Telefone',
            value: contactData.phone,
          },
          {
            icon: <FaEnvelope className="text-primary text-2xl" />,
            label: 'E-mail',
            value: contactData.email,
          },
          {
            icon: <FaMapMarkerAlt className="text-primary text-2xl" />,
            label: 'Localização',
            value: contactData.location,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2"
          >
            {item.icon}
            <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
              {item.label}
            </span>
            <span className="text-sm text-foreground">{item.value}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
