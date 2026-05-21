'use client'

import { motion, Variants } from 'framer-motion'
import { AnimatedButton } from './animated-button'
import { GradientText } from './gradient-text'

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
      {/* Dynamic Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(150,114,43,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(150,114,43,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(85,170,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(85,170,255,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        style={{ willChange: 'transform' }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        style={{ willChange: 'transform' }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <motion.div
          className="lg:col-span-7 relative text-center lg:text-left flex flex-col justify-center min-h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating Low-Opacity background tech symbols for immersive depth */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none opacity-25 dark:opacity-35">
            {/* Tag / Code abstract bubble */}
            <motion.div
              className="absolute -top-6 left-6 w-20 h-20 flex items-center justify-center rounded-3xl bg-primary/5 border border-primary/10 text-primary/30 dark:text-primary/40 shadow-sm"
              style={{ willChange: 'transform' }}
              animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </motion.div>
            
            {/* Tech "TS" outline bubble */}
            <motion.div
              className="absolute top-1/3 -left-12 w-24 h-24 flex items-center justify-center rounded-full bg-accent/5 border border-accent/10 text-accent/30 dark:text-accent/40 shadow-sm"
              style={{ willChange: 'transform' }}
              animate={{ y: [0, 15, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <span className="text-xl font-mono font-black tracking-tighter">TS</span>
            </motion.div>

            {/* Growth Graph bubble */}
            <motion.div
              className="absolute bottom-1/4 right-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/5 border border-primary/10 text-primary/20 dark:text-primary/35 shadow-sm"
              style={{ willChange: 'transform' }}
              animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </motion.div>
          </div>

          {/* Shimmery dynamic badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 max-w-fit mx-auto lg:mx-0 shadow-lg shadow-primary/5 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(150,114,43,0.25)] transition-all duration-300 backdrop-blur-md select-none cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Software Engineer
          </motion.div>

          {/* Symmetrical bounce-in greeting header */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-1 leading-tight tracking-tight text-foreground"
          >
            {["Hi,", "I'm"].map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 12,
                  delay: 0.1 * idx,
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 140,
                damping: 10,
                delay: 0.35,
              }}
            >
              <GradientText className="bg-[length:200%_auto] animate-[gradient-shift_4.5s_ease_infinite] inline-block hover:scale-[1.04] transition-all duration-300 drop-shadow-sm select-none cursor-pointer">
                Mohsin
              </GradientText>
            </motion.span>
          </motion.h1>

          {/* Symmetrical center-out expanding accent underline */}
          <motion.div
            className="h-[2px] w-40 mb-6 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-transparent via-primary/70 to-transparent dark:via-accent/70 shadow-sm"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
          />

          {/* Tokenized, Premium Subheader with Interactive Chips */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 font-black mb-6 leading-relaxed tracking-tight lg:pr-6"
          >
            Engineering <span className="text-primary dark:text-[#C6A664] font-black underline decoration-primary/20 hover:decoration-primary/50 transition-all duration-300 cursor-default">Premium</span>,{' '}
            <span className="text-foreground dark:text-white font-black">High-Performance</span>{' '}
            <br className="hidden sm:inline" />
            <motion.span
              whileHover={{ scale: 1.05, y: -1 }}
              className="inline-block px-3 py-1 rounded-xl bg-primary/10 border border-primary/20 dark:bg-primary/20 dark:border-primary/30 text-primary dark:text-primary-foreground font-black tracking-tight text-lg sm:text-xl cursor-default transition-all duration-300 shadow-sm hover:shadow-[0_2px_10px_rgba(150,114,43,0.15)]"
            >
              Full-Stack Platforms
            </motion.span>{' '}
            &amp;{' '}
            <motion.span
              whileHover={{ scale: 1.05, y: -1 }}
              className="inline-block px-3 py-1 rounded-xl bg-accent/10 border border-accent/20 dark:bg-accent/20 dark:border-accent/30 text-accent dark:text-[#00c8ff] font-black tracking-tight text-lg sm:text-xl cursor-default transition-all duration-300 shadow-sm hover:shadow-[0_2px_10px_rgba(85,170,255,0.15)]"
            >
              High-Conversion Growth Engines
            </motion.span>
          </motion.h2>

          {/* Premium description card overlay */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-foreground/75 mb-8 max-w-2xl leading-relaxed font-normal text-left border-l-2 border-primary/20 dark:border-accent/20 pl-4 py-1 bg-gradient-to-r from-primary/[0.02] to-transparent"
          >
            An <strong className="font-semibold text-foreground dark:text-white">M.Sc. in Software Engineering</strong> candidate specializing in architecting <strong className="font-semibold text-primary dark:text-[#C6A664]">ultra-fast, secure full-stack systems</strong> and <strong className="font-semibold text-accent dark:text-[#00c8ff]">conversion-driven growth strategies</strong>. I build bespoke corporate platforms and highly optimized web engines engineered to dominate search results and turn traffic into recurring revenue.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <AnimatedButton href="/projects" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30">
              Explore My Work
            </AnimatedButton>
            <AnimatedButton href="/contact" variant="outline" size="lg" className="w-full sm:w-auto hover:bg-foreground/5">
              Let&apos;s Connect
            </AnimatedButton>
          </motion.div>

          {/* Premium Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0 border-t border-border/40 pt-8"
          >
            {[
              { label: 'Completed Works', value: '15+', color: 'text-primary' },
              { label: 'Academic Years', value: '7+', color: 'text-accent' },
              { label: 'Years Experience', value: '3+', color: 'text-foreground' },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left group/stat">
                <div className={`text-2xl sm:text-3.5xl font-black mb-1.5 transition-transform duration-300 group-hover/stat:translate-y-[-2px] ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-foreground/45 uppercase tracking-widest font-bold leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Glowing Portrait */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[450px] aspect-square flex items-center justify-center">
            {/* Slowly rotating luxury spectrum glows */}
            <motion.div
              className="absolute -inset-4 rounded-[2.5rem] opacity-35 dark:opacity-50 blur-3xl pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, var(--primary), var(--accent), #a78bfa, var(--primary))',
                willChange: 'transform',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            
            <motion.div
              className="absolute -inset-1 rounded-[2.25rem] opacity-25 dark:opacity-40 blur-xl pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, var(--primary), var(--accent), #a78bfa, var(--primary))',
                willChange: 'transform',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            {/* Background luxury gradient glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl opacity-20 blur-2xl animate-pulse" />
            
            {/* Floating Glassmorphic Depth Badges */}
            {/* Badge 1: Top-Left */}
            <motion.div
              className="absolute -top-3 left-0 sm:-left-12 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg text-[10px] sm:text-xs font-bold text-foreground hover:scale-105 transition-transform select-none cursor-default"
              style={{ willChange: 'transform' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-sm">🚀</span>
              <span className="whitespace-nowrap">Next.js Expert</span>
            </motion.div>

            {/* Badge 2: Center-Right */}
            <motion.div
              className="absolute top-1/3 -right-2 sm:-right-10 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg text-[10px] sm:text-xs font-bold text-foreground hover:scale-105 transition-transform select-none cursor-default"
              style={{ willChange: 'transform' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <span className="text-sm">📈</span>
              <span className="whitespace-nowrap">SEO Growth</span>
            </motion.div>

            {/* Badge 3: Bottom-Left */}
            <motion.div
              className="absolute -bottom-3 left-4 sm:-left-6 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg text-[10px] sm:text-xs font-bold text-foreground hover:scale-105 transition-transform select-none cursor-default"
              style={{ willChange: 'transform' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <span className="text-sm">⚡</span>
              <span className="whitespace-nowrap">Full-Stack Architect</span>
            </motion.div>
            
            {/* Elegant portrait glass container */}
            <motion.div 
              className="relative w-full h-full rounded-3xl border border-border/60 bg-card/30 backdrop-blur-xl p-3 shadow-2xl overflow-hidden group z-20"
              style={{ willChange: 'transform' }}
              whileHover={{ y: -6, rotateY: 5, rotateX: -5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background/40 border border-border/30">
                <img 
                  src="/profile.jpg" 
                  alt="Md Mohsin Profile" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Status active green light badge */}
              <div className="absolute bottom-4 right-4 bg-background/90 border border-border/80 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-30">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </div>
                <span className="text-[10px] text-foreground/80 font-bold uppercase tracking-wider whitespace-nowrap">
                  Active for Contract
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ willChange: 'transform' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
