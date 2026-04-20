"use client"
import { useEffect, useRef } from "react"

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeInOnScroll({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight

    if (alreadyVisible) {
      // Above fold on load — show immediately, no animation
      return
    }

    // Below fold — hide, then animate in when scrolled to
    el.classList.add("fin-hidden")
    if (delay > 0) el.style.transitionDelay = `${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("fin-hidden")
          el.classList.add("fin-visible")
          observer.disconnect()
        }
      },
      { rootMargin: "-50px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
