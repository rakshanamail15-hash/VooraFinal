import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './GsapHeroBanner.css';

export default function GsapHeroBanner({ mainImage, secondaryImage }) {
  const containerRef = useRef(null);
  const mainImageRef = useRef(null);
  const secondaryImageRef = useRef(null);
  const deco1Ref = useRef(null);
  const deco2Ref = useRef(null);
  const deco3Ref = useRef(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Initial Mount Animation
      gsap.fromTo(
        [mainImageRef.current, secondaryImageRef.current, deco1Ref.current, deco2Ref.current, deco3Ref.current],
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1
        }
      );

      if (!isReducedMotion) {
        // 2. Infinite Continuous Float & Rotate
        gsap.to(mainImageRef.current, {
          y: 12,
          rotation: 2,
          scale: 1.03,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Start from -12 for yoyo effect
        gsap.set(mainImageRef.current, { y: -12, rotation: -2 });

        gsap.to(secondaryImageRef.current, {
          y: -12,
          rotation: -2,
          scale: 1.02,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.5
        });
        gsap.set(secondaryImageRef.current, { y: 12, rotation: 2 });

        gsap.to(deco1Ref.current, { y: -20, rotation: 15, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(deco2Ref.current, { y: 15, x: 10, rotation: -10, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(deco3Ref.current, { y: -10, x: -15, rotation: 5, duration: 4.5, ease: "sine.inOut", yoyo: true, repeat: -1 });

        // 3. Mouse Parallax Effect
        const xToMain = gsap.quickTo(mainImageRef.current, "x", { duration: 0.5, ease: "power3" });
        const yToMain = gsap.quickTo(mainImageRef.current, "y", { duration: 0.5, ease: "power3" });

        const xToSecondary = gsap.quickTo(secondaryImageRef.current, "x", { duration: 0.8, ease: "power3" });
        const yToSecondary = gsap.quickTo(secondaryImageRef.current, "y", { duration: 0.8, ease: "power3" });

        const xToDeco = gsap.quickTo([deco1Ref.current, deco2Ref.current, deco3Ref.current], "x", { duration: 1, ease: "power3" });
        const yToDeco = gsap.quickTo([deco1Ref.current, deco2Ref.current, deco3Ref.current], "y", { duration: 1, ease: "power3" });

        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          const deltaX = (clientX - centerX) / centerX;
          const deltaY = (clientY - centerY) / centerY;

          xToMain(deltaX * 20);
          yToMain(deltaY * 20);

          xToSecondary(deltaX * 35);
          yToSecondary(deltaY * 35);

          xToDeco(deltaX * -15);
          yToDeco(deltaY * -15);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="gsap-hero-container" ref={containerRef}>

      <div className="gsap-deco gsap-deco-1" ref={deco1Ref}></div>
      <div className="gsap-deco gsap-deco-2" ref={deco2Ref}></div>
      <div className="gsap-deco gsap-deco-3" ref={deco3Ref}></div>

      <div className="gsap-hero-images">
        <div className="gsap-image-wrapper main-layer" ref={mainImageRef}>
          <img src={mainImage} alt="Hero Main" />
        </div>

        <div className="gsap-image-wrapper secondary-layer" ref={secondaryImageRef}>
          <img src={secondaryImage} alt="Hero Overlay" />
        </div>
      </div>

    </div>
  );
}
