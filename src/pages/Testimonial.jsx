import VideoCarousel from "../components/VideoCarousel";
import { useEffect, useState, useRef, useCallback } from "react";
import "./Testimonial.css";
import ClientStories from "../components/ClientStories";
import CustomerTestimonials from "../components/CustomerTestimonials";
// import hero2 from '../assets/image/testimonialbanner.webp';
const hero2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787634566/Testimonials_Page_-_Hero_Banner_oe6fei.webp"
const heromobile = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787999957/Testimonials_ngrix7.jpg";

const shortsVideos1 = [
  "vilaYkwCONQ",
  "ESAD4lMGoow",
  "g2pu1TbGQ3I",
  "iy5gFvfzC90",
];

const videoTitles1 = [
  "Venkatesh MR",
  "Zainab Khuzema Raja",
  "Srinivaulu Kannan DR",
  "Murali Shankar MR",
];

const stopMasterAutoScroll = () => {
  if (masterTimerRef.current) {
    window.clearInterval(masterTimerRef.current);
    masterTimerRef.current = null;
  }
};
const startMasterAutoScroll = () => {
  const carousel = masterContainerRef.current;

  if (!carousel || masterTimerRef.current) return;

  masterTimerRef.current = window.setInterval(() => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const step = Math.max(carousel.clientWidth / 4, 260);

    if (carousel.scrollLeft >= maxScrollLeft - 1) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: step, behavior: "smooth" });
    }
  }, 1800);
};


export default function Testimonial() {


  /* ── Scroll to top on mount ── */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ══════════════════════════════════════════════════════
     VIDEO SLIDER — AUTO-SCROLL
     Scrolls the track slowly left; pauses on mouse hover.
  ══════════════════════════════════════════════════════ */
  const masterContainerRef = useRef(null);
  const masterTimerRef = useRef(null);

  useEffect(() => {
    const carousel = masterContainerRef.current;

    if (!carousel) return;

    masterTimerRef.current = setInterval(() => {
      const maxScrollLeft =
        carousel.scrollWidth - carousel.clientWidth;

      // Dynamically calculate the step width based on 2 cards
      const step = carousel.clientWidth / 2;

      if (carousel.scrollLeft < maxScrollLeft - 10) {
        carousel.scrollBy({
          left: step,
          behavior: "smooth",
        });
      } else {
        // Rewind to start when at the end
        carousel.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      }
    }, 4500);

    return () => {
      clearInterval(masterTimerRef.current);
    };
  }, []);

  /* ════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════ */
  return (
    <div className="testimonial-page">

      <section className="about-hero ts-hero-auto">
        <picture>
          <source media="(max-width: 768px)" srcSet={heromobile} />
          <img
            src={hero2}
            className="hero-bg-image testi-banner-img"
            alt="Testimonials"
          />
        </picture>
      </section>

      {/* ── Video Stories Section ── */}
      <section className="vs-section" id="video-stories">
        <div className="vs-container">

          {/* Left Content */}
          <div className="vs-info">
            <div className="vs-heading">
              <div className="heading-main">
                <div data-reveal="true" className="active is-visible">
                  <h2 className="section-title">
                    Experience Through
                    <br />
                    <span className="accent">Video Stories</span>
                  </h2>
                  <p className="vs-desc">
                    Explore meticulously crafted layouts designed to maximize
                    natural light, ventilation, functionality, and luxury living
                    experiences for modern families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="vs-gallery">
            <div
              className="vs-track shorts-track"
              ref={masterContainerRef}
              onMouseEnter={stopMasterAutoScroll}
              onMouseLeave={startMasterAutoScroll}
            >
              {shortsVideos1.map((id, index) => (
                <div className="vs-card" key={index}>
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0`}
                    title={`Short ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  <div className="vs-card-label">


                    <span className="vs-card-title">
                      {videoTitles1[index]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <ClientStories />
      <CustomerTestimonials />


    </div>
  );
}