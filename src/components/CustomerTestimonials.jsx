import { useState, useEffect } from "react";
import "./CustomerTestimonials.css";
const user = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/user_z37p18.png";

const reviews = [
  {
    text: "ARKHE transformed our vision into a breathtaking reality. Every detail was executed with craftsmanship we had never seen before.",
    name: "Rajesh Sharma",
    role: "Villa Owner",
    image: user,
  },
  {
    text: "From blueprint to handover, the team was meticulous and transparent. Our office complex was delivered ahead of schedule.",
    name: "Priya Nair",
    role: "CEO, Novatech",
    image: user,
  },
  {
    text: "The interiors exceeded our expectations. Beautiful, functional and finished to the highest standard imaginable.",
    name: "Arjun Mehta",
    role: "Homeowner",
    image: user,
  },
  {
    text: "Professional, reliable and genuinely passionate about design. ARKHE is now our go-to construction partner.",
    name: "Sneha Kapoor",
    role: "Property Developer",
    image: user,
  },
  {
    text: "They listened, advised and built exactly what we dreamed of — on budget and stress-free.",
    name: "Vikram Reddy",
    role: "Restaurant Owner",
    image: user,
  },
];

export default function CustomerTestimonials() {
  const [start, setStart] = useState(0);


  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  const [perView, setPerView] = useState(
    window.innerWidth <= 768 ? 1 : 2
  );

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setPerView(window.innerWidth <= 768 ? 1 : 2);
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const maxStart = reviews.length - perView;

  return (

    <section className="testimonials" id="insights">

      {/* ===== Elegant floating-geometric background ===== */}
      <div className="cp-bg" aria-hidden="true">
        <div className="cp-bg-mesh" />
        <div className="cp-bg-orb cp-bg-orb-1" />
        <div className="cp-bg-orb cp-bg-orb-2" />
        <div className="cp-bg-orb cp-bg-orb-3" />
        <div className="cp-bg-shapes">
          <span className="cp-shape cp-shape-1" />
          <span className="cp-shape cp-shape-2" />
          <span className="cp-shape cp-shape-3" />
          <span className="cp-shape cp-shape-4" />
          <span className="cp-shape cp-shape-5" />
        </div>
        <div className="cp-bg-lines">
          <span className="cp-line cp-line-1" />
          <span className="cp-line cp-line-2" />
        </div>
      </div>

      <div className="container">

        <div className="testimonials-wrapper">

          {/* LEFT SIDE */}
          <div className="ts-left">
            {/* <div className="ts-head"> */}

            <h2 className="section-title">
              What Our  <br className="br-only" />
              <span className="accent">Clients Say</span>
            </h2>

            <p>
              Real stories from the families and businesses who chose us —
              sharing their experiences of craftsmanship, trust, and timeless living.
            </p>

            {/* </div> */}
          </div>

          {/* RIGHT SIDE */}
          <div className="ts-right">

            <div className="ts-viewport">
              <div
                className="ts-track"
                style={{
                  display: "flex",
                  width: `${(reviews.length / perView) * 100}%`,
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: "transform",
                  transform: `translateX(-${(start / reviews.length) * 100}%)`,
                }}
              >
                {reviews.map((r) => (
                  <div
                    className="ts-cell"
                    key={r.name}
                    style={{
                      width: `${100 / reviews.length}%`,
                      flex: `0 0 ${100 / reviews.length}%`,
                      boxSizing: "border-box",
                      padding: "0 12px",
                      margin: 0
                    }}
                  >
                    <article className="ts-card">

                      <div className="ts-person">
                        <span className="ts-avatar">
                          <img
                            src={r.image}
                            alt={r.name}
                            loading="lazy"
                            decoding="async"
                          />
                        </span>

                        <div className="ts-person-meta">
                          <strong>{r.name}</strong>
                          <span>{r.role}</span>
                        </div>
                      </div>

                      <div className="ts-stars">
                        ★★★★★
                      </div>

                      <p>{r.text}</p>

                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="ts-dots">
              <button
                onClick={prev}
                disabled={start === 0}
              >
                ‹
              </button>

              {Array.from({ length: maxStart + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`dot ${start === i ? "active" : ""}`}
                  onClick={() => setStart(i)}
                />
              ))}

              <button
                onClick={next}
                disabled={start === maxStart}
              >
                ›
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}