'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// Esquema de validação Zod
const formSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  company: z.string().min(2, 'Nome da empresa inválido'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(9, 'Número de WhatsApp inválido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
})

// Tipagem do formulário
type FormData = z.infer<typeof formSchema>

export default function CallToAction() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    alert(`Solicitação enviada com sucesso!`)
    console.log('Dados do formulário:', data)
  }

  return (
    <section className="w-full py-16 px-6 bg-[#1A1A1A] text-[#F0F0F0] flex flex-col items-center text-center">
      {/* Título e Descrição */}
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold">
          🚀 Transforme sua Estratégia Digital!
        </h2>
        <p className="text-lg mt-4 text-[#B0B0B0]">
          Solicite uma consultoria personalizada para alavancar sua presença
          digital e aumentar seus resultados!
        </p>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl bg-[#2C2C2C] p-6 rounded-lg shadow-md"
      >
        <div>
          <Input
            type="text"
            placeholder="Nome"
            {...register('name')}
            aria-invalid={!!errors.name}
            className="w-full p-3 rounded-md border border-[#3A3A3A] bg-[#1A1A1A] text-[#F0F0F0]"
          />
          {errors.name && (
            <p className="text-[#F85149] text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder="Empresa"
            {...register('company')}
            aria-invalid={!!errors.company}
            className="w-full p-3 rounded-md border border-[#3A3A3A] bg-[#1A1A1A] text-[#F0F0F0]"
          />
          {errors.company && (
            <p className="text-[#F85149] text-sm mt-1">
              {errors.company.message}
            </p>
          )}
        </div>
        <div>
          <Input
            type="email"
            placeholder="E-mail"
            {...register('email')}
            aria-invalid={!!errors.email}
            className="w-full p-3 rounded-md border border-[#3A3A3A] bg-[#1A1A1A] text-[#F0F0F0]"
          />
          {errors.email && (
            <p className="text-[#F85149] text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Input
            type="text"
            placeholder="WhatsApp"
            {...register('whatsapp')}
            aria-invalid={!!errors.whatsapp}
            className="w-full p-3 rounded-md border border-[#3A3A3A] bg-[#1A1A1A] text-[#F0F0F0]"
          />
          {errors.whatsapp && (
            <p className="text-[#F85149] text-sm mt-1">
              {errors.whatsapp.message}
            </p>
          )}
        </div>
        <div className="col-span-1 md:col-span-2">
          <textarea
            placeholder="Sua mensagem..."
            className="w-full p-3 rounded-md border border-[#3A3A3A] bg-[#1A1A1A] text-[#F0F0F0]"
            rows={4}
            {...register('message')}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-[#F85149] text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="col-span-1 md:col-span-2 w-full bg-[#004D61] hover:bg-[#005f7a] text-[#F0F0F0] font-semibold py-3 px-6 rounded-md"
        >
          Solicitar Consultoria
        </Button>
      </form>
    </section>
  )
}
