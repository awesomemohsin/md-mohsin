'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { MeshGradientBg } from '@/components/mesh-gradient-bg'
import { AnimatedCard } from '@/components/animated-card'
import { GradientText } from '@/components/gradient-text'
import { AnimatedButton } from '@/components/animated-button'

export default function AboutPage() {
  const timeline = [
    {
      year: '2019',
      title: 'Started My Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript basics',
    },
    {
      year: '2020',
      title: 'First Commercial Project',
      description: 'Built my first freelance website, discovering the joy of product creation',
    },
    {
      year: '2021',
      title: 'Full-Stack Development',
      description: 'Mastered React, Node.js, and databases, started building complex applications',
    },
    {
      year: '2022',
      title: 'Growth & Marketing',
      description: 'Discovered the power of combining tech with marketing strategy',
    },
    {
      year: '2023',
      title: 'Premium Services',
      description: 'Launched full-stack development and growth consulting services',
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized as a top developer and growth strategist in the community',
    },
  ]

  const achievements = [
    { icon: '🚀', label: '50+ Projects Delivered', value: '50+' },
    { icon: '👥', label: 'Happy Clients', value: '30+' },
    { icon: '⭐', label: 'Average Rating', value: '4.9' },
    { icon: '📈', label: 'Revenue Growth', value: '500%' },
  ]

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
            My <GradientText>Story</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            From passionate developer to strategic builder, creating digital products that make a real impact
          </motion.p>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((achievement, i) => (
              <AnimatedCard key={i} delay={i * 0.1} variant="glow">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-foreground/60">{achievement.label}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-background-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            My <GradientText>Journey</GradientText>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ originY: 0 }}
            />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Content */}
                  <div className="flex-1 md:flex md:justify-end">
                    <AnimatedCard variant="gradient" className="w-full md:w-4/5">
                      <div className="text-sm text-primary font-bold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/60 text-sm">{item.description}</p>
                    </AnimatedCard>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    className="flex justify-center"
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_20px_rgba(85,170,255,0.5)]" />
                  </motion.div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to collaborate?
            </h2>
            <p className="text-foreground/60 mb-8">
              Let&apos;s create something incredible together
            </p>
            <AnimatedButton variant="primary" size="lg">
              Start a Project
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
