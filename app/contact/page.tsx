'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { MeshGradientBg } from '@/components/mesh-gradient-bg'
import { AnimatedCard } from '@/components/animated-card'
import { GradientText } from '@/components/gradient-text'

export default function ContactPage() {
  const contactInfo = [
    {
      type: 'whatsapp',
      label: 'WhatsApp Chat',
      value: '+8801958113265',
      href: 'https://wa.me/8801958113265',
      glowColor: 'hover:border-[#25D366]/40'
    },
    {
      type: 'email',
      label: 'Direct Email',
      value: 'mdmohsin.work@gmail.com',
      href: 'mailto:mdmohsin.work@gmail.com',
      glowColor: 'hover:border-primary/40'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/md-mohsin5',
      href: 'https://www.linkedin.com/in/md-mohsin5',
      glowColor: 'hover:border-[#0A66C2]/40'
    },
    {
      type: 'facebook',
      label: 'Facebook Profile',
      value: 'facebook.com/muhammad.mohsin.0033',
      href: 'https://www.facebook.com/muhammad.mohsin.0033/',
      glowColor: 'hover:border-[#1877F2]/40'
    },
    {
      type: 'messenger',
      label: 'Facebook Messenger',
      value: 'm.me/muhammad.mohsin.0033',
      href: 'https://m.me/muhammad.mohsin.0033',
      glowColor: 'hover:border-[#0084FF]/40'
    },
    {
      type: 'github',
      label: 'GitHub Profile',
      value: 'github.com/awesomemohsin',
      href: 'https://github.com/awesomemohsin',
      glowColor: 'hover:border-foreground/40'
    },
  ]

  const renderContactIcon = (type: string) => {
    switch (type) {
      case 'email':
        return (
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'whatsapp':
        return (
          <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )
      case 'facebook':
        return (
          <svg className="w-8 h-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        )
      case 'messenger':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="contactMessengerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#006AFF" />
                <stop offset="50%" stopColor="#A133FF" />
                <stop offset="100%" stopColor="#FF5C87" />
              </linearGradient>
            </defs>
            <path
              fill="url(#contactMessengerGrad)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.38 2 2 6.13 2 11.5c0 2.92 1.28 5.51 3.32 7.31.17.15.27.37.26.6l-.08 2.25c-.02.5.47.88.94.71l2.48-.91c.18-.07.39-.06.57.02 1.55.66 3.28 1.02 5.09 1.02 5.62 0 10-4.13 10-9.5S17.62 2 12 2zm1.24 11.88l-2.42-2.58-4.73 2.58 5.2-5.53 2.47 2.58 4.68-2.58-5.2 5.53z"
            />
          </svg>
        )
      case 'github':
        return (
          <svg className="w-8 h-8 text-foreground" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-8 h-8 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        )
      default:
        return null
    }
  }

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
            ✉️ Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
          >
            Let&apos;s Build <GradientText>Something Great</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed"
          >
            Reach out for full-stack software development, digital marketing campaigns, SEO audits, or custom web products.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              variants={itemVariants}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedCard variant="glow" className={`h-full transition-all duration-300 ${contact.glowColor}`}>
                <div className="mb-4">{renderContactIcon(contact.type)}</div>
                <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">{contact.label}</div>
                <div className="font-bold text-foreground hover:text-primary transition-colors text-sm break-all">
                  {contact.value}
                </div>
              </AnimatedCard>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Frequently Asked <GradientText>Questions</GradientText>
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'What core technologies do you specialize in?',
                a: 'I specialize in Next.js, React, Tailwind CSS, Framer Motion, Node.js, Express, PostgreSQL, and digital marketing/SEO execution.',
              },
              {
                q: 'Are you open to contract roles or technical consultations?',
                a: 'Yes, absolutely. I actively consult on system architecture, fintech web standards, and secure full-stack software development.',
              },
              {
                q: 'Where are you currently based?',
                a: 'I am based in Dhaka, Bangladesh. I am completing my M.Sc. in Software Engineering at Daffodil International University and collaborate with clients worldwide.',
              },
              {
                q: 'How quickly do you respond to professional emails?',
                a: 'I check my mail mdmohsin.work@gmail.com regularly and typically respond to serious contract or employment inquiries within 4-12 hours.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-card border border-border/80 rounded-xl p-6 shadow-sm hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-foreground flex items-center gap-2">
                  <span className="text-primary text-sm">✦</span> {faq.q}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed pl-5">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

