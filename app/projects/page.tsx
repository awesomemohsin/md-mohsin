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

  const categories = ['all', 'telecom', 'commerce', 'ecommerce']

  const projects = [
    {
      id: 1,
      title: 'Parle Bangladesh',
      description: 'A visually immersive brand platform and digital presence for Parle Bangladesh, presenting the premium snack brand from the original legacy of Parle Products of India. Built with high-fidelity fluid animations and performance architectures.',
      category: 'commerce',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Premium Brand', 'Snacks Showcase'],
      impact: 'Built a stunning product catalog and brand experience that elevated consumer engagement and online positioning for international snack lines.',
      role: 'Lead Front-End Architect',
      link: 'https://parlebangladesh.com/',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fparlebangladesh.com%2F&screenshot=true&embed=screenshot.url',
    },
    {
      id: 2,
      title: 'Delta Software & Communication',
      description: 'A feature-rich digital portal developed for a leading Internet Service Provider (ISP) in Bangladesh, showcasing robust broadband connectivity and custom subscription packages tailored for home, corporate, and enterprise-grade network solutions.',
      category: 'telecom',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Enterprise ISP', 'Broadband Systems'],
      impact: 'Designed customer subscription modules, interactive service coverage maps, and corporate inquiry workflows, elevating client lead generation.',
      role: 'Lead Web Architect & Developer',
      link: 'https://www.deltasoftwareandcommunication.com/',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.deltasoftwareandcommunication.com%2F&screenshot=true&embed=screenshot.url',
    },
    {
      id: 3,
      title: 'Elanzo — Fashion E-Commerce',
      description: 'A modern, high-performance fashion e-commerce storefront built for a premium clothing brand. Features a sleek product catalog, intuitive shopping experience, dynamic filtering, and a seamless checkout flow — all engineered for conversion and brand consistency.',
      category: 'ecommerce',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'E-Commerce', 'Fashion', 'Vercel'],
      impact: 'Delivered a fully functional storefront with smooth product browsing, cart management, and optimized UX — enhancing brand credibility and driving online sales.',
      role: 'Lead Front-End Developer',
      link: 'https://elanzo-ecommerce.vercel.app/',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Felanzo-ecommerce.vercel.app%2F&screenshot=true&embed=screenshot.url',
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
    <main className="min-h-screen bg-background text-foreground">
      <MeshGradientBg className="opacity-40" />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-inner"
          >
            💼 Commercial Cases
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
          >
            Featured <GradientText>Case Studies</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed"
          >
            Explore client platforms and production web systems I have architected and deployed.
          </motion.p>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg capitalize font-bold text-xs uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 border border-primary'
                  : 'bg-card border border-border text-foreground hover:border-primary/50'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat === 'all' ? 'All Work' : cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filtered.map((project, i) => (
            <motion.div key={project.id} variants={itemVariants} className="flex flex-col h-full group">
              <AnimatedCard variant="gradient" className="h-full flex flex-col justify-between overflow-hidden !p-0">
                <div>
                  {/* Website live preview frame */}
                  {project.image && (
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-background-secondary/60 border-b border-border/30 flex flex-col justify-stretch p-3.5 pt-10">
                      {/* Browser mockup header */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-card border-b border-border/20 flex items-center justify-between px-3.5 z-20 shadow-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F56] opacity-90 shadow-sm" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-90 shadow-sm" />
                          <span className="w-2 h-2 rounded-full bg-[#27C93F] opacity-90 shadow-sm" />
                        </div>

                        {/* Interactive address bar that expands and links */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={project.link}
                          className="text-[9px] text-foreground/45 hover:text-primary font-mono truncate max-w-[150px] hover:max-w-xs bg-background/60 hover:bg-background/90 px-3.5 py-0.5 rounded-full border border-border/20 hover:border-primary/30 shadow-inner transition-all duration-300 group/url flex items-center gap-1 cursor-pointer"
                        >
                          <span className="truncate group-hover/url:hidden">
                            {project.link.replace('https://', '').replace('www.', '')}
                          </span>
                          <span className="hidden group-hover/url:inline truncate">
                            {project.link}
                          </span>
                        </a>

                        <div className="w-8" /> {/* alignment spacer */}
                      </div>

                      {/* Screenshot viewport - Clickable link to live website */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${project.title} live website`}
                        className="relative w-full h-full rounded overflow-hidden border border-border/30 shadow-md bg-card flex items-stretch cursor-pointer group/viewport"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain object-top group-hover:scale-[1.02] transition-all duration-700 ease-out"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  )}

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold flex-1 text-foreground leading-tight">{project.title}</h3>
                      <span className="text-[10px] px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-wider whitespace-nowrap ml-4">
                        {project.category}
                      </span>
                    </div>

                    <div className="mb-4 text-xs font-semibold text-accent flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Role: {project.role}
                    </div>

                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">{project.description}</p>

                    <div className="mb-4 p-4 bg-background/40 rounded-lg border border-border/40">
                      <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Impact & Deliverables</div>
                      <div className="text-foreground/90 text-xs leading-relaxed">{project.impact}</div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <AnimatedButton href={project.link} variant="outline" size="sm" className="w-full">
                    View Live Site ↗
                  </AnimatedButton>
                </div>
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

      {/* Standalone GitHub Showcase */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedCard variant="glow" className="p-8 sm:p-12 border border-primary/20 bg-gradient-to-r from-card/40 via-primary/5 to-card/40 backdrop-blur-xl">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                    💻 GitHub Open Source Hub
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Explore My <GradientText>Open Source Contributions</GradientText>
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed max-w-xl mb-6">
                    Beyond client case studies, I maintain active open-source utilities, full-stack packages, and developer helper scripts. Check out my GitHub repositories, contributions, and tools.
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-foreground/60">
                    <span className="flex items-center gap-2 bg-background/50 border border-border/40 px-3 py-1.5 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      15+ Public Repositories
                    </span>
                    <span className="flex items-center gap-2 bg-background/50 border border-border/40 px-3 py-1.5 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Full-Stack Utilities
                    </span>
                    <span className="flex items-center gap-2 bg-background/50 border border-border/40 px-3 py-1.5 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Active Contributions
                    </span>
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-center md:justify-end">
                  <AnimatedButton href="https://github.com/awesomemohsin" variant="primary" size="lg" className="w-full shadow-lg shadow-primary/30">
                    Explore GitHub Profile ↗
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

