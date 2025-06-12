// app/actions/sendEmail.ts
'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: {
  name: string
  company: string
  email: string
  whatsapp: string
  message: string
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `"${formData.name}" <${formData.email}>`,
    to: process.env.SMTP_USER,
    subject: 'Nova Solicitação de Consultoria',
    text: `
      Nome: ${formData.name}
      Empresa: ${formData.company}
      E-mail: ${formData.email}
      WhatsApp: ${formData.whatsapp}
      Mensagem: ${formData.message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return { success: false, error: 'Erro ao enviar e-mail.' }
  }
}
