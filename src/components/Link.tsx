import Link from 'next/link'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const linkVariants = cva('cursor-pointer transition font-medium', {
  variants: {
    style: {
      background: 'px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700',
      underline: 'text-blue-600 hover:underline',
    },
  },
  defaultVariants: {
    style: 'underline',
  },
})

interface CustomLinkProps extends VariantProps<typeof linkVariants> {
  href: string
  children: React.ReactNode
}

export function CustomLink({ href, children, style }: CustomLinkProps) {
  return (
    <Link href={href} className={cn(linkVariants({ style }))}>
      {children}
    </Link>
  )
}
