// app/fonts.ts
import { Inter, Source_Code_Pro } from 'next/font/google'

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
