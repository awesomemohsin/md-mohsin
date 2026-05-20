'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  variant?: 'default' | 'glow' | 'gradient'
}

export function AnimatedCard({
  children,
  delay = 0,
  className = '',
  variant = 'default',
}: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variantClasses: Record<string, string> = {
    default: 'bg-card border border-border',
    glow: 'bg-card border border-primary/20 glow-primary',
    gradient:
      'bg-gradient-to-br from-card to-background border border-primary/30',
  }

  return (
    <motion.div
      ref={ref}
      className={`${variantClasses[variant]} rounded-lg p-6 backdrop-blur-md ${className}`}
      style={{ willChange: 'transform' }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  )
}
