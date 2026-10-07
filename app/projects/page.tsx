'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { MeshGradientBg } from '@/components/mesh-gradient-bg'
import { AnimatedCard } from '@/components/animated-card'
import { GradientText } from '@/components/gradient-text'
import { AnimatedButton } from '@/components/animated-button'
import { ArrowRight, ExternalLink, Eye, Globe, Layers, Sparkles, X } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  impact: string
  role: string
  link: string
  image: string
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['all', 'telecom', 'ecommerce', 'saas']

  const projects: Project[] = [
    {
      id: 1,
      title: 'Circle Network',
      description: 'A nationwide, high-performance digital portal built for Circle Network, one of the leading Internet Service Providers (ISP) in Bangladesh. Engineered with a clean corporate identity, interactive coverage area search, customer support modules, and customized home and corporate subscription package calculators.',
      category: 'telecom',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Nationwide ISP', 'Broadband Services'],
      impact: 'Implemented a seamless subscriber onboarding experience, interactive geographic network coverage maps, and integrated customer portals to streamline support and subscription inquiries.',
      role: 'Lead Web Architect & Developer',
      link: 'https://circlenetworkbd.net',
      image: '/screenshots/circle.png',
    },
    {
      id: 2,
      title: 'Parle Bangladesh',
      description: 'A visually immersive brand platform and digital presence for Parle Bangladesh, presenting the premium snack brand from the original legacy of Parle Products of India. Built with high-fidelity fluid animations and performance architectures.',
      category: 'ecommerce',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Premium Brand', 'Snacks Showcase'],
      impact: 'Built a stunning product catalog and brand experience that elevated consumer engagement and online positioning for international snack lines.',
      role: 'Lead Front-End Architect',
      link: 'https://parlebangladesh.com/',
      image: '/screenshots/parle.png',
    },
    {
      id: 3,
      title: 'Delta Software & Communication Ltd.',
      description: 'A feature-rich digital portal developed for a leading Internet Service Provider (ISP) in Bangladesh, showcasing robust broadband connectivity and custom subscription packages tailored for home, corporate, and enterprise-grade network solutions.',
      category: 'telecom',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Enterprise ISP', 'Broadband Systems'],
      impact: 'Designed customer subscription modules, interactive service coverage maps, and corporate inquiry workflows, elevating client lead generation.',
      role: 'Lead Web Architect & Developer',
      link: 'https://www.deltasoftwareandcommunication.com/',
      image: '/screenshots/delta.png',
    },
    {
      id: 4,
      title: 'Blance - E-Commerce',
      description: 'A modern, high-performance fashion e-commerce storefront built for a premium clothing brand. Features a sleek product catalog, intuitive shopping experience, dynamic filtering, and a seamless checkout flow — all engineered for conversion and brand consistency.',
      category: 'ecommerce',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'E-Commerce', 'Fashion', 'Vercel'],
      impact: 'Delivered a fully functional storefront with smooth product browsing, cart management, and optimized UX — enhancing brand credibility and driving online sales.',
      role: 'Lead Front-End Developer',
      link: 'https://blance-ecommerce.vercel.app',
      image: '/screenshots/blance.png',
    },
    {
      id: 5,
      title: 'Fitself Nutrition',
      description: 'Official e-commerce storefront for Fitself Nutrition, Bangladesh’s premier sports nutrition and authentic imported supplements brand. Engineered with high-conversion product showcases, QR hologram verification badges, category filtering, cart management, and nationwide order tracking across 64 districts.',
      category: 'ecommerce',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'E-Commerce Store', 'Cart & Order Tracking'],
      impact: 'Engineered an ultra-fast, mobile-first supplement storefront with real-time cart handling, verified QR authenticity badges, and interactive category catalogs driving customer trust and conversions.',
      role: 'Lead Full-Stack E-Commerce Developer',
      link: 'https://fitself-nutrition.vercel.app',
      image: '/screenshots/fitself.png',
    },
    {
      id: 6,
      title: 'Approlio — Social Media Automation',
      description: 'An intelligent 1-tap social media content automation platform. Approlio monitors top viral creators across Facebook, YouTube, and TikTok 24/7. When viral content drops, it pings your Telegram with a video preview and caption details, enabling 1-tap mobile approval to automatically cross-post directly to Facebook Pages and YouTube Shorts.',
      category: 'saas',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Telegram Bot API', 'Social Media Automation', 'SaaS Platform'],
      impact: 'Built end-to-end multi-platform scrapers, Telegram webhook approval workflows, and duplicate detection safeguards that save content creators and agencies 5+ hours daily.',
      role: 'Creator & Full-Stack Architect',
      link: 'https://approlio.vercel.app',
      image: '/screenshots/approlio.png',
    },
    {
      id: 7,
      title: 'BD CacheX',
      description: 'An enterprise CDN edge cache and bandwidth distribution platform engineered for Bangladesh ISPs, IIGs, and Datacenters. Centrally orchestrates and monitors Google GGC, Meta FNA, Netflix OCA, Cloudflare, and Akamai edge caches, reducing upstream IP transit costs by up to 80% while delivering ultra-low sub-4ms local latency.',
      category: 'telecom',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'CDN Edge Caching', 'Bandwidth Optimization', 'BDIX Peering'],
      impact: 'Architected real-time cache telemetry dashboards, localized multi-provider CDN partitioning, and ROI bandwidth saving estimators that cut upstream international transit load by 80%+.',
      role: 'Lead Systems Architect & Developer',
      link: 'https://bd-cache-x.vercel.app',
      image: '/screenshots/bd-cachex.png',
    },
  ]

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
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
                className={`px-4 py-2 rounded-lg capitalize font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 border border-primary'
                  : 'bg-card border border-border text-foreground hover:border-primary/50'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat === 'all'
                  ? 'All Work'
                  : cat === 'telecom'
                    ? 'Telecom & ISP'
                    : cat === 'ecommerce'
                      ? 'E-Commerce'
                      : cat === 'saas'
                        ? 'SaaS & Automation'
                        : cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects 3-in-1-row grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filtered.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="flex flex-col h-full group">
              <AnimatedCard variant="gradient" className="h-full flex flex-col justify-between overflow-hidden !p-0 border border-border/50 hover:border-primary/40 transition-colors duration-300">
                <div>
                  {/* Website preview thumbnail */}
                  {project.image && (
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-white/5 border-b border-border/30 flex flex-col justify-stretch p-3 pt-9">
                      {/* Browser mockup header */}
                      <div className="absolute top-0 left-0 right-0 h-7 bg-card/90 border-b border-border/20 flex items-center justify-between px-3 z-20 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F56] opacity-90 shadow-sm" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-90 shadow-sm" />
                          <span className="w-2 h-2 rounded-full bg-[#27C93F] opacity-90 shadow-sm" />
                        </div>

                        <div className="text-[9px] text-foreground/45 font-mono truncate max-w-[140px] bg-background/60 px-2.5 py-0.5 rounded-full border border-border/20">
                          {project.link.replace('https://', '').replace('www.', '').replace(/\/$/, '')}
                        </div>

                        <div className="w-6" />
                      </div>

                      {/* Clickable thumbnail to open modal */}
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="relative w-full h-full rounded overflow-hidden border border-border/30 shadow-md bg-white flex items-stretch cursor-pointer group/thumb text-left"
                        aria-label={`View details for ${project.title}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain object-top group-hover/thumb:scale-[1.03] transition-all duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                          <span className="px-3 py-1 rounded-full bg-background/90 text-primary text-xs font-semibold shadow-md flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            Read Details
                          </span>
                        </div>
                      </button>
                    </div>
                  )}

                  {/* Clean, essential information only */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1">
                        {project.title}
                      </h3>
                      <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-wider shrink-0 mt-0.5">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Top 3 key tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-accent font-medium tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-card border border-border text-foreground/50 font-medium">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card actions */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/25 text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow-primary/20"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit live site in new tab"
                    className="py-2 px-3 rounded-lg border border-border hover:border-primary/40 text-foreground/70 hover:text-primary text-xs font-semibold transition-colors duration-200 flex items-center gap-1 bg-card/60"
                  >
                    <span>Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
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
        <div className="max-w-7xl mx-auto">
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', duration: 0.45, bounce: 0.12 }}
              className="relative w-full max-w-5xl max-h-[92vh] md:max-h-[86vh] bg-card border border-primary/30 rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/20 overflow-hidden flex flex-col z-10 backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 z-40 p-2 rounded-full bg-background/80 hover:bg-background border border-border/60 text-foreground/70 hover:text-foreground transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-md group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              </button>

              {/* Responsive Split View: Desktop Left Image / Right Details, Mobile Top Image / Bottom Details */}
              <div className="flex-1 overflow-y-auto md:overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-0">
                {/* Left Side: Project Media & Live Preview */}
                <div className="md:col-span-6 lg:col-span-7 bg-muted/20 border-b md:border-b-0 md:border-r border-border/30 p-4 sm:p-6 lg:p-7 flex flex-col justify-between md:overflow-y-auto">
                  <div className="space-y-4">
                    {/* Browser Mockup */}
                    <div className="rounded-xl overflow-hidden border border-border/40 shadow-xl bg-card">
                      {/* Browser chrome header */}
                      <div className="h-8 sm:h-9 bg-card/90 border-b border-border/30 px-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-background/70 border border-border/30 text-[10px] text-foreground/60 font-mono max-w-[200px] sm:max-w-xs truncate">
                          <Globe className="w-3 h-3 text-primary shrink-0" />
                          <span className="truncate">{selectedProject.link.replace('https://', '').replace('www.', '').replace(/\/$/, '')}</span>
                        </div>
                        <div className="w-8" />
                      </div>

                      {/* Screenshot Preview */}
                      <div className="relative aspect-video sm:aspect-[16/10] bg-white overflow-hidden group">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-contain object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Live Deployment Status & Direct Link */}
                  <div className="mt-4 pt-4 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-foreground/60 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Production Deployment Active
                    </span>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Full Project Details */}
                <div className="md:col-span-6 lg:col-span-5 p-5 sm:p-6 lg:p-7 flex flex-col justify-between md:overflow-y-auto space-y-6">
                  <div className="space-y-5">
                    {/* Category & Role */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <span className="text-xs font-semibold text-accent flex items-center gap-1.5 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Role: {selectedProject.role}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
                      {selectedProject.title}
                    </h2>

                    {/* Full Project Description */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                        Project Overview
                      </h4>
                      <p className="text-foreground/80 text-sm leading-relaxed whitespace-pre-line">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Impact & Deliverables */}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1.5">
                      <div className="text-xs text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Impact & Key Deliverables
                      </div>
                      <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed">
                        {selectedProject.impact}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Technologies & Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20 text-accent font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-border/30 flex items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2.5 rounded-xl border border-border hover:bg-card text-foreground/70 hover:text-foreground text-sm font-semibold transition-all duration-200 cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
