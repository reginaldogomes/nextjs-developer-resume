import { Main } from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { SendPulse } from '@/components/SendPulse'

function ContactPage() {
  return (
    <Main>
      {/* Cabeçalho da página */}
      <PageHead
        title="Contato"
        description="Entre em contato comigo por telefone, e-mail ou visite Belo Horizonte."
      />

      <div className="max-w-4xl mx-auto p-8 text-lg text-gray-800">
        {/* Frase de incentivo ao contato */}
        <p className="text-center text-xl text-gray-600 font-semibold mb-6">
          Ficaremos felizes em ouvir você! Entre em contato pelos canais abaixo.
        </p>

        {/* Informações de contato */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-500" />
            <span>(31) 99999-9999</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <span>reginaldo@email.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Belo Horizonte, MG</span>
          </div>
        </div>

        {/* Formulário de contato */}
        <div className="mt-8">
          <SendPulse />
        </div>
      </div>
    </Main>
  )
}

export default ContactPage
