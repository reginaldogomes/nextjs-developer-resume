'use client'

import Main from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const PageHeadData = {
  title: 'Contato',
  description:
    'Entre em contato para informações, propostas ou colaborações. Responderei o mais breve possível.',
}

const contactData = {
  intro: 'Ficarei feliz em ouvir você. Entre em contato pelos canais abaixo.',
  phone: '(31) 9 9881 1678',
  email: 'contato@reginaldogomes.dev.br',
  location: 'Belo Horizonte, MG',
}

function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <PageHead
        title={PageHeadData.title}
        description={PageHeadData.description}
      />
      <motion.div
        className="space-y-8 bg-surface p-8 rounded-xl shadow-md border border-border"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-muted text-center">{contactData.intro}</p>

        <div className="space-y-5">
          <div className="flex items-center gap-3 text-foreground">
            <FaPhoneAlt className="text-primary" />
            <span>{contactData.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <FaEnvelope className="text-primary" />
            <span>{contactData.email}</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <FaMapMarkerAlt className="text-primary" />
            <span>{contactData.location}</span>
          </div>
        </div>

        {/* Espaço reservado para formulário */}
        <div className="pt-6 border-t border-border text-center text-sm text-muted">
          Formulário em construção...
        </div>
      </motion.div>
    </div>
  )
}

export default ContactPage
