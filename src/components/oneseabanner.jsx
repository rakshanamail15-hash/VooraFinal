import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from "react-router-dom";
import './App.css'
import OverviewGridSection from './OverviewGridSection'
import AmenitiesSection from './AmenitiesSection'
import OneSea from './OneSea'
import Footer from './Footer'
const vooraLogo = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1786599824/Voora_logo_hd_white_dqx6xk.png'
const oneSeaLogo = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787312868/One-sea_logo_t1vvey.png'
const building = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787149905/Building_full_processed_oomdia.webp'
const cloudHero = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787151190/cloud_hero_bx8kmb.png'
const heroBg = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917272/Hero_bg_dqubou.jpg'
const enjoyImg1 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787313012/enjoy_img1_o8w7gb.webp';
const enjoyImg2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1786089149/enjoy_img2_gwpiek.webp';
const enjoyImg4 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787313060/enjoy_img4_lfxsfm.webp';
const bannerIcon1 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313233/banner-icons1_zt72c5.png";

const bannerIcon2 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313233/banner-icons2_zwizfv.png";

const bannerIcon3 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313233/banner-icons3_hts3hb.png";

const bannerIcon4 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313234/banner-icons4_zihc1p.png";

const bannerIcon5 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313234/banner-icons5_y8wzjj.png";

const bannerIcon6 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313234/banner-icons6_xyjjvv.png";

const aroundImg1 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313373/Around-img1_jzfw1q.webp";

const aroundImg2 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313373/Around-img2_mtcuic.webp";

const aroundImg3 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313373/Around-img3_ctvfzb.webp";

const aroundImg4 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313375/Around-img4_iwjewq.webp";

const aroundImg6 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313375/Around-img6_pch8j4.webp";

const aroundImg7 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313376/Around-img7_rgewyk.webp";

const aroundImg8 =
    "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313376/Around-img8_mrzop0.webp";


gsap.registerPlugin(useGSAP, ScrollTrigger)

const images = [
    { src: enjoyImg1, alt: "Room with chair" },
    { src: enjoyImg2, alt: "Living room with a view" },
    { src: enjoyImg4, alt: "Dining area" },
];

function oneseabanner() {
    const containerRef = useRef(null)
    const navbarRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const getPositionClass = (index) => {
        const diff = (index - activeIndex + images.length) % images.length;
        if (diff === 0) return "position-center";
        if (diff === 1) return "position-right";
        if (diff === images.length - 1) return "position-left";
        return "position-hidden";
    };
    const heroContentRef = useRef(null)
    const buildingsRef = useRef(null)
    const fogRef = useRef(null)
    const revealLogosRef = useRef(null)
    const featuresRef = useRef(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useGSAP(() => {
        gsap.from(".features-content", {
            scrollTrigger: {
                trigger: featuresRef.current,
                start: "top 80%",
            },
            y: 60,
            opacity: 0,
            duration: 1.8,
            ease: "power2.out"
        });
    }, { scope: featuresRef });

    useGSAP(() => {
        gsap.set(buildingsRef.current, { y: '25vh' })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=400%',
                scrub: 1.5,
                pin: true,
            }
        })

        tl.add('start', 0)

        tl.to(heroContentRef.current, {
            opacity: 0,
            y: '15vh',
            duration: 55,
            ease: 'power1.inOut'
        }, 'start')

        tl.add('phase2', 15)

        tl.to(buildingsRef.current, {
            scale: 2.5,
            y: '0vh',
            duration: 55,
            ease: 'power2.inOut'
        }, 'phase2')

        tl.to(buildingsRef.current, {
            opacity: 0,
            duration: 15,
            ease: 'power1.inOut'
        }, 'phase2+=45')

        tl.add('phase3', 55)

        tl.to(fogRef.current, {
            scale: 1.5,
            y: '-40vh',
            duration: 35,
            ease: 'power2.inOut'
        }, 'phase3')

        tl.add('phase4', 70)

        tl.fromTo(revealLogosRef.current, {
            opacity: 0,
            y: 50,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 20,
            pointerEvents: 'auto',
            ease: 'power3.out'
        }, 'phase4')

        tl.add('end', 90)
        tl.to({}, { duration: 10 }, 'end')

    }, { scope: containerRef })

    return (
        <>
            <header className="navbar" ref={navbarRef}>
                <div className="logo-left" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                    <img src={vooraLogo} alt="Voora" />
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="/" className="nav-link active">Home</a>
                    <a href="#overview" className="nav-link active">Overview</a>
                    <a href="#highlights" className="nav-link">Highlights</a>
                    <a href="#amenities" className="nav-link">Amenities</a>
                    <a href="#gallery" className="nav-link">Gallery</a>
                </div>
                <div className="nav-right">
                    <button className="contact-btn-new" onClick={() => document.querySelector('.onesea-book-section')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact us
                        <span className="btn-icon">
                            <svg width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </span>
                    </button>
                    <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            <div
                className="hero-container"
                ref={containerRef}
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <main className="hero-content" ref={heroContentRef}>
                    <h1 className="hero-title">Live Where the Sun Meets the Sea</h1>
                    <p className="hero-subtitle">
                        Sky-high 2 & 3 BHK sea-facing residences on ECR, Chennai where<br />
                        every sunrise begins at your window.
                    </p>
                    <button className="contact-btn" onClick={() => document.getElementById('book-visit')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Site Visit
                        <span className="btn-icons"><svg width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg></span>
                    </button>

                </main>

                <div className="buildings-container">
                    <img src={building} loading="lazy" alt="Buildings" className="buildings-img" ref={buildingsRef} />
                    <div className="fog-container">
                        <img src={cloudHero} loading="lazy" alt="Fog" className="fog-layer-hero" ref={fogRef} />
                    </div>
                </div>

                <div className="reveal-logos-container" ref={revealLogosRef}>
                    <img src={vooraLogo} alt="Voora Logo Reveal" className="reveal-logo-voora" />
                    <img src={oneSeaLogo} alt="One Sea Logo Reveal" className="reveal-logo" />
                </div>
            </div>

            <section className="features-section" ref={featuresRef}>
                <div className="features-container">

                    <div className="features-content">

                        <h2 className="overview-heading">
                            A Life Designed  <span className="highlight-text">Around the Sea</span>
                        </h2>

                        <p className="overview-description">
                            We design sea-facing residences with intelligent layouts,
                            premium craftsmanship, and interiors that bring the horizon
                            into every room.
                        </p>

                        <div className="features-tags-wrapper">
                            <div className="feature-tags marquee-track">
                                <span className="feature-tag"><img src={bannerIcon1} alt="icon" /> Sea-Facing Interiors</span>
                                <span className="feature-tag"><img src={bannerIcon2} alt="icon" /> 41-Storey Skyline Living</span>
                                <span className="feature-tag"><img src={bannerIcon3} alt="icon" /> 85% Open, Green Space</span>
                                <span className="feature-tag"><img src={bannerIcon4} alt="icon" /> 60,000 sq.ft Clubhouse</span>
                                <span className="feature-tag"><img src={bannerIcon5} alt="icon" /> 24/7 Gated Security</span>
                                <span className="feature-tag"><img src={bannerIcon6} alt="icon" /> High Appreciation, ECR</span>

                                <span className="feature-tag"><img src={bannerIcon1} alt="icon" /> Sea-Facing Interiors</span>
                                <span className="feature-tag"><img src={bannerIcon2} alt="icon" /> 41-Storey Skyline Living</span>
                                <span className="feature-tag"><img src={bannerIcon3} alt="icon" /> 85% Open, Green Space</span>
                                <span className="feature-tag"><img src={bannerIcon4} alt="icon" /> 60,000 sq.ft Clubhouse</span>
                                <span className="feature-tag"><img src={bannerIcon5} alt="icon" /> 24/7 Gated Security</span>
                                <span className="feature-tag"><img src={bannerIcon6} alt="icon" /> High Appreciation, ECR</span>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-wrapper">
                        <div className="gallery-row">
                            <div className="gallery-card large">
                                <img src={aroundImg1} alt="" />
                            </div>
                            <div className="gallery-card large">
                                <img src={aroundImg2} alt="" />
                            </div>
                            <div className="gallery-card large">
                                <img src={aroundImg3} alt="" />
                            </div>
                            <div className="gallery-card large">
                                <img src={aroundImg4} alt="" />
                            </div>
                            <div className="gallery-card large">
                                <img src={aroundImg6} alt="" />
                            </div>
                            <div className="gallery-card large">
                                <img src={aroundImg7} alt="" />
                            </div>
                            <div className="gallery-card large">
                                <img src={aroundImg8} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id="overview" className="overview-section">
                <div className="overview-images">
                    {images.map((img, index) => (
                        <div key={index} className={`img-wrapper ${getPositionClass(index)}`}>
                            <img src={img.src} alt={img.alt} className="overview-img" />
                        </div>
                    ))}
                </div>
                <div className="overview-text">
                    <div className="overview-label">
                        <span className="dot"></span> OVERVIEW
                    </div>
                    <h2 className="overview-heading">
                        Enjoy Every Sunrise <span className="highlight-text">Over the Sea</span>
                    </h2>
                    <p className="overview-description">
                        Perched along ECR's coastline at Kanathur, One Sea Residences brings four towers of sea-facing homes to life — just minutes from the city, with the sea always in view. Every residence is designed to frame the coastline, so the view stays part of everyday life, not just a weekend escape.
                    </p>
                </div>
            </section>
            <OverviewGridSection />
            <AmenitiesSection />
            {/* <AgastyaAmenitiesSection /> */}
            <OneSea />
            <Footer />
        </>
    )
}

export default oneseabanner
