import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './PonvanduSlider.css';
const seaponvandu = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917265/ChatGPT_Image_Jul_14__2026__02_09_22_PM-removebg-preview_gbzmrr.png';

import {
  FaSwimmingPool, FaDumbbell, FaTree, FaChild, FaFilm, FaGlassMartiniAlt,
  FaCouch, FaPeace, FaDice, FaLaptop, FaUsers, FaShieldAlt, FaWater, FaLeaf
} from 'react-icons/fa';
import { color } from 'framer-motion';

// const amenitiesData = [
//   { icon: <FaSwimmingPool />, label: "ROOFTOP INFINITY POOL" },
//   { icon: <FaDumbbell />, label: "SEA VIEW GYM" },
//   { icon: <FaTree />, label: "LANDSCAPED GARDENS" },
//   { icon: <FaChild />, label: "CHILDREN'S PLAY AREA" },
//   { icon: <FaFilm />, label: "OPEN THEATRE" },
//   { icon: <FaGlassMartiniAlt />, label: "RESTO BAR" },
//   { icon: <FaCouch />, label: "SKY LOUNGE DECK" },
//   { icon: <FaPeace />, label: "YOGA & MEDITATION ZONE" },
//   { icon: <FaDice />, label: "INDOOR GAMES" },
//   { icon: <FaLaptop />, label: "CO-WORKING SPACE" },
//   { icon: <FaUsers />, label: "MULTIPURPOSE HALL" },
//   { icon: <FaShieldAlt />, label: "24/7 SECURITY & CCTV" }
// ];

export default function PonvanduSlider() {
  const containerRef = useRef(null);

  // Scene Refs
  const s2Cloud1Ref = useRef(null);
  const s2Cloud2Ref = useRef(null);
  const s2ProductRef = useRef(null);
  const s2BadgeRef = useRef(null);
  const titleRef = useRef(null);

  // Amenities Strip Ref
  const amenitiesRef = useRef(null);

  const [isDay, setIsDay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDay(prev => !prev);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite scrolling removed per user request



      // 3D Rotating badge
      if (s2BadgeRef.current) {
        gsap.fromTo(s2BadgeRef.current,
          { rotationY: -40 },
          {
            rotationY: 40,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          }
        );
      }

      // Animate Elements on Load
      const targets = [s2ProductRef.current, s2Cloud1Ref.current, s2Cloud2Ref.current, s2BadgeRef.current].filter(Boolean);
      if (targets.length > 0) {
        gsap.fromTo(targets,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.15
          }
        );
      }

      // Title Animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { scale: 0.8, autoAlpha: 0, y: -40 },
          { scale: 1, autoAlpha: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.2 }
        );
      }

      // Amenities stagger animation
      if (amenitiesRef.current && amenitiesRef.current.children) {
        gsap.fromTo(amenitiesRef.current.children,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            stagger: 0.05,
            delay: 0.5
          }
        );
      }

      // Mouse/Touch Parallax Effect (dragin dragout tracking) for Clouds
      const handlePointerMove = (e) => {
        const { innerWidth, innerHeight } = window;

        // Handle both mouse and touch events
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        // Calculate position relative to center (-0.5 to 0.5)
        const xRatio = (clientX / innerWidth) - 0.5;
        const yRatio = (clientY / innerHeight) - 0.5;

        // Move clouds slightly away/toward cursor on X and Y
        if (s2Cloud1Ref.current) {
          gsap.to(s2Cloud1Ref.current, {
            x: xRatio * 40,
            y: yRatio * 30,
            duration: 1,
            ease: "power3.out"
          });
        }
        if (s2Cloud2Ref.current) {
          gsap.to(s2Cloud2Ref.current, {
            x: xRatio * 60, // Deeper parallax for Cloud 2
            y: yRatio * 50,
            duration: 1,
            ease: "power3.out"
          });
        }

        // Parallax for the Title
        if (titleRef.current) {
          gsap.to(titleRef.current, {
            x: xRatio * -30, // Moves slightly opposite for a nice 3D depth effect
            y: yRatio * -20,
            duration: 1,
            ease: "power3.out"
          });
        }
      };

      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("touchmove", handlePointerMove);

      return () => {
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("touchmove", handlePointerMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`ponvandu-slider-wrapper ${isDay ? 'theme-day' : 'theme-night'}`} ref={containerRef}>
      <div className="p-slide slide-2" style={{ visibility: 'visible', opacity: 1 }}>
        <div className="sun-icon"></div>
        <div className="stars-layer"></div>
        {/* ── Center Title ── */}
        <div className="p-center-title" ref={titleRef}>
          {/* <div className="p-hero-presents">PRESENTS</div>
          <h1 className="p-hero-main-title">
            <span style={{ color: '#d4af37' }}>ONE</span>
            <span style={{ color: '#0b1c2d' }}> SEA</span>
          </h1> */}
          <div className="p-hero-location">— ECR, CHENNAI —</div>
          <h2 className="p-hero-subtitle">
            TWO VIEWS.<br />
            ONE EXTRAORDINARY LIFE.
          </h2>
          <p className="p-hero-description">
            Wake up to the sea. Unwind by the backwaters.<br />
            Experience the best of both worlds.
          </p>
        </div>

        {/* ── Left Side Box (Sea View) ── */}
        <fieldset className="p-side-box p-side-box-left">
          <legend className="p-box-icon"><FaWater /></legend>
          <h3 className="p-box-title">SEA VIEW</h3>
          <p className="p-box-desc">ENDLESS BLUE.<br />LIMITLESS CALM.</p>
        </fieldset>

        {/* ── Right Side Box (Backwater View) ── */}
        <fieldset className="p-side-box p-side-box-right">
          <legend className="p-box-icon"><FaLeaf /></legend>
          <h3 className="p-box-title">BACKWATER VIEW</h3>
          <p className="p-box-desc">SERENE GREEN.<br />PURE SERENITY.</p>
        </fieldset>

        {/* Cloud 1 */}
        <div className="p-layer p-s2-cloud1" ref={s2Cloud1Ref}>
          <img src="https://ponvandu.in/media/revslider/PONVANDU/cloud-01.png" alt="Cloud" />
        </div>

        {/* Cloud 2 */}
        <div className="p-layer p-s2-cloud2" ref={s2Cloud2Ref}>
          <img src="https://ponvandu.in/media/revslider/PONVANDU/cloud-01.png" alt="Cloud" />
        </div>

        {/* Product Group */}
        <div className="p-layer p-s2-product" ref={s2ProductRef}>
          <img src={seaponvandu} alt="Product" />
        </div>

        {/* Rotating Badge (Currently Commented Out by User) */}
        {/* <div className="p-layer p-s2-badge" ref={s2BadgeRef}>
          <img src="https://ponvandu.in/media/revslider/PONVANDU/best-suitable-for.png" alt="Badge" />
        </div> */}

        {/* ── Amenities Strip ── */}
        {/* <div className="p-amenities-strip">
          <div className="p-amenities-grid" ref={amenitiesRef}>
            {amenitiesData.map((item, index) => (
              <div className="p-amenity-item" key={index}>
                <div className="p-amenity-icon">{item.icon}</div>
                <div className="p-amenity-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
