import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Adds an IntersectionObserver that reveals any element carrying the
 * `data-reveal` attribute by toggling an `is-visible` class once it
 * scrolls into view. Used across sections for friendly fade/slide-ins.
 *
 * Re-runs whenever the route changes so newly mounted elements are observed.
 */
export default function useReveal() {
  const location = useLocation()

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')

    // Respect reduced-motion users: just show everything.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])
}