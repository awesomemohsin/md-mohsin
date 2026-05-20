'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              A
            </motion.div>
            <span className="hidden sm:inline font-bold text-foreground">
              Alex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="w-6 h-5 flex flex-col justify-between"
              animate={isOpen ? 'open' : 'closed'}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-0.5 bg-foreground block rounded-full"
                  variants={{
                    open: {
                      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                      y: i === 1 ? 8 : 0,
                      opacity: i === 1 ? 0 : 1,
                    },
                    closed: {
                      rotate: 0,
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: i === 1 ? 16 : 24,
                  }}
                />
              ))}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={
            isOpen
              ? { height: 'auto', opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors px-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
