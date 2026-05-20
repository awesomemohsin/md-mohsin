'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  animated?: boolean
  delay?: number
}

export function GradientText({
  children,
  className = '',
  animated = true,
  delay = 0,
}: GradientTextProps) {
  return (
    <motion.span
      className={`gradient-text ${className}`}
      initial={animated ? { opacity: 0, y: 10 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.span>
  )
}
