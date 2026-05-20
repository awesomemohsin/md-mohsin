'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses =
    'relative overflow-hidden font-medium transition-all duration-300 cursor-pointer'

  const variants: Record<string, string> = {
    primary:
      'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50',
    secondary:
      'bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/50',
    outline: 'border border-primary text-primary hover:bg-primary/10',
  }

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/20"
        initial={{ x: '100%' }}
        whileHover={{ x: '-100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )
}
