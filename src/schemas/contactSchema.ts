import { z } from 'zod'

export const contactSchema = z.object({
  First_Name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  Last_Name: z.string().min(2, 'Sobrenome deve ter pelo menos 2 caracteres'),
  Email: z.string().email('Email inválido'),
})
