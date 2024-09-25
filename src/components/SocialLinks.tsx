// components/SocialLinks.tsx
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

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
          className="text-2xl text-blue-500 hover:text-blue-700 transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
