// components/WhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999" // Substitua pelo número do WhatsApp desejado
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
    >
      <FaWhatsapp size={24} /> {/* Usa o ícone do WhatsApp */}
    </a>
  )
}

export default WhatsAppButton
