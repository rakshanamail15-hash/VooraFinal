import { useEffect, useRef, useState } from 'react'
import './TrustStats.css'

const stats = [
  { icon: 'years', value: 30, suffix: '+', label: 'Years of Excellence' },
  { icon: 'projects', value: 50, suffix: '+', label: 'Projects' },
  { icon: 'clients', value: 6, suffix: 'K+', label: 'Happy Clients' },
  { icon: 'awards', value: 9, suffix: 'M', label: 'sqft constructed' },
];

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(typeof target === 'number' ? 0 : target)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    if (typeof target !== 'number') return
    const el = ref.current
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          const duration = 1400
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(Math.round(eased * target))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.5 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <strong ref={ref}>
      {val}{suffix}
    </strong>
  )
}

export default function TrustStats() {
  return (
    <section className="trust">
      <div className="container trust-inner">
        <div className="trust-copy" data-reveal="left">
          <h2>
            Build On <span className="accent">Trust</span>,<br />
            Driven By <span className="accent">Excellence</span>
          </h2>
          <p>Measurable results that speak louder than promises.</p>
        </div>

        <div className="trust-stats">
          {stats.map((s, i) => (
            <div className={`trust-stat d${i + 1}`} data-reveal="zoom" key={s.label}>
              <CountUp target={s.value} suffix={s.suffix} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}