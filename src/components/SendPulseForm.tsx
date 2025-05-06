'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Toaster, toast } from 'sonner' // Importando corretamente

export const SendPulse = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Exibir notificação usando sonner
    toast.success('Inscrição realizada com sucesso!', {
      description: 'Você receberá nossas novidades por e-mail.',
    })

    // Resetar os campos do formulário
    setFormData({ name: '', email: '' })
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <Toaster position="top-right" richColors /> {/* Adicionando o Toaster */}
      <Card className="w-full max-w-xl p-6 shadow-xl border border-gray-700 bg-gray-800 rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-yellow-400">
            Entre em contato
          </CardTitle>
          <p className="text-center text-sm text-gray-400">
            Assine nossa newsletter para receber novidades!
          </p>
        </CardHeader>
        <CardContent>
          <form
            action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo5MDYwNDI4LCJhZGRyZXNzX2Jvb2tfaWQiOjIwODcxOSwibGFuZyI6InB0LWJyIn0="
            method="post"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 border-none bg-gray-700 text-white focus:ring-yellow-400"
                aria-label="Digite seu nome"
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 border-none bg-gray-700 text-white focus:ring-yellow-400"
                aria-label="Digite seu e-mail"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-yellow-500"
            >
              Assinar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
