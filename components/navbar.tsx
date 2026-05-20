'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const getThemeIcon = () => {
    if (resolvedTheme === 'light') return <Sun className="w-[16px] h-[16px] text-primary" />
    return <Moon className="w-[16px] h-[16px] text-primary" />
  }

  const getThemeLabel = () => {
    if (resolvedTheme === 'light') return 'Light Theme'
    return 'Dark Theme'
  }

  const renderThemeSwitcher = () => {
    if (!mounted) {
      return (
        <div className="w-9 h-9 rounded-full bg-border/5 border border-border/10 animate-pulse flex items-center justify-center" />
      )
    }
    return (
      <motion.button
        onClick={cycleTheme}
        className="p-2 rounded-full bg-card hover:bg-background-secondary border border-border text-foreground transition-all duration-300 hover:border-primary/40 flex items-center justify-center shadow-inner cursor-pointer"
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        title={`Theme: ${getThemeLabel()} (Click to cycle)`}
      >
        <motion.div
          key={theme}
          initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {getThemeIcon()}
        </motion.div>
      </motion.button>
    )
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About & Education', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
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
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 rounded-full border border-primary/30 overflow-hidden flex items-center justify-center bg-card shadow-md"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/profile.jpg"
                alt="Md. Mohsin"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-black text-foreground text-base sm:text-lg tracking-tight leading-none transition-colors group-hover:text-primary">
                Md. Mohsin
              </span>
              <span className="h-4 w-px bg-border/80 hidden min-[350px]:block" />
              <span className="text-[9px] sm:text-[10px] text-foreground/60 font-bold tracking-widest uppercase hidden min-[350px]:block mt-[1px]">
                Full Stack Developer & Digital Marketing Expert
              </span>
            </div>
          </Link>

          {/* Right Header Controls */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  <motion.span
                    className="inline-block text-sm font-medium"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Theme switcher */}
            {renderThemeSwitcher()}

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
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors px-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
