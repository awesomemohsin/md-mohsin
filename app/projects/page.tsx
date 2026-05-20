'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { MeshGradientBg } from '@/components/mesh-gradient-bg'
import { AnimatedCard } from '@/components/animated-card'
import { GradientText } from '@/components/gradient-text'
import { AnimatedButton } from '@/components/animated-button'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'frontend', 'fullstack', 'saas', 'marketing']

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time payments and analytics dashboard',
      category: 'fullstack',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      impact: '$2.5M GMV processed',
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization for startup metrics and KPIs',
      category: 'saas',
      tags: ['React', 'WebSocket', 'D3.js', 'Node.js'],
      impact: '50k+ users',
    },
    {
      id: 3,
      title: 'Marketing Automation',
      description: 'Campaign management platform with AI-powered insights',
      category: 'saas',
      tags: ['Next.js', 'AI/ML', 'PostgreSQL', 'Tailwind'],
      impact: '3x conversion boost',
    },
    {
      id: 4,
      title: 'Design System',
      description: 'Component library and design tokens for enterprise apps',
      category: 'frontend',
      tags: ['React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
      impact: '10+ products using',
    },
    {
      id: 5,
      title: 'Growth Strategy',
      description: 'Implemented viral loops and referral systems for B2B SaaS',
      category: 'marketing',
      tags: ['Growth', 'Analytics', 'A/B Testing', 'Strategy'],
      impact: '400% growth',
    },
    {
      id: 6,
      title: 'Mobile App',
      description: 'Native iOS/Android app with offline sync capabilities',
      category: 'fullstack',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      impact: '1M+ downloads',
    },
  ]

  const filtered = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <MeshGradientBg className="opacity-40" />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            Featured <GradientText>Projects</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            A selection of my best work across web development, SaaS, and growth marketing
          </motion.p>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg capitalize font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filtered.map((project, i) => (
            <motion.div key={project.id} variants={itemVariants}>
              <AnimatedCard variant="gradient" className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold flex-1">{project.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary whitespace-nowrap ml-4">
                    {project.category}
                  </span>
                </div>

                <p className="text-foreground/60 mb-4">{project.description}</p>

                <div className="mb-6 p-3 bg-background/30 rounded-lg border border-border">
                  <div className="text-sm text-primary font-semibold">Impact</div>
                  <div className="text-foreground/70">{project.impact}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <AnimatedButton variant="outline" size="sm">
                  View Project
                </AnimatedButton>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-foreground/60">No projects in this category</p>
          </motion.div>
        )}
      </section>
    </main>
  )
}
