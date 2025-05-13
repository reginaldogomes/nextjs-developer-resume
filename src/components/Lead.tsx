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

export default function CallToAction() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: any) => {
    alert(`Solicitação enviada com sucesso!`)
    console.log('Dados do formulário:', data)
  }

  return (
    <section className="container mx-auto px-6 py-12 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl">
      {/* Título e Descrição */}
      <h2 className="text-4xl font-bold">
        🚀 Transforme sua Estratégia Digital!
      </h2>
      <p className="text-lg mt-4 max-w-xl mx-auto">
        Solicite uma consultoria personalizada para alavancar sua presença
        digital e aumentar seus resultados!
      </p>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div>
          <Input type="text" placeholder="Nome" {...register('name')} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input type="text" placeholder="Empresa" {...register('company')} />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>
        <div>
          <Input type="email" placeholder="E-mail" {...register('email')} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input type="text" placeholder="WhatsApp" {...register('whatsapp')} />
          {errors.whatsapp && (
            <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
          )}
        </div>
        <div className="col-span-2">
          <textarea
            placeholder="Sua mensagem..."
            className="w-full p-3 rounded-md border border-gray-300"
            rows={4}
            {...register('message')}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="col-span-2 w-full bg-blue-600 hover:bg-blue-700"
        >
          Solicitar Consultoria
        </Button>
      </form>
    </section>
  )
}
