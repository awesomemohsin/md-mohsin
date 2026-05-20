'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { MeshGradientBg } from '@/components/mesh-gradient-bg'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/animated-card'
import { GradientText } from '@/components/gradient-text'
import { AnimatedButton } from '@/components/animated-button'

export default function Home() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with payments & analytics',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    },
    {
      title: 'SaaS Analytics',
      description: 'Real-time analytics dashboard for startups',
      tags: ['React', 'Node.js', 'WebSocket'],
    },
    {
      title: 'Marketing Automation',
      description: 'Campaign management platform with AI insights',
      tags: ['Next.js', 'AI/ML', 'Tailwind'],
    },
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'MongoDB', 'APIs'] },
    { category: 'Marketing', items: ['Growth Strategy', 'Analytics', 'Content', 'SEO'] },
  ]

  return (
    <main className="min-h-screen bg-background">
      <MeshGradientBg className="opacity-40" />
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              I combine technical expertise with marketing insights to build products that scale
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, i) => (
              <AnimatedCard key={i} delay={i * 0.1} variant="glow">
                <h3 className="text-xl font-bold text-primary mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, j) => (
                    <li key={j} className="text-foreground/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <GradientText>Projects</GradientText>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Showcasing my best work across web development and growth marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimatedCard key={i} delay={i * 0.15} variant="gradient">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/60 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <AnimatedButton variant="outline" size="sm">
                  View Project
                </AnimatedButton>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let&apos;s <GradientText>Create Together</GradientText>
            </h2>
            <p className="text-lg text-foreground/60 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <AnimatedButton variant="primary" size="lg">
              Get In Touch
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground/60 text-sm">
            <p>© 2024 Alex. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
