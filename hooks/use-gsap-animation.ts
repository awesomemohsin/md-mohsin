import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAPAnimation = (
  callback: (ctx: gsap.Context) => void,
  dependencies: any[] = []
) => {
  const ctx = useRef<gsap.Context | null>(null)

  useEffect(() => {
    ctx.current = gsap.context(() => {
      callback(ctx.current!)
    })

    return () => {
      ctx.current?.revert()
    }
  }, dependencies)

  return ctx.current
}

export const useScrollTrigger = (
  selector: string,
  animationCallback: (trigger: ScrollTrigger) => void,
  options?: ScrollTrigger.Vars
) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      ...options,
      onEnter: () => animationCallback(trigger),
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return ref
}

export const useParallax = (depth: number = 0.5) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: () => window.innerHeight * depth * 0.1,
      scrollTrigger: {
        trigger: ref.current,
        scrub: 1,
        markers: false,
      },
    })
  }, [depth])

  return ref
}
