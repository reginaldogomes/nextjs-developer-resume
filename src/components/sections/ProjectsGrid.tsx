'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Container from '@/components/ui/Container'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  github: string
}

interface ProjectsGridProps {
  projects: Project[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <section className="py-32 bg-secondary/20">
      <Container>
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de projetos que demonstram minha paixão por criar
            soluções digitais inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  {/* Placeholder for image if not available or valid */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary">
                    <span className="text-sm">Image Placeholder</span>
                  </div>
                  {/* Uncomment when images are real */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  /> */}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-4 border-t border-border/50">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="ghost" size="lg">
            <Link href="/projects">
              Ver todos os projetos <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'

export default ProjectsGrid
