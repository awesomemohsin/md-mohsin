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
      year: '2023 - 2025',
      title: 'M.Sc. in Software Engineering (Cyber Security)',
      institution: 'Daffodil International University',
      description: 'Focusing on security frameworks, risk management, and secure software engineering.',
      details: 'Active member of the DIU Software Engineering Club. Researching advanced authentication and modern software vulnerabilities.',
    },
    {
      year: '2018 - 2023',
      title: 'B.Sc. in Computer Science & Engineering',
      institution: 'Daffodil International University',
      description: 'Gained key software principles, database management, networks, and advanced programming.',
      details: 'Former member of the DIU Computer Programming Club (CPC), passionate about algorithms and full-stack architecture.',
    },
    {
      year: '2016 - 2018',
      title: 'Higher Secondary Certificate (HSC)',
      institution: 'Jahangirnagar University School and College',
      description: 'Science Group. Developed early passion for coding and logic systems.',
      details: 'Began learning HTML, CSS, and basic programming scripts, spark-plugging the development journey.',
    },
    {
      year: '2014 - 2016',
      title: 'Secondary School Certificate (SSC)',
      institution: 'Zirabo High School',
      description: 'Science Group. Quick learner with deep curiosity for technology.',
      details: 'Discovered computer engineering fields and actively self-studied fundamental system operations.',
    },
  ]

  const achievements = [
    { icon: '🚀', label: 'Digital Growth', value: 'SEO / CRO' },
    { icon: '💻', label: 'Commercial Works', value: '15+' },
    { icon: '🎓', label: 'Academic Years', value: '5+' },
    { icon: '⭐', label: 'Client Satisfaction', value: '100%' },
  ]

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
            🧑‍💻 About Md Mohsin
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
          >
            My Academic & <GradientText>Professional Story</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed"
          >
            Bridging the gap between cutting-edge Full-Stack software engineering and data-driven Digital Marketing strategy.
          </motion.p>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((achievement, i) => (
              <AnimatedCard key={i} delay={i * 0.1} variant="glow">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-3xl font-extrabold text-primary mb-1">
                  {achievement.value}
                </div>
                <div className="text-xs text-foreground/50 uppercase font-semibold tracking-wider">{achievement.label}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-background-secondary/10 border-t border-b border-border/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold">
              Educational <GradientText>Timeline</GradientText>
            </h2>
            <p className="text-foreground/60 mt-4 max-w-lg mx-auto">
              A comprehensive chronicle of my academic degrees, certificates, and research milestones.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/10"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ originY: 0 }}
            />

            {/* Timeline items */}
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col md:flex-row gap-8 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Content card */}
                  <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                    <AnimatedCard variant="gradient" className="w-full">
                      <div className="inline-block text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
                      <div className="text-sm font-semibold text-accent mb-3">{item.institution}</div>
                      <p className="text-foreground/80 text-sm leading-relaxed mb-3">{item.description}</p>
                      {item.details && (
                        <div className="text-xs text-foreground/50 border-t border-border/20 pt-2.5 italic">
                          {item.details}
                        </div>
                      )}
                    </AnimatedCard>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_15px_rgba(85,170,255,0.6)]" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Looking for a Premium & Scalable Solution?
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Whether you need high-end full-stack systems, digital marketing automation, or SEO strategy audits, let&apos;s talk.
            </p>
            <AnimatedButton href="/contact" variant="primary" size="lg">
              Get In Touch
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

