// components/ContactForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '../schemas/contactSchema'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useCreateContact } from '../hooks/useContacts'

interface ContactFormData {
  First_Name: string
  Last_Name: string
  Email: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const { mutate, isLoading } = useCreateContact()

  const onSubmit = (data: ContactFormData) => mutate(data)

  return (
    <Card className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome */}
        <div>
          <label htmlFor="First_Name" className="block text-gray-700">
            Nome:
          </label>
          <Input
            id="First_Name"
            aria-label="Nome"
            {...register('First_Name')}
            className="w-full"
          />
          {errors.First_Name && (
            <p className="text-red-500 text-sm">{errors.First_Name.message}</p>
          )}
        </div>

        {/* Sobrenome */}
        <div>
          <label htmlFor="Last_Name" className="block text-gray-700">
            Sobrenome:
          </label>
          <Input
            id="Last_Name"
            aria-label="Sobrenome"
            {...register('Last_Name')}
            className="w-full"
          />
          {errors.Last_Name && (
            <p className="text-red-500 text-sm">{errors.Last_Name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="Email" className="block text-gray-700">
            Email:
          </label>
          <Input
            id="Email"
            aria-label="Email"
            type="email"
            {...register('Email')}
            className="w-full"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm">{errors.Email.message}</p>
          )}
        </div>

        {/* Botão de envio */}
        <Button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Criando...' : 'Criar Contato'}
        </Button>
      </form>
    </Card>
  )
}
