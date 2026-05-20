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
      // Downscale canvas internal drawing buffer to 256x256.
      // Stretched smoothly via hardware-accelerated CSS, it achieves the exact same visual quality
      // while reducing rendering pixel loads by 97%+, completely resolving GPU scrolling lag.
      canvas.width = 256
      canvas.height = 256
    }

    resizeCanvas()

    const colors = [
      { r: 85, g: 170, b: 255 },   // Blue
      { r: 138, g: 43, b: 226 },   // Purple
      { r: 0, g: 200, b: 255 },    // Cyan
    ]

    let time = 0
    let animationFrameId: number
    let lastTime = 0
    const fpsInterval = 1000 / 30 // Target 30 FPS

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsed = timestamp - lastTime
      if (elapsed < fpsInterval) return

      lastTime = timestamp - (elapsed % fpsInterval)
      time += 0.002 // Adjusted step size for throttled ticks to preserve matches with original gradient shifting speeds

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
    }

    // Initialize with a timestamp
    requestAnimationFrame((t) => {
      lastTime = t
      animate(t)
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none object-cover ${className}`}
      style={{ zIndex: -1 }}
    />
  )
}
