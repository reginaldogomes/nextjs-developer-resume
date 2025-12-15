'use client'

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
import Container from '@/components/ui/Container'
import PageHead from '@/components/layout/PageHead'

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
    await new Promise((res) => setTimeout(res, 1000))
    console.log('Enviado:', data)
    reset()
  }

  return (
    <section className="w-full py-24">
      <Container>
        <PageHead
          title={PageHeadData.title}
          description={PageHeadData.description}
        />

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={contactData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center gap-3 hover:border-primary/50"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <FaWhatsapp className="text-primary text-3xl" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              WhatsApp
            </span>
            <span className="text-base text-foreground font-medium">
              {contactData.whatsapp}
            </span>
          </a>

          <div className="bg-card border border-border rounded-xl p-8 text-center shadow-sm flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <FaEnvelope className="text-primary text-3xl" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              E-mail
            </span>
            <span className="text-base text-foreground font-medium">
              {contactData.email}
            </span>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center shadow-sm flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <FaMapMarkerAlt className="text-primary text-3xl" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Localização
            </span>
            <span className="text-base text-foreground font-medium">
              {contactData.location}
            </span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-sm max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FaPaperPlane className="text-primary text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Enviar mensagem
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">
                Nome
              </label>
              <input
                {...register('name')}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-base outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">
                E-mail
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-base outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">
                Mensagem
              </label>
              <textarea
                {...register('message')}
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-base outline-none resize-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Como posso ajudar você?"
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-600 text-sm text-center font-medium">
                ✓ Mensagem enviada com sucesso!
              </p>
            )}
          </form>
        </motion.div>
      </Container>
    </section>
  )
}
