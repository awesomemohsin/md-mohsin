'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { MeshGradientBg } from '@/components/mesh-gradient-bg'
import { AnimatedCard } from '@/components/animated-card'
import { GradientText } from '@/components/gradient-text'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@yourhandle',
      href: 'https://twitter.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Your Profile',
      href: 'https://linkedin.com',
    },
    {
      icon: '💬',
      label: 'Discord',
      value: 'username#1234',
      href: '#',
    },
  ]

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
            Let&apos;s <GradientText>Connect</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Have a project in mind? I&apos;d love to hear about it
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
              <AnimatedCard variant="glow">
                <div className="text-4xl mb-3">{contact.icon}</div>
                <div className="text-sm text-foreground/60 mb-1">{contact.label}</div>
                <div className="font-semibold text-foreground hover:text-primary transition-colors">
                  {contact.value}
                </div>
              </AnimatedCard>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-background-secondary/30">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedCard variant="gradient" className="p-8 sm:p-12">
              {submitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                  <p className="text-foreground/60">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 }}
                  >
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Frequently Asked <GradientText>Questions</GradientText>
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Projects typically range from 4-12 weeks depending on scope and complexity.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes, I offer maintenance and support packages for all projects.',
              },
              {
                q: 'What are your rates?',
                a: 'Rates vary based on project scope. Contact me for a custom quote.',
              },
              {
                q: 'Do you work with remote clients?',
                a: 'Absolutely! I work with clients worldwide via video calls and collaboration tools.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-foreground/60">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
