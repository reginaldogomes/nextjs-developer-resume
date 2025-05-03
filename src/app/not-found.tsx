import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800 font-sans">
      <h1 className="text-5xl font-bold mb-4">Oops! Página não encontrada.</h1>
      <p className="text-lg max-w-md">
        Parece que você se perdeu no caminho. Mas não se preocupe, podemos te
        ajudar a voltar para a rota certa!
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-lg transition duration-300 hover:bg-blue-700"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
}
