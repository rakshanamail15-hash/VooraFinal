import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Services.css';
import {
  IcResidential,
  IcCommercial,
  IcLocation,
  IcConstruction,
} from "./Icons";

const services = [
  {
    icon: <IcResidential aria-hidden="true" />,
    title: 'Residential Construction',
    text: 'Design and build premium villas, apartments, and custom homes tailored to modern living.'
  },
  {
    icon: <IcCommercial aria-hidden="true" />,
    title: 'Commercial Projects',
    text: 'Smartly planned office spaces, retail outlets, and business complexes built for performance.'
  },
  {
    icon: <IcLocation aria-hidden="true" />,
    title: 'Plot Development',
    text: 'Well-planned plots with infrastructure and clear documentation for future investment.'
  },
  {
    icon: <IcConstruction aria-hidden="true" />,
    title: 'Construction Services',
    text: 'High-quality construction with strong materials, modern techniques, and timely delivery.'
  }
];

export default function Services() {

  const [typedText, setTypedText] = useState("");
  

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section services" id="services">

      {/* ===== Background only ===== */}
      <div className="services-bg" aria-hidden="true">
        <div className="services-bg-ambient" />
        <div className="services-bg-glow" />
        <div className="services-bg-grid" />
        <div className="services-bg-scan" />
      </div>


      <div className="container">

        <div className="services-head">
          {/* <div data-reveal>
            <span className="eyebrow typing-text" data-reveal="left">
              {typedText}
              <span className="cursor">|</span>
            </span>
            <h2 className="section-title">
              Our Services <br className="br-only" />
              <span className="thin">End to End Construction</span>{" "}
              <span className="accent">Solution</span>
            </h2>
          </div> */}
          <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
              Complete Construction <br className="br-only" />
                  <span className="accent"> Solution</span>
                </h2>
                <p>Managing every aspect of your project with quality, precision, and expertise.</p>
              </div>

          <Link to="/services" className="btn btn-outline" data-reveal="right">
            View All Services →
          </Link>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`service-card d${i + 1}`}
              data-reveal="up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link to="/services" className="service-link">
                Learn More <span>→</span>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}