'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const SendPulse = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('Inscrição realizada com sucesso!')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <Card className="w-full max-w-xl p-6 shadow-xl border border-gray-800 bg-gray-800">
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
            className="space-y-4"
          >
            <div>
              <Label htmlFor="name" className="text-yellow-400">
                Nome
              </Label>
              <Input
                type="text"
                name="name"
                required
                className="mt-1 border-none bg-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-yellow-400">
                E-mail
              </Label>
              <Input
                type="email"
                required
                name="email"
                className="mt-1 border-none bg-gray-700 text-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold hover:bg-yellow-500"
            >
              Assinar
            </Button>
          </form>
          {message && (
            <div className="mt-4 text-center text-yellow-400 font-medium">
              {message}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
