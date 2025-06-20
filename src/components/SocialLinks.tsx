// components/SocialLinks.tsx
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/__reginaldogomes_',
    icon: <FaInstagram />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/reginaldogomesalves/',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/reginaldogomes/',
    icon: <FaGithub />,
  },
]

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-accent hover:text-accent/85 transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
