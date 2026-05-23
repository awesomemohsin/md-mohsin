'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { X, Menu } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const cycleTheme = () => {
    if (resolvedTheme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Main bar */}
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-white/90 dark:bg-[#0e0e0e]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)] border-b border-black/[0.06] dark:border-white/[0.06]'
              : 'bg-white/75 dark:bg-[#0e0e0e]/75 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.04]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between h-16 lg:h-[68px]">

              {/* ── Logo / Wordmark ── */}
              <Link href="/" className="group flex-shrink-0">
                <motion.div
                  className="flex items-center gap-2.5"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Monogram badge */}
                  <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/25 group-hover:shadow-primary/40 transition-shadow duration-300 flex-shrink-0">
                    <span className="text-primary-foreground font-black text-xs lg:text-sm tracking-tight leading-none select-none">
                      MM
                    </span>
                  </div>
                  {/* Name wordmark */}
                  <div className="flex flex-col leading-none">
                    <span className="text-sm lg:text-base font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 select-none">
                      Md. Mohsin
                    </span>
                    <span className="text-[9px] lg:text-[10px] font-semibold tracking-[0.12em] uppercase text-foreground/40 select-none mt-0.5">
                      Software Engineer
                    </span>
                  </div>
                </motion.div>
              </Link>

              {/* ── Center Pill Nav (desktop) ── */}
              <div className="hidden md:flex items-center gap-0.5 px-1.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.10] backdrop-blur-md shadow-inner">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-4 lg:px-5 py-1.5 rounded-full text-[13px] lg:text-sm font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? 'text-foreground bg-white dark:bg-white/[0.13] shadow-sm border border-black/[0.10] dark:border-white/[0.18]'
                          : 'text-foreground/50 hover:text-foreground/90 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-white dark:bg-white/[0.13] border border-black/[0.10] dark:border-white/[0.18] -z-10"
                          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* ── Right Controls ── */}
              <div className="flex items-center gap-3">
                {/* Hidden theme switcher — preserved for future use */}
                <div className="hidden" aria-hidden="true">
                  {mounted && (
                    <button onClick={cycleTheme} title="Toggle theme">
                      Theme
                    </button>
                  )}
                </div>

                {/* Let's Talk CTA — desktop */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="hidden md:block"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 lg:px-6 py-2 lg:py-2.5 rounded-full font-bold text-sm tracking-wide text-primary-foreground bg-primary hover:brightness-110 transition-all duration-300 shadow-[0_4px_20px_rgba(150,114,43,0.30)] hover:shadow-[0_6px_28px_rgba(150,114,43,0.45)]"
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>

                {/* Mobile hamburger */}
                <motion.button
                  className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-black/[0.05] dark:bg-white/[0.07] border border-black/[0.08] dark:border-white/[0.10] text-foreground/70 hover:text-foreground hover:bg-black/[0.09] dark:hover:bg-white/[0.12] transition-all duration-200"
                  onClick={() => setIsOpen(!isOpen)}
                  whileTap={{ scale: 0.93 }}
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.span
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <X className="w-4 h-4" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <Menu className="w-4 h-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Dropdown ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
              className="md:hidden bg-white/95 dark:bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.07] shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.22 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                          isActive
                            ? 'text-primary bg-primary/8 border border-primary/15'
                            : 'text-foreground/55 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                        }`}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.06 + 0.05 }}
                  className="pt-2 mt-1 border-t border-black/[0.06] dark:border-white/[0.07]"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm tracking-wide text-primary-foreground bg-primary hover:brightness-110 transition-all duration-300 shadow-[0_4px_20px_rgba(150,114,43,0.25)]"
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
