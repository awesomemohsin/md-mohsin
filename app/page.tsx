'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { MeshGradientBg } from '@/components/mesh-gradient-bg'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedCard } from '@/components/animated-card'
import { GradientText } from '@/components/gradient-text'
import { AnimatedButton } from '@/components/animated-button'
import { Code2, Server, Cpu, LineChart, Sparkles, Terminal, Cloud, Network, Figma, Gauge, Link2, Search, TrendingUp, Rocket } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      title: 'Parle Bangladesh',
      description: 'Official E-Commerce Store of Parle Bangladesh. A premium digital showcase and brand experience for the iconic snack brand in Bangladesh, representing the original Parle Products of India with high-fidelity performance and animations.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Premium Brand UI'],
      link: 'https://parlebangladesh.com',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fparlebangladesh.com%2F&screenshot=true&embed=screenshot.url',
    },
    {
      title: 'Delta Software & Communication Ltd.',
      description: 'High-performance digital portal for a premier Internet Service Provider (ISP), delivering robust connectivity and subscription systems for home, corporate, and enterprise client solutions.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'ISP Solutions'],
      link: 'https://www.deltasoftwareandcommunication.com',
      image: 'https://api.microlink.io/?url=https%3A%2F%2Fwww.deltasoftwareandcommunication.com%2F&screenshot=true&embed=screenshot.url',
    },
  ]

  const skills = [
    {
      category: 'Frontend Engineering',
      icon: <Code2 className="w-6 h-6 text-amber-500" />,
      color: 'from-amber-500/10 via-yellow-500/5 to-transparent',
      description: 'Sculpting high-performance client architectures with pixel-perfect brand identity.',
      items: [
        {
          name: 'Next.js',
          icon: (
            <svg className="w-4 h-4 text-foreground shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.892 18.01h-1.39l-4.524-6.398v6.398h-1.302v-8.257h1.39l4.524 6.397v-6.397h1.302v8.257zm-1.892-9.257c-.502 0-.91-.408-.91-.91s.408-.91.91-.91.91.408.91.91-.408.91-.91.91z" />
            </svg>
          )
        },
        {
          name: 'TypeScript',
          icon: (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png"
              alt="TypeScript"
              className="w-4 h-4 object-contain shrink-0"
            />
          )
        },
        {
          name: 'Tailwind CSS',
          icon: (
            <svg className="w-4 h-4 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          )
        },
        {
          name: 'Framer Motion',
          icon: (
            <svg className="w-4 h-4 text-[#F024B6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h12L24 12H12L0 24V12H12L0 0z" />
            </svg>
          )
        },
        {
          name: 'Premium Brand UI',
          icon: <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
        },
      ],
    },
    {
      category: 'Backend & Cloud Systems',
      icon: <Server className="w-6 h-6 text-sky-500" />,
      color: 'from-sky-500/10 via-indigo-500/5 to-transparent',
      description: 'Developing rock-solid API services, database pipelines, and optimized cloud architectures.',
      items: [
        {
          name: 'Node.js',
          icon: (
            <svg className="w-4 h-4 text-[#339933] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.996 0c-.628 0-1.238.163-1.782.477L2.433 4.966c-1.088.628-1.758 1.788-1.758 3.044V15.99c0 1.256.67 2.416 1.758 3.044l7.781 4.512c.544.314 1.154.477 1.782.477.628 0 1.238-.163 1.782-.477l7.781-4.512c1.088-.628 1.758-1.788 1.758-3.044V8.01c0-1.256-.67-2.416-1.758-3.044L13.778.477A3.564 3.564 0 0011.996 0zM12 3.197l6.702 3.888v7.776L12 18.749l-6.702-3.888V7.085L12 3.197z" />
            </svg>
          )
        },
        {
          name: 'Express',
          icon: <Terminal className="w-4 h-4 text-foreground/70 shrink-0" />
        },
        {
          name: 'PostgreSQL',
          icon: (
            <svg className="w-4 h-4 text-[#336791] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm8 5c0 1.66-3.58 3-8 3S4 8.66 4 7s3.58-3 8-3 8 1.34 8 3zm0 5c0 1.66-3.58 3-8 3s-8-1.34-8-3V9.64c1.9 1.44 5.37 2.36 8 2.36s6.1-1 8-2.36V12zm0 5c0 1.66-3.58 3-8 3s-8-1.34-8-3v-2.36c1.9 1.44 5.37 2.36 8 2.36s6.1-1 8-2.36V17z" />
            </svg>
          )
        },
        {
          name: 'MongoDB',
          icon: (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s"
              alt="MongoDB"
              className="w-4 h-4 object-contain shrink-0"
            />
          )
        },
        {
          name: 'Cloud Services',
          icon: <Cloud className="w-4 h-4 text-sky-400 shrink-0" />
        },
      ],
    },
    {
      category: 'Professional & Systems',
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      color: 'from-indigo-500/10 via-purple-500/5 to-transparent',
      description: 'Configuring standard workflow pipelines, secure patterns, and absolute speed benchmarks.',
      items: [
        {
          name: 'Git & GitHub',
          icon: (
            <svg className="w-4 h-4 text-[#F05032] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.546 10.93L13.07.45c-.6-.6-1.585-.6-2.185 0L8.08 3.26l3.6 3.6a3.292 3.292 0 11-1.285 1.286l-3.6-3.6-5.83 5.83c-.6.6-.6 1.585 0 2.185l10.476 10.476c.6.6 1.585.6 2.185 0l10.476-10.476c.6-.6.6-1.585 0-2.185z" />
            </svg>
          )
        },
        {
          name: 'System Architecture',
          icon: <Network className="w-4 h-4 text-indigo-400 shrink-0" />
        },
        {
          name: 'UI/UX Design',
          icon: <Figma className="w-4 h-4 text-pink-400 shrink-0" />
        },
        {
          name: 'Performance Opt.',
          icon: <Gauge className="w-4 h-4 text-amber-500 shrink-0" />
        },
        {
          name: 'REST APIs',
          icon: <Link2 className="w-4 h-4 text-teal-400 shrink-0" />
        }
      ],
    },
    {
      category: 'Digital Growth',
      icon: <LineChart className="w-6 h-6 text-emerald-500" />,
      color: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      description: 'Executing conversion funnels, organic SEO campaigns, and performance ads to scale scale.',
      items: [
        {
          name: 'Meta Campaigns',
          icon: (
            <svg className="w-4 h-4 text-[#1877F2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          )
        },
        {
          name: 'Google Ads',
          icon: (
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Logo.width-500.format-webp.webp"
              alt="Google Ads"
              className="w-4 h-4 object-contain shrink-0"
            />
          )
        },
        {
          name: 'SEO Engineering',
          icon: <Search className="w-4 h-4 text-sky-400 shrink-0" />
        },
        {
          name: 'Conversion Rate Opt.',
          icon: <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
        },
        {
          name: 'Growth Strategy',
          icon: <Rocket className="w-4 h-4 text-orange-400 shrink-0" />
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <MeshGradientBg className="opacity-40" />
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section Summary */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <GradientText>Expertise</GradientText>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              I combine robust full-stack software engineering, conversion-focused digital marketing strategies, and highly interactive user interfaces to build breathtaking, high-performance digital platforms.
            </p>
          </motion.div>


          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/40 bg-card/60 backdrop-blur-xl p-6 hover:bg-card/90 transition-all duration-500 overflow-hidden cursor-default hover:border-primary/20 hover:shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
              >
                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-background/80 border border-border/80 shadow-inner mb-5 group-hover:scale-105 group-hover:border-primary/20 transition-all duration-300">
                    {skill.icon}
                  </div>

                  {/* Category Title */}
                  <h3 className="text-lg font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.category}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-foreground/50 leading-relaxed mb-6">
                    {skill.description}
                  </p>

                  {/* Divider line */}
                  <div className="h-[1px] bg-gradient-to-r from-border/60 via-border/20 to-transparent w-full mb-6" />

                  {/* Skills List */}
                  <ul className="space-y-3.5">
                    {skill.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm group/li">
                        <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-background/60 border border-border/40 shadow-sm shrink-0 group-hover/li:border-primary/30 group-hover/li:bg-primary/5 transition-all duration-300">
                          {item.icon}
                        </span>
                        <span className="font-semibold text-xs tracking-tight text-foreground/75 group-hover/li:text-foreground transition-colors">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corner decorative accent */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <AnimatedButton href="/about" variant="outline" size="lg">
              Explore My Story & Education
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary/20 border-t border-b border-border/20">
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
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              A curated snapshot of commercial platforms and production code I have developed.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12 sm:gap-16 mb-16 max-w-5xl mx-auto">
            {projects.map((project, i) => {
              const isEven = i % 2 === 1
              return (
                <AnimatedCard key={i} delay={i * 0.15} variant="gradient" className="overflow-hidden !p-0 group">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch`}>
                    {/* Website live preview frame */}
                    {project.image && (
                      <div className={`relative w-full lg:w-1/2 min-h-[260px] lg:min-h-[380px] overflow-hidden bg-background-secondary/60 border-b lg:border-b-0 ${isEven ? 'lg:border-l' : 'lg:border-r'} border-border/30 flex flex-col justify-stretch p-4 pt-12`}>
                        {/* Browser mockup header */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-card border-b border-border/20 flex items-center justify-between px-4 z-20 shadow-sm">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-90 shadow-sm" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-90 shadow-sm" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-90 shadow-sm" />
                          </div>

                          {/* Interactive address bar that expands and links */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={project.link}
                            className="text-[10px] text-foreground/45 hover:text-primary font-mono truncate max-w-[200px] hover:max-w-md bg-background/60 hover:bg-background/90 px-4 py-0.5 rounded-full border border-border/20 hover:border-primary/30 shadow-inner transition-all duration-300 group/url flex items-center gap-1 cursor-pointer"
                          >
                            <span className="truncate group-hover/url:hidden">
                              {project.link.replace('https://', '').replace('www.', '')}
                            </span>
                            <span className="hidden group-hover/url:inline truncate">
                              {project.link}
                            </span>
                          </a>

                          <div className="w-12" /> {/* alignment spacer */}
                        </div>

                        {/* Screenshot viewport - Clickable link to live website */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visit ${project.title} live website`}
                          className="relative w-full h-full rounded-lg overflow-hidden border border-border/30 shadow-lg bg-card flex items-stretch cursor-pointer group/viewport"
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

                    <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-foreground/75 mb-6 text-sm sm:text-base leading-relaxed text-left">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, j) => (
                            <span
                              key={j}
                              className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <AnimatedButton href={project.link} variant="outline" size="sm" className="w-full sm:w-auto">
                          View Website ↗
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>

          <div className="text-center">
            <AnimatedButton href="/projects" variant="primary" size="lg">
              View All Case Studies
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Contact Callout Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s <GradientText>Build & Grow Together</GradientText>
            </h2>
            <p className="text-base sm:text-lg text-foreground/60 mb-12 max-w-xl mx-auto leading-relaxed">
              Ready to scale your business with custom enterprise full-stack software and conversion-optimized SEO/marketing strategies? Reach out directly below.
            </p>

            {/* Direct Channels Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10 text-left">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/8801958113265"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <AnimatedCard variant="glow" className="h-full hover:border-[#25D366]/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-16 h-16 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="text-3xl mb-4">
                    <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">WhatsApp</div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                    +8801958113265
                  </div>
                  <div className="text-xs text-[#25D366] font-bold uppercase tracking-wider mt-3 flex items-center gap-1">
                    Chat Directly ↗
                  </div>
                </AnimatedCard>
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/muhammad.mohsin.0033/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <AnimatedCard variant="glow" className="h-full hover:border-[#1877F2]/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-16 h-16 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="text-3xl mb-4">
                    <svg className="w-8 h-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">Facebook</div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                    Muhammad Mohsin
                  </div>
                  <div className="text-xs text-[#1877F2] font-bold uppercase tracking-wider mt-3 flex items-center gap-1">
                    Connect ↗
                  </div>
                </AnimatedCard>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/md-mohsin5"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <AnimatedCard variant="glow" className="h-full hover:border-[#0A66C2]/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-16 h-16 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="text-3xl mb-4">
                    <svg className="w-8 h-8 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">LinkedIn</div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                    Md. Mohsin
                  </div>
                  <div className="text-xs text-[#0A66C2] font-bold uppercase tracking-wider mt-3 flex items-center gap-1">
                    Connect ↗
                  </div>
                </AnimatedCard>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/awesomemohsin"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <AnimatedCard variant="glow" className="h-full hover:border-foreground/40 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-16 h-16 text-foreground" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div className="text-3xl mb-4">
                    <svg className="w-8 h-8 text-foreground" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">GitHub</div>
                  <div className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                    Md. Mohsin
                  </div>
                  <div className="text-xs text-foreground font-bold uppercase tracking-wider mt-3 flex items-center gap-1">
                    Explore ↗
                  </div>
                </AnimatedCard>
              </a>

            </div>

            {/* General Get In Touch Button in the bottom of WhatsApp and Email and direct form */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs text-foreground/40 font-semibold tracking-wider uppercase">Or go to the contact portal</p>
              <AnimatedButton href="/contact" variant="outline" size="lg">
                Get In Touch
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border/20 bg-background/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-foreground/50 text-sm">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Md Mohsin. All rights reserved.</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 font-medium">

              <a
                href="https://www.facebook.com/muhammad.mohsin.0033/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/md-mohsin5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                LinkedIn
              </a>

              <a
                href="mailto:mdmohsin.work@gmail.com"
                className="hover:text-primary transition-colors duration-300"
              >
                Email
              </a>
              <a
                href="https://github.com/awesomemohsin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
