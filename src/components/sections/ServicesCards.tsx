'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FiCpu,
  FiSearch,
  FiZap,
  FiCloud,
  FiLayout,
  FiCode,
  FiDatabase,
  FiSmartphone,
} from 'react-icons/fi'
import {
  FaPalette,
  FaRobot,
  FaShoppingCart,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import { HiOutlineRocketLaunch, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { AiOutlineAppstore, AiOutlineBarChart } from 'react-icons/ai'

import Container from '@/components/ui/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  FaPalette: FaPalette,
  FiCpu: FiCpu,
  AiOutlineAppstore: AiOutlineAppstore,
  FiSearch: FiSearch,
  HiOutlineRocketLaunch: HiOutlineRocketLaunch,
  FaRobot: FaRobot,
  FiCloud: FiCloud,
  HiOutlineGlobeAlt: HiOutlineGlobeAlt,
  FaShoppingCart: FaShoppingCart,
  // Add more as needed
  FiLayout: FiLayout,
  FiCode: FiCode,
  FiDatabase: FiDatabase,
  FiSmartphone: FiSmartphone,
  AiOutlineBarChart: AiOutlineBarChart,
  FiZap: FiZap,
}

interface Service {
  slug: string
  icon: string
  title: string
  description: string
  content: string
}

interface ServicesCardsProps {
  services: Service[]
}

const ServicesCards: React.FC<ServicesCardsProps> = ({ services }) => {
  return (
    <section className="py-32 bg-background">
      <Container>
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Soluções & Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise técnica combinada com visão estratégica para impulsionar
            seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FiCode
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    {/* <p className="text-xs text-muted-foreground/80 line-clamp-3">
                      {service.content}
                    </p> */}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesCards
