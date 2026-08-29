import "./HeroCarousel.css";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroCarousel({ image, mobileImage, video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!video) return;
    const handleScroll = () => {
      const shouldPause = window.scrollY > 50;
      if (videoRef.current) {
        if (shouldPause) {
          videoRef.current.pause();
        } else {
          // Play might fail if user hasn't interacted, catch it
          videoRef.current.play().catch((e) => console.log(e));
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [video]);

  return (
    <section className="hero-section">
      {/* Navbar Area */}
      <div className="hero-navbar">
        {/* Navbar component already fixed here */}
      </div>

      {/* Banner Area */}
      <div className={`hero-banner ${mobileImage ? 'hero-banner--mobile-auto' : ''}`}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={false}
          speed={1100}
        >
          <SwiperSlide>
            <div className="slide">
              {video ? (
                <video
                  ref={videoRef}
                  src={video}
                  className="slide-image"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <picture>
                  {mobileImage && <source media="(max-width: 768px)" srcSet={mobileImage} />}
                  <img
                    src={image || "https://res.cloudinary.com/wdfwbagg/image/upload/v1787836279/Agastya_uap2tb.jpg"}
                    className="slide-image"
                    alt="Banner"
                  />
                </picture>
              )}
              <div className="slide-overlay" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Luxury Curved Statistics Ribbon */}
        <div
          className="luxury-stats-ribbon"
          aria-label="Company statistics"
        >
        </div>
      </div>
    </section>
  );
}