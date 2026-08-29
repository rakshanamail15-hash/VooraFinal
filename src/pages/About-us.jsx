import React, { useState, useEffect, useRef } from 'react';
import './About-us.css';
import '../components/About.css';
const hero2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787048735/ABOUT_US_-_HERO_BANNER_1349X500_px_l3mqep.webp';
const heromobile = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1788000643/HOME_d54qdu.jpg';
// const hero2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787047308/VOORA_486X456_HOME_ABOUT_US_copy_qem2g7.webp"
const user = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/user_z37p18.png';
const book3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book3_naly9e.png';

const awards = [
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309999/vooraaward1_gcs0s8.webp",
    title: "Punjab National Bank Expo-2025 (Most Preferred Builder)"
  },
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309996/vooraaward2_safzck.webp",
    title: "CIA World Builders & Infra Awards (Best Developer of the Year)"
  },
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309993/vooraaward3_zoug0j.webp",
    title: "Times Realty Icons Chennai (Best Affordable Apartment Project)"
  },
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309989/vooraaward4_ab02i1.webp",
    title: "Times Realty Icons Chennai (Best Luxury Villa Project)"
  },
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309986/vooraaward5_zumexc.webp",
    title: "CIA World Builders & Infra Awards (Best Residential Project of the Year)"
  },
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309983/vooraaward6_nh6idr.webp",
    title: "Construction Times Builders Awards (Best Developer of the Year)"
  },
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309979/vooraaward7_ob7gp2.webp",
    title: "Silicon India Chennai Real Estate Awards (Best Luxury Villa Project of the Year)"
  },
  {
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787309972/vooraaward8_hx94k2.webp",
    title: "Construction Industry Awards (Excellence in Gated Community)"
  }
];

const vooraCards = [
  {
    title: "Three Decades of Excellence",
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787310561/Three_Decades_of_Excellence_pzqg8c.jpg",
    description: "Our rich heritage spans over three decades in Chennai's real estate sector, achieving over 2 million sq.ft of residential and commercial developments."
  },
  {
    title: "Strategic Growth and Partnerships",
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787310557/Strategic_Growth_and_Partnerships_bh1hu8.jpg",
    description: "Founded in 1995 under visionary leadership, Voora has expanded through strategic partnerships and business growth."
  },
  {
    title: "Unmatched Quality",
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787310554/Unmatched_Quality_pgtp4z.jpg",
    description: "From affordable housing to luxury developments, every project reflects superior craftsmanship and innovation."
  },
  {
    title: "Trusted by Thousands",
    image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787310551/Trusted_by_Thousands_zkf23t.jpg",
    description: "Thousands of satisfied homeowners have trusted Voora to deliver their dream homes and investment opportunities."
  }
];

const managementMembers = [
  {
    name: "Shri Voora Lakshminarasimha Rao",
    designation: "Founder & Chairman",
    image: user,
    message:
      "Our journey began with a simple belief — that every family deserves a home built with integrity, quality, and care. Over three decades, we have stayed true to that promise, transforming Chennai's skyline one landmark at a time.",
  },
  {
    name: "Pavan Voora",
    designation: "Managing Director",
    image: user,
    message:
      "We are committed to pushing the boundaries of innovation while keeping our customers at the heart of every decision. Voora is not just a builder — we are a trusted partner in your journey to find the perfect home.",
  },
  {
    name: "Suman Voora",
    designation: "Managing Director",
    image: user,
    message:
      "Sustainability and excellence go hand in hand at Voora. Every project we undertake is a reflection of our dedication to building spaces that stand the test of time and enrich the lives of those who call them home.",
  },
];

/* ── Reusable typed eyebrow hook ── */
function useTypedText(text, ref) {
  const [typed, setTyped] = useState("");
  const timerRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            let i = 0;
            setTyped("");

            const type = () => {
              if (i < text.length) {
                setTyped(text.slice(0, i + 1));
                i++;
                timerRef.current = setTimeout(type, 80);
              }
            };
            timerRef.current = setTimeout(type, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, ref]);

  return typed;
}

export default function AboutUsPage() {
  /* ── One ref + typed text per section ── */
  const aboutRef = useRef(null);
  const leaderRef = useRef(null);
  const whyRef = useRef(null);
  const awardsRef = useRef(null);
  const vooraGridRef = useRef(null);

  const scrollVooraGrid = (dir) => {
    if (vooraGridRef.current) {
      const isMobile = window.innerWidth <= 991;
      const scrollAmount = isMobile ? vooraGridRef.current.clientWidth + 15 : 340;
      vooraGridRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="one-sea-page">

      {/* ── Hero ── */}
      <section className="about-hero about-hero-auto">
        <picture>
          <source media="(max-width: 768px)" srcSet={heromobile} />
          <img
            src={hero2}
            className="hero-bg-image about-banner-img"
            alt="About Us"
          />
        </picture>
      </section>

      {/* ── Voora Highlights ── */}
      <section className="voora-about-section" ref={aboutRef}>
        <div className="heading-main-center">
          <div data-reveal="true" className="active is-visible">

            <h2 className="section-title">
              Three Decades of  <br className="br-only" />
              <span className="accent">Trust</span>
            </h2>
            <p>Delivering quality, reliability, and excellence across every project for over three decades.</p>
          </div>
        </div>

        <div className="va-slider-wrapper">
          <div className="voora-about-grid" ref={vooraGridRef}>
            {vooraCards.map((card, index) => (
              <div className="voora-about-card" key={index}>
                <div className="voora-about-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="voora-about-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="va-dots-nav">
            <button onClick={() => scrollVooraGrid('left')}>❮</button>
            <button onClick={() => scrollVooraGrid('right')}>❯</button>
          </div>
        </div>
      </section>

      {/* ── Management ── */}
      {/* ── Founder Messages ── */}
      <section className="fm-section" ref={leaderRef}>
        <div className="fm-container">

          <div className="heading-main-center">
            <div data-reveal="true" className="active is-visible">

              <h2 className="section-title">
                Founder <br className="br-only" />
                <span className="accent">Message</span>
              </h2>
              <p>A vision built on trust, excellence, and a commitment to creating lasting value.</p>
            </div>
          </div>

          <div className="fm-grid">
            {managementMembers.map((member, index) => (
              <div className="fm-card" key={index}>

                {/* Quote mark */}
                <div className="fm-quote-icon">"</div>

                {/* Message */}
                <p className="fm-message">{member.message}</p>

                {/* Divider */}
                <div className="fm-divider" />

                {/* Author */}
                <div className="fm-author">

                  <div className="fm-author-info">
                    <h3 className="fm-name">{member.name}</h3>
                    <span className="fm-role">{member.designation}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Why Voora ── */}
      <section
        className="wv-section"
        style={{ backgroundImage: `url(${book3})` }}
        ref={whyRef}
      >
        <div className="wv-overlay" />

        <div className="wv-container">
          <div className="wv-layout">

            {/* Left */}
            <div className="wv-left">
              <div className="heading-main">
                <div data-reveal="true" className="active is-visible">

                  <h2 className="section-title-white">
                    Why choose <br className="br-only" />
                    <span className="accent why-voora">Voora?</span>
                  </h2>
                  <p className="text-white">Delivering quality, trust, and excellence through every project we create.</p>
                </div>
              </div>

              <div className="wv-content">
                <p>
                  At Voora, we are driven by an unwavering pursuit of excellence that
                  has defined our legacy over the past 30 years. We have transformed
                  Chennai's skyline with over 20 internationally acclaimed projects.
                </p>
                <p>
                  From IT parks along the OMR to residential apartments on the ECR
                  and luxurious bungalows in prime locations, each of our creations
                  stands as a testament to our commitment to quality and innovation.
                </p>
                <p>
                  By consistently exceeding expectations, Voora has earned the trust
                  and loyalty of thousands, cementing our reputation as one of
                  Chennai's most respected real estate developers.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="wv-right">
              <div className="wv-stats">
                <div className="wv-stat-card">
                  <h3>30+</h3>
                  <span>Years of Excellence</span>
                </div>
                <div className="wv-stat-card">
                  <h3>20+</h3>
                  <span>Landmark Projects</span>
                </div>
                <div className="wv-stat-card">
                  <h3>2000+</h3>
                  <span>Happy Families</span>
                </div>
                <div className="wv-stat-card">
                  <h3>2M+</h3>
                  <span>Sq.Ft Delivered</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="awards-section" ref={awardsRef}>
        <div className="awards-container">
          <div className="heading-main-center">
            <div data-reveal="true" className="active is-visible">

              <h2 className="section-title">
                Awards & <br className="br-only" />
                <span className="accent">Recognition</span>
              </h2>
              <p>Honoring our commitment to quality, trust, and outstanding project delivery.</p>
            </div>
          </div>

          <div className="awards-grid">
            {awards.map((award, index) => (
              <div className="award-card" key={index}>
                <div className="award-image">
                  <img src={award.image} alt={award.title} />
                </div>
                <div className="award-content">
                  <p>{award.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}