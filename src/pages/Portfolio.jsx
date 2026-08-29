import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import HeroRibbon from "../components/HeroRibbon";
import CustomerTestimonials from "../components/CustomerTestimonials";
import {
  IcTrust,
  IcKey,
  IcSustainability,
  IcArchitecture,
  IcLocation,
  IcHandshake,
} from "../components/Icons";

import "./Portfolio.css";

const hero1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917272/hero1_f8nokb.webp";
const hero2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917272/hero2_h4gbla.webp";
const hero3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917272/hero3_r4jdpm.webp";
const hero4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/hero4_jy9wls.webp";
const oneSea = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917278/homeonesea_z6nhbs.png";
const westside = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/herowestside_evmtj4.webp";
const beckford = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/herobeckford_yrmenj.webp";
const highway = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787634801/Portfolio_Page_-_1536X1303_px_z68xot.webp";
const techedge = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786011239/tech-edgeRibbon_ytnaqj.jpg"
// TODO: replace with your actual avatar image import, e.g.:
// import userAvatar from "../assets/image/avatar-placeholder.webp";

/* ── DATA ── */

const reviews = [
  {
    text: "ARKHE transformed our vision into a breathtaking reality. Every detail was executed with craftsmanship we had never seen before.",
    name: "Rajesh Sharma",
    role: "Villa Owner",
    image: hero1, // TODO: swap for userAvatar
  },
  {
    text: "From blueprint to handover, the team was meticulous and transparent. Our office complex was delivered ahead of schedule.",
    name: "Priya Nair",
    role: "CEO, Novatech",
    image: hero2, // TODO: swap for userAvatar
  },
  {
    text: "The interiors exceeded our expectations. Beautiful, functional and finished to the highest standard imaginable.",
    name: "Arjun Mehta",
    role: "Homeowner",
    image: hero3, // TODO: swap for userAvatar
  },
  {
    text: "Professional, reliable and genuinely passionate about design. ARKHE is now our go-to construction partner.",
    name: "Sneha Kapoor",
    role: "Property Developer",
    image: hero4, // TODO: swap for userAvatar
  },
  {
    text: "They listened, advised and built exactly what we dreamed of — on budget and stress-free.",
    name: "Vikram Reddy",
    role: "Restaurant Owner",
    image: hero1, // TODO: swap for userAvatar
  },
];

const projects = [
  { id: 1, image: oneSea, link: "/voora-one-sea", name: "One Sea", tag: "Residential" },
  { id: 2, image: westside, link: "/voora-westside", name: "Westside", tag: "Residential" },
  { id: 3, image: beckford, link: "/voora-beckford", name: "Beckford", tag: "Residential" },
  { id: 4, image: highway, link: "/voora-highway-haven", name: "Highway Haven", tag: "Residential" },
  { id: 5, image: techedge, link: "/voora-tech-edge", name: "Tech Edge", tag: "Commercial" },
];

const stats = [
  { value: 30, suffix: "+", label: "Years of Legacy" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 25000, suffix: "+", label: "Happy Families" },
  { value: 12, suffix: "M+", label: "Sq. Ft. Crafted" },
];

const journey = [
  { year: "1994", title: "Foundation", text: "Founded with a vision to redefine real estate in Chennai through honesty and craftsmanship." },
  { year: "2005", title: "Residential Excellence", text: "Expanded into landmark residential developments across prime Chennai neighbourhoods." },
  { year: "2015", title: "Commercial Vision", text: "Entered the commercial real estate space with Grade-A workspaces and IT parks." },
  { year: "2024", title: "Future Forward", text: "Delivering sea-facing skyscrapers, gated communities and sustainable mixed-use destinations." },
];

const awards = [
  { title: "Realty Excellence", year: "2023", body: "Best Residential Developer — Chennai" },
  { title: "Times Property", year: "2022", body: "Customer Choice Builder of the Year" },
  { title: "CREDAI Honour", year: "2021", body: "Sustainable Design & Construction" },
  { title: "ET Now Award", year: "2020", body: "Brand of the Year — Real Estate South" },
];

const testimonials = [
  {
    quote: "Voora delivered our dream home exactly on time, with craftsmanship that exceeded every expectation. The attention to detail in Agastya is simply unmatched.",
    name: "Ramesh & Priya Krishnan",
    project: "Voora Agastya",
    initials: "RK",
  },
  {
    quote: "We were skeptical at first, but the transparency throughout the entire process won us over completely. Our Westside apartment is a masterpiece.",
    name: "Suresh Venkataraman",
    project: "Voora Westside",
    initials: "SV",
  },
  {
    quote: "From our first site visit to handover, Voora's team treated us like family. Living in One Sea is everything we imagined — and more.",
    name: "Anita & Karthik Nair",
    project: "Voora One Sea",
    initials: "AN",
  },
  {
    quote: "As an investor, I look for reliability and pedigree. Voora's track record over 30 years speaks louder than any brochure ever could.",
    name: "Dinesh Balakrishnan",
    project: "Voora Beckford",
    initials: "DB",
  },
];

const usps = [
  { icon: <IcTrust />, title: "30 Years of Trust", text: "Three decades of delivering on our promise — on time, on spec, and with absolute integrity." },
  { icon: <IcKey />, title: "Hassle-Free Ownership", text: "End-to-end support from site selection to registration, so your journey is always smooth." },
  { icon: <IcSustainability />, title: "Sustainable by Design", text: "Green-rated buildings, rainwater harvesting, and eco-conscious construction at every project." },
  { icon: <IcArchitecture />, title: "Architectural Excellence", text: "Award-winning designs crafted by leading architects with a focus on livability and longevity." },
  { icon: <IcLocation />, title: "Prime Locations", text: "Every project is placed where connectivity, community, and lifestyle converge perfectly." },
  { icon: <IcHandshake />, title: "25,000+ Happy Families", text: "Our greatest measure of success is the trust of the families who call Voora homes their own." },
];

/* ── ANIMATIONS ── */

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 },
  }),
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ── TYPED EYEBROW HOOK ── */

function useTypedText(text, ref) {
  return text;
}

/* ── SCROLL REVEAL (CSS-only, non-blocking) ── */
function useRevealOnScroll(count) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(() => Array(count).fill(false));

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const items = Array.from(node.querySelectorAll("[data-reveal-index]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-reveal-index"));
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return { containerRef, visible };
}

/* ── RESPONSIVE PERVIEW (debounced, no scroll-jank) ──
   Drives the "What Our Clients Say" carousel. Resize is throttled via
   requestAnimationFrame so momentum-scroll on mobile never stacks up
   synchronous state updates (that stacking is what caused the earlier
   "mouse stuck" symptom). */
function usePerView() {
  const getPerView = () => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 1024) return 2;
    return 3;
  };

  const [perView, setPerView] = useState(getPerView);

  useEffect(() => {
    let frame = null;
    const handleResize = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPerView(getPerView()));
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return perView;
}

/* ── COUNTER ── */

function Counter({ end, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(end);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

/* ── TESTIMONIAL CAROUSEL (unused legacy component — kept as-is) ── */

function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <div className="pf-testi-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="pf-testi-slide"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="pf-testi-quote">"{t.quote}"</p>
          <div className="pf-testi-author">
            <span className="pf-testi-avatar">{t.initials}</span>
            <div>
              <strong>{t.name}</strong>
              <span>{t.project}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pf-testi-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`pf-testi-dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── ENQUIRY FORM ── */

function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", project: "", message: "", agreed: false });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  if (sent) return (
    <motion.div
      className="pf-form-success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="pf-form-tick">✓</span>
      <h3>Thank You!</h3>
      <p>We've received your enquiry and will be in touch within 24 hours.</p>
    </motion.div>
  );

  return (
    <form className="pf-enquiry-form" onSubmit={handleSubmit}>
      <div className="pf-form-row">
        <div className="pf-form-group">
          <label htmlFor="ef-name">Full Name</label>
          <input
            id="ef-name" name="name" type="text"
            placeholder="Your name" required
            value={form.name} onChange={handleChange}
          />
        </div>
        <div className="pf-form-group">
          <label htmlFor="ef-phone">Phone Number</label>
          <input
            id="ef-phone" name="phone" type="tel"
            placeholder="+91 98765 43210" required
            value={form.phone} onChange={handleChange}
          />
        </div>
      </div>
      <div className="pf-form-group">
        <label htmlFor="ef-project">Interested In</label>
        <select id="ef-project" name="project" required value={form.project} onChange={handleChange}>
          <option value="">Select a project</option>
          {projects.map(p => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>
      <div className="pf-form-group">
        <label htmlFor="ef-message">Message</label>
        <textarea
          id="ef-message" name="message" rows={4}
          placeholder="Tell us what you're looking for…"
          value={form.message} onChange={handleChange}
        />
      </div>
      <div className="pf-form-checkbox">
        <label>
          <input
            type="checkbox"
            name="agreed"
            checked={form.agreed}
            onChange={handleChange}
            required
          />
          I authorize Voora to contact me regarding my enquiry.
        </label>
      </div>
      <button type="submit" className="pf-form-submit" disabled={loading || !form.agreed}>
        {loading ? <span className="pf-form-spinner" /> : "Send Enquiry →"}
      </button>
    </form>
  );
}

/* ── PROJECTS GRID ── */

function ProjectsGrid() {
  const { containerRef, visible } = useRevealOnScroll(projects.length);

  return (
    <div className="pf-grid" ref={containerRef}>
      {projects.map((p, i) => (
        <div
          key={p.id}
          data-reveal-index={i}
          className={`pf-card ${i === 0 ? "pf-card--featured" : ""} ${p.name === 'Agastya' ? "pf-card--agastya" : ""} ${visible[i] ? "pf-card--in" : ""}`}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <Link to={p.link} className="pf-card-link">
            <div className="pf-card-media">
              <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
              <div className="pf-card-scrim" />
              <div className="pf-card-info">
                <span className="pf-card-tag">{p.tag}</span>
                <h3 className="pf-card-name">{p.name}</h3>
                <span className="pf-card-cta">View Project →</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

/* ── MAIN ── */

export default function Portfolio() {

  /* One ref + typed text per section */
  const projectsRef = useRef(null);
  const whyRef = useRef(null);
  const videoRef = useRef(null);
  const testiRef = useRef(null);
  const journeyRef = useRef(null);
  const awardsRef = useRef(null);
  const enquiryRef = useRef(null);

  const projectsTyped = useTypedText("Our Projects", projectsRef);
  const whyTyped = useTypedText("Why Choose Us", whyRef);
  const videoTyped = useTypedText("Virtual Experience", videoRef);
  const testiTyped = useTypedText("Client Stories", testiRef);
  const journeyTyped = useTypedText("Our Journey", journeyRef);
  const awardsTyped = useTypedText("Recognition", awardsRef);
  const enquiryTyped = useTypedText("Get In Touch", enquiryRef);

  /* ── TESTIMONIALS CAROUSEL STATE ── */
  const perView = usePerView();
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, reviews.length - perView);

  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart]);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  return (
    <div className="portfolio-page">

      {/* ── HERO ── */}
      <HeroCarousel video="https://res.cloudinary.com/wdfwbagg/video/upload/v1786014537/landingVideo_io88dy.mp4" />
      {/* <HeroRibbon  /> */}



      {/* ── STATS ── */}
      <section className="pf-stats">
        <motion.div
          className="pf-stats-grid"
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((s, i) => (
            <motion.div className="pf-stat" key={i} variants={fadeUp} custom={i}>
              <div className="pf-stat-number"><Counter end={s.value} suffix={s.suffix} /></div>
              <div className="pf-stat-divider" />
              <p className="pf-stat-label">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* ── WHY CHOOSE US ── */}
      <section className="pf-usps" ref={whyRef}>
        <motion.div
          className="pf-section-head"
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
        >
          <div className="heading-main-center">
            <div data-reveal="true" className="active is-visible">

              <h2 className="section-title">
                Built on Values That <br className="br-only" />
                <span className="accent">Last a Lifetime</span>
              </h2>

            </div>
          </div>
        </motion.div>

        <motion.div
          className="pf-usps-grid"
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          {usps.map((u, i) => (
            <motion.div
              className="pf-usp-card"
              key={i} variants={fadeUp} custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <span className="pf-usp-icon">{u.icon}</span>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── AWARDS ── */}
      <section className="pf-awards" ref={awardsRef}>
        <motion.div
          className="pf-section-head"
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
        >
          <div className="heading-main-center">
            <div data-reveal="true" className="active is-visible">
              <h2 className="section-title">
                Honoured for <br className="br-only" />
                <span className="accent">Excellence</span>
              </h2>
              <p>Recognized for quality, innovation, and excellence.</p>            </div>
          </div>
        </motion.div>

        <motion.div
          className="pf-awards-grid"
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((a, i) => (
            <motion.div
              className="pf-award-card" key={i}
              variants={fadeUp} custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <span className="pf-award-star">★</span>
              <span className="pf-award-year">{a.year}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── ENQUIRY ── */}
      <section className="pf-enquiry-section" ref={enquiryRef}>
        <div className="pf-enquiry-layout">

          {/* Left — CTA copy */}
          <motion.div
            className="pf-enquiry-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">

                <h2 className="section-title-white">
                  Ready to Find Your<br className="br-only" />
                  <span className="accent why-voora"> Dream Home?</span>
                </h2>
              </div>
            </div>
            <p className="pf-enquiry-desc">
              Our consultants are ready to guide you through every project, answer your
              questions, and help you find the perfect space — without any pressure.
            </p>
            <div className="pf-enquiry-trust">
              <div className="pf-trust-item"><span>✓</span> No hidden charges</div>
              <div className="pf-trust-item"><span>✓</span> Response within 24 hours</div>
              <div className="pf-trust-item"><span>✓</span> RERA registered projects</div>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            className="pf-enquiry-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={highway}
              alt="Dream Home"
              className="pf-enquiry-image"
            />
          </motion.div>

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <CustomerTestimonials />


      {/* ── PROJECTS ── */}
      <section id="projects" className="pf-projects" ref={projectsRef}>
        <motion.div
          className="pf-section-head"
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
        >
          <div className="heading-main-center">
            <div data-reveal="true" className="active is-visible">

              <h2 className="section-title">
                Projects That Define<br className="br-only" />
                <span className="accent"> Our Craft</span>
              </h2>
              <p className="text-dark">
                Discover the projects that reflect our commitment to quality and innovation.
              </p>
            </div>
          </div>
        </motion.div>

        <ProjectsGrid />
      </section>
    </div>
  );
}