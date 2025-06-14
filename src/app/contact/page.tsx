'use client'

import PageHead from '@/components/layout/PageHead'
import { motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const PageHeadData = {
  title: 'Contato',
  description: 'Fique à vontade para entrar em contato pelos canais abaixo:',
}

const contactData = {
  whatsapp: '(31) 9 9881 1678',
  whatsappLink: 'https://wa.me/5531988811678',
  email: 'contato@reginaldogomes.dev.br',
  location: 'Belo Horizonte, MG',
}

const schema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(5, 'Mensagem muito curta'),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1000)) // simula envio
    console.log('Enviado:', data)
    reset()
  }

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
        <a
          href={contactData.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2"
        >
          <FaWhatsapp className="text-primary text-2xl" />
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            WhatsApp
          </span>
          <span className="text-sm text-foreground">
            {contactData.whatsapp}
          </span>
        </a>

        <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm flex flex-col items-center gap-2">
          <FaEnvelope className="text-primary text-2xl" />
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            E-mail
          </span>
          <span className="text-sm text-foreground">{contactData.email}</span>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm flex flex-col items-center gap-2">
          <FaMapMarkerAlt className="text-primary text-2xl" />
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Localização
          </span>
          <span className="text-sm text-foreground">
            {contactData.location}
          </span>
        </div>
      </motion.div>

      {/* Formulário de Contato */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-8 shadow space-y-6"
      >
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <FaPaperPlane className="text-primary" />
          Enviar mensagem
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground">Nome</label>
            <input
              {...register('name')}
              className="w-full px-4 py-2 border border-border rounded-md bg-white text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground">
              E-mail
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 border border-border rounded-md bg-white text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground">
              Mensagem
            </label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-md bg-white text-sm outline-none resize-none focus:ring-2 focus:ring-primary"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-600 text-sm">
              Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </motion.div>
    </section>
  )
}
