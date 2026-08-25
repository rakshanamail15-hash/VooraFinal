import "./HeroCarousel.css";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroCarousel() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const shouldPause = window.scrollY > 50;
      if (videoRef.current) {
        if (shouldPause) {
          videoRef.current.pause();
        } else {
          // Play might fail if user hasn't interacted, catch it
          videoRef.current.play().catch(e => console.log(e));
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Navbar Area */}
      <div className="hero-navbar">
        {/* Navbar component already fixed here */}
      </div>

      {/* Banner Area */}
      <div className="hero-banner">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={false}
          speed={1100}
        >
          <SwiperSlide>
            <div className="slide">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/wdfwbagg/video/upload/v1786014537/landingVideo_io88dy.mp4"
                className="slide-image"
                autoPlay
                muted
                loop

                playsInline
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
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