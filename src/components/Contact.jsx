import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';
import SiteVisitForm from './SiteVisitForm';
import { SITE_VISIT_ENDPOINTS } from '../config/siteVisitEndpoints';
const book1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044239/ONE_SEA_CTA_POP-UP_534X415_px_km6hro.webp";
const book2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book2_xs2p6a.png';
const book3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book3_naly9e.png';
const book4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787045486/HOME_PAGE_EXPLORE_-_AGASTYA_osze4j.webp";

const book5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787031544/WESTSIDE_CTA_POP-UP_534X415_PX_fni06m.webp";
const book6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044825/OCEAN_27_CTA_POP-UP_534X415_px_a3x5xq.webp"



const stats = [
  { icon: 'years', value: 30, suffix: '+', label: 'Years of Excellence' },
  { icon: 'projects', value: 50, suffix: '+', label: 'Projects' },
  { icon: 'clients', value: 6, suffix: 'K+', label: 'Happy Clients' },
  { icon: 'awards', value: 9, suffix: 'M', label: 'sqft constructed' },
];

const heroImages = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
];

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;

          const start = performance.now();
          const duration = 1400;

          const animate = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.4 });

    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <strong ref={ref}>{val}{suffix}</strong>;
}

export default function Contact({ projectName = "Contact" }) {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((p) => (p === heroImages.length - 1 ? 0 : p + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">

      <div className="container hero-inner">

        <SiteVisitForm apiEndpoint={SITE_VISIT_ENDPOINTS.Contact} projectName={projectName} />

        {/* HERO IMAGE + STATS */}
        <div className="hero-visual">

          <img src={heroImages[currentImage]} alt="project" />

          <div className="hero-stats">
            {stats.map((s, i) => (
              <div
                className="hero-stat"
                key={s.label}
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <strong>
                  <CountUp target={s.value} suffix={s.suffix} />
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}