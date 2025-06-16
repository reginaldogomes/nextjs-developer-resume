import Link from 'next/link'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'

const linkVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md',
        outline:
          'border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md',
        underline: 'text-primary hover:underline',
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  }
)

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string
}

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, children, variant, className, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(linkVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

CustomLink.displayName = 'CustomLink'
