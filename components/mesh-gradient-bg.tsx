'use client'

import { useEffect, useRef } from 'react'

interface MeshGradientBgProps {
  className?: string
}

export function MeshGradientBg({ className = '' }: MeshGradientBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const colors = [
      { r: 85, g: 170, b: 255 },   // Blue
      { r: 138, g: 43, b: 226 },   // Purple
      { r: 0, g: 200, b: 255 },    // Cyan
    ]

    let time = 0

    const animate = () => {
      time += 0.001

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )

      // Create animated gradient
      const c1 = colors[0]
      const c2 = colors[1]
      const c3 = colors[2]

      const offset = Math.sin(time) * 0.1 + 0.5

      gradient.addColorStop(
        0,
        `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${0.1 + offset * 0.05})`
      )
      gradient.addColorStop(
        0.5,
        `rgba(${c2.r}, ${c2.g}, ${c2.b}, ${0.15 + offset * 0.05})`
      )
      gradient.addColorStop(
        1,
        `rgba(${c3.r}, ${c3.g}, ${c3.b}, ${0.1 + offset * 0.05})`
      )

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  )
}
