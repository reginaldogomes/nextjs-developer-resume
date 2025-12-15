'use client'

import { motion } from 'framer-motion'
import {
  FaUser,
  FaBullseye,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaChevronRight,
  FaBuilding,
} from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import Container from '@/components/ui/Container'
import PageHead from '@/components/layout/PageHead'
import resumeData from '@/data/resume.json'

const PageHeadData = {
  title: 'Currículo',
  description:
    'Explore minha trajetória profissional em tecnologia e inovação.',
}

const Page = () => {
  return (
    <section className="w-full py-24">
      <Container>
        <PageHead
          title={PageHeadData.title}
          description={PageHeadData.description}
        />

        {/* Header */}

        <div className="space-y-16">
          {/* Objetivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FaBullseye className="text-primary text-xl" />
              </div>
              <h2 className="text-3xl font-bold">Objetivo Profissional</h2>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
              <p className="text-muted-foreground leading-relaxed">
                {resumeData.objective}
              </p>
            </div>
          </motion.div>

          {/* Experiência Profissional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FaBriefcase className="text-primary text-xl" />
              </div>
              <h2 className="text-3xl font-bold">Experiência Profissional</h2>
            </div>

            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index !== resumeData.experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-border -z-10" />
                  )}

                  <div className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <div className="bg-secondary/30 p-6 border-b border-border">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 text-foreground">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-3">
                            <div className="flex items-center gap-2">
                              <FaBuilding className="text-primary" />
                              <span className="font-semibold text-foreground">
                                {exp.company}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-primary" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <FaCalendarAlt className="text-primary" />
                            <span className="font-medium">{exp.duration}</span>
                            <Badge variant="secondary" className="ml-2">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="p-6">
                      <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                        <FaChevronRight className="text-primary text-sm" />
                        Responsabilidades
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                        <FaChevronRight className="text-primary text-sm" />
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="default"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formação Acadêmica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FaGraduationCap className="text-primary text-xl" />
              </div>
              <h2 className="text-3xl font-bold">Formação Acadêmica</h2>
            </div>

            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {edu.field}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <FaGraduationCap className="text-primary" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-primary" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-primary" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={
                        edu.status === 'Em andamento' ? 'default' : 'secondary'
                      }
                      className="h-fit"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificações */}
          {resumeData.certifications && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaAward className="text-primary text-xl" />
                </div>
                <h2 className="text-3xl font-bold">Certificações & Cursos</h2>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resumeData.certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200"
                    >
                      <FaAward className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Page
