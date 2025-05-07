'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumb: React.FC = () => {
  const pathname = usePathname()
  const paths = pathname.split('/').filter((p) => p)

  return (
    <nav className="text-sm text-gray-300 mb-4">
      <span className="mr-2">Você está em:</span>
      <Link href="/" className="text-white hover:underline">
        Início
      </Link>

      {paths.length > 0 &&
        paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`
          return (
            <span key={index} className="mx-2">
              /{' '}
              <Link
                href={href}
                className="text-white hover:underline capitalize"
              >
                {decodeURIComponent(path)}
              </Link>
            </span>
          )
        })}
    </nav>
  )
}

export default Breadcrumb
