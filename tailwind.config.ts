import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-source-code-pro)', 'monospace'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config
