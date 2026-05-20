'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const MotionLink = motion.create(Link)

export function AnimatedButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses =
    'relative overflow-hidden font-medium transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-center'

  const variants: Record<string, string> = {
    primary:
      'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50',
    secondary:
      'bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/50',
    outline: 'border border-primary text-primary hover:bg-primary/10',
  }

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  }

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    className: combinedClasses,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const innerContent = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/20"
        initial={{ x: '100%' }}
        whileHover={{ x: '-100%' }}
        transition={{ duration: 0.6 }}
      />
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https') || href.startsWith('//')
    const isEmailOrPhone = href.startsWith('mailto:') || href.startsWith('tel:')

    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          {...motionProps}
        >
          {innerContent}
        </motion.a>
      )
    }

    if (isEmailOrPhone) {
      return (
        <motion.a
          href={href}
          onClick={onClick}
          {...motionProps}
        >
          {innerContent}
        </motion.a>
      )
    }

    return (
      <MotionLink
        href={href}
        onClick={onClick}
        {...motionProps}
      >
        {innerContent}
      </MotionLink>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      {...motionProps}
    >
      {innerContent}
    </motion.button>
  )
}
