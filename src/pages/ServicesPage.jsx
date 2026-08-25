import "./ServicesPage.css";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard, Pagination } from 'swiper/modules';
import SiteVisitForm from "../components/SiteVisitForm";
import CompletedProjects from "../components/CompletedProjects";
import Testimonials from "../components/Testimonials";
import { SITE_VISIT_ENDPOINTS } from "../config/siteVisitEndpoints";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const voorafav = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/fav1_nlyrnx.png";

import {
  FaHome, FaBuilding, FaCity, FaWarehouse, FaPaintRoller,
  FaClipboardList, FaChartLine, FaDraftingCompass, FaCalendarAlt,
  FaTrophy, FaSmile, FaTools, FaClock, FaUsers, FaCommentDots,
  FaCompass, FaPencilRuler, FaHardHat, FaKey, FaMapMarkerAlt,
  FaPhoneAlt, FaEnvelope, FaWhatsapp, FaArrowRight, FaCheckCircle,
} from 'react-icons/fa';

// import book1 from '../assets/image/book1.png';
const book1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044239/ONE_SEA_CTA_POP-UP_534X415_px_km6hro.webp";
const book2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book2_xs2p6a.png';
const book3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book3_naly9e.png';
const book4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787045486/HOME_PAGE_EXPLORE_-_AGASTYA_osze4j.webp";

const book5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787031544/WESTSIDE_CTA_POP-UP_534X415_PX_fni06m.webp";
const book6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044825/OCEAN_27_CTA_POP-UP_534X415_px_a3x5xq.webp"

import TrustStats from "../components/TrustStats";
import CustomerTestimonials from "../components/CustomerTestimonials";
import Contact from "../components/Contact";

/* ═══════════════════════════════════════════════════════════
   SCROLL-TRIGGERED TYPEWRITER HOOK
   Watches multiple sections via IntersectionObserver.
   When a section scrolls into view it types its eyebrow text,
   pauses, then clears — identical to the pattern you shared.
═══════════════════════════════════════════════════════════ */
function useScrollTypewriter(sectionEyebrowMap, speed = 60) {
  const [typedText, setTypedText] = useState('');
  const [activeKey, setActiveKey] = useState('');
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const typeText = (text) => {
    clearTimer();
    setTypedText('');
    let index = 0;

    const typeNextChar = () => {
      if (index >= text.length) {
        // Full text reached — pause then clear
        timerRef.current = window.setTimeout(() => {
          setTypedText('');
          timerRef.current = null;
        }, 1200);
        return;
      }
      setTypedText(text.slice(0, index + 1));
      index += 1;
      timerRef.current = window.setTimeout(typeNextChar, speed);
    };

    timerRef.current = window.setTimeout(typeNextChar, 120);
  };

  useEffect(() => {
    const entries = Object.entries(sectionEyebrowMap).map(([selector, text]) => ({
      selector,
      text,
      element: document.querySelector(selector),
    })).filter((e) => e.element);

    if (!entries.length) return;

    const observer = new IntersectionObserver(
      (observedEntries) => {
        const visible = observedEntries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const matched = entries.find((e) => e.element === visible.target);
        if (!matched) return;

        // Don't re-trigger if same section is still active
        setActiveKey((prev) => {
          if (prev === matched.selector) return prev;
          typeText(matched.text);
          return matched.selector;
        });
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: '0px 0px -15% 0px',
      }
    );

    entries.forEach((e) => observer.observe(e.element));

    return () => {
      clearTimer();
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return typedText;
}

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const servicesData = [
  { icon: <FaHome />, title: 'Residential Construction', desc: 'Turn-key homes built to the highest standards of quality, sustainability and design.' },
  { icon: <FaBuilding />, title: 'Commercial Construction', desc: 'Premium office, retail and mixed-use spaces that inspire productivity and prestige.' },
  { icon: <FaCity />, title: 'Luxury & Villa  Apartments ', desc: 'Iconic high-rise living with panoramic sea-views, smart-home tech and elite amenities.' },
  { icon: <FaChartLine />, title: 'Plotted Development', desc: 'Strategic land acquisition, planning and execution for high-value assets.' },
];

const heroImages = [book1, book2, book3, book4, book5, book6];

const timelineSteps = [
  { icon: <FaCommentDots />, title: 'Consultation', desc: 'Understanding client vision, requirements and project feasibility.' },
  { icon: <FaCompass />, title: 'Planning', desc: 'Strategic master-plan, budgeting and statutory approvals.' },
  { icon: <FaPencilRuler />, title: 'Design', desc: 'Architectural and interior design with full 3D visualisation.' },
  { icon: <FaHardHat />, title: 'Construction', desc: 'On-site execution with premium materials and craftsmanship.' },
  { icon: <FaKey />, title: 'Delivery', desc: 'Hand-over of a ready-to-live masterpiece with full warranty.' },
];

/* ── Section → eyebrow text map (selector must match a real DOM element) ── */
const SECTION_EYEBROW_MAP = {
  '.sp-intro': 'End-to-End Execution',
  '#sp-services': 'Our Service',
  '.sp-process-section': 'Premium Construction Solutions',
};

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ═══════════════════════════════════════════════════════════
   COUNTER
═══════════════════════════════════════════════════════════ */
function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1400;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref} className="counter-value">{val}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
export default function ServicesPage() {

  /* ── Scroll-triggered typewriter (single shared text) ── */
  const typedText = useScrollTypewriter(SECTION_EYEBROW_MAP, 60);

  /* ── Hero orbit services ── */
  const services = [
    { icon: '🏠', name: 'Residential Construction', className: 'service1', title1: 'Residential', title2: 'Construction' },
    { icon: '🏢', name: 'Commercial Projects', className: 'service2', title1: 'Commercial', title2: 'Projects' },
    { icon: '📍', name: 'Plot Development', className: 'service3', title1: 'Plot', title2: 'Development' },
    { icon: '👷', name: 'Construction Services', className: 'service4', title1: 'Construction', title2: 'Services' },
    { icon: '🔧', name: 'Maintenance & Support', className: 'service5', title1: 'Maintenance', title2: 'Support' },
  ];

  const [active, setActive] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  /* ── Hero orbit auto-cycle ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* ── Hero image slider ── */
  useEffect(() => {
    setCurrentImage(0);
    const interval = setInterval(() => {
      setCurrentImage((p) => (p === heroImages.length - 1 ? 0 : p + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [location.pathname]);

  /* ── Scroll to top on mount ── */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════ */
  return (
    <>

      {/* ══════════ HERO ══════════ */}
      <section className="voora-hero">
        <div className="overlay" />

        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-left">
            <h2 className="section-title">
              Voora <br className="br-only" />
              <span className="accent">Construction</span>
            </h2>
            <p>
              At Voora, we provide end-to-end construction solutions to help
              families and businesses build spaces they are proud of.
            </p>

            <h2 key={active} className="hero-title fade-title">
              <span className="title-one">{services[active].title1}</span>
              <br />
              <span className="title-two">{services[active].title2}</span>
            </h2>

            <motion.button
              className="nav-cta"
              style={{ marginTop: '25px', display: 'inline-flex' }}
              onClick={() => (window.location.href = "#top")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started →
            </motion.button>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="service-circle">

              <div className="center-circle">
                <div className="logo-circle">
                  <img src={voorafav} alt="Voora Logo" className="logo-image" />
                </div>
              </div>

              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service ${service.className} ${active === index ? 'active-service' : ''}`}
                >
                  <div className="icon">{service.icon}</div>
                  <span>{service.name}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <div id="services-page" className="services-page">

        {/* ══ INTRO ══ */}
        <section className="sp-intro">
          <div className="sp-intro-grid">

            <motion.div
              className="sp-intro-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={'https://res.cloudinary.com/wdfwbagg/image/upload/v1786597948/services_smlaek.jpg'} alt="Luxury construction" loading="lazy" />
              <div className="sp-intro-badge">
                <strong>30+</strong>
                <span>Years of Craftsmanship</span>
              </div>
            </motion.div>

            <motion.div
              className="sp-intro-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div data-reveal="true" className="active is-visible">
                {/* ── Scroll-triggered eyebrow ── */}


                <h2 className="section-title">
                  Building <br className="br-only" />
                  <span className="accent">Excellence</span>
                </h2>
              </div>

              <p className="sp-intro-desc">
                We deliver end-to-end construction solutions with a focus on quality,
                innovation, and precision. From concept to completion, every project is
                crafted to exceed expectations and create lasting value.
              </p>

              <ul className="sp-intro-list">
                <li><FaCheckCircle /> Residential, Commercial & Industrial Construction</li>
                <li><FaCheckCircle /> Architecture, Planning & Design Excellence</li>
                <li><FaCheckCircle /> Turnkey Project Management & Execution</li>

              </ul>
            </motion.div>

          </div>
        </section>

        {/* ══ SERVICES GRID ══ */}
        <section id="sp-services" className="sp-services-section">

          <div data-reveal="true" className="active is-visible">
            {/* ── Scroll-triggered eyebrow ── */}

            <h2 className="section-title">
              Complete Construction<span className="accent"> Services</span>
            </h2>
            <p>Managing every stage of construction with precision and expertise.</p>
          </div>

          <div className="sp-services-grid">
            {servicesData.map((s, i) => (
              <motion.article
                className="sp-service-card"
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 4) * 0.07 }}
              >
                <div className="sp-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.article>
            ))}
          </div>

        </section>

        {/* ══ WHY CHOOSE US ══ */}
        <TrustStats />

        {/* ══ PROCESS / TIMELINE ══ */}
        <section className="sp-process-section">

          <div className="heading-main">
            <div data-reveal="true" className="active is-visible">
              {/* ── Scroll-triggered eyebrow ── */}


              <h2 className="section-title">
                From concept to <br className="br-only" />
                <span className="accent">Key Handover</span>
              </h2>
              <p>Delivering seamless construction solutions from initial planning to final handover.</p>
            </div>
          </div>

          <div className="sp-process-grid">
            {timelineSteps.map((step, i) => (
              <motion.div
                className="sp-process-card"
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="sp-process-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="sp-process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i !== timelineSteps.length - 1 && (
                  <span className="sp-process-arrow" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                )}
              </motion.div>
            ))}
          </div>

        </section>

        {/* ══ FEATURED PROJECTS ══ */}
        <CompletedProjects />

        {/* ══ TESTIMONIALS ══ */}
        <CustomerTestimonials />

        {/* ══ CTA ══ */}
        <Contact />



        {/* ══ LIGHTBOX ══ */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              className="sp-lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
            >
              <motion.div
                className="sp-lightbox-box"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="sp-lightbox-close"
                  aria-label="Close"
                  onClick={() => setLightboxImg(null)}
                >
                  ✕
                </button>
                <img src={lightboxImg} alt="Project enlarged" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}