import { useState, useEffect, useRef, forwardRef } from 'react';
import './onesea.css';
import {
    FiArrowLeft,
    FiArrowRight,
    FiStar,
    FiPlus,
} from 'react-icons/fi';

// Image imports
import image1 from './assets/frame1 (2).png';
import frame2 from './assets/frame3.png';
import frame4 from './assets/frame4.png';
const frame5 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787208944/westframe_jdbk12.png';
import bannerIcon1 from './assets/banner-icons1.png'
import bannerIcon2 from './assets/banner-icons2.png'
import bannerIcon3 from './assets/banner-icons3.png'
import bannerIcon4 from './assets/banner-icons4.png'
import bannerIcon5 from './assets/banner-icons5.png'
import bannerIcon6 from './assets/banner-icons6.png'
import whyIcon1 from './assets/icon1.png'
import whyIcon2 from './assets/icon2.png'
import whyIcon3 from './assets/icon3.png'
import one1 from './assets/ico1.png'
import one2 from './assets/ico2.png'
import one3 from './assets/ico3.png'
import one4 from './assets/ico4.png'
import one5 from './assets/ico5.png'
import one6 from './assets/ico6.png'
import one7 from './assets/ico1.png'
import one8 from './assets/ico8.png'
import one9 from './assets/ico9.png'
import one10 from './assets/ico10.png'
import one11 from './assets/ico11.png'
import one12 from './assets/ico12.png'
// import viodeo2 from './assets/video2.png';
// import video3 from './assets/video3.png';
import BookVisit from './assets/Book.png';
// import Trust from './assets/Container.png';
const Trust = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917317/one1_wkg7xs.jpg"; // Fallback URL
import oneseavideo1 from './Video/oneseavideo1.mp4';
import image1_2 from './assets/map.png';
const image2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787206910/map2_jhxy5h.webp';
import image3 from './assets/frame5.png';
import faq1 from './assets/faq1.png';
import faq2 from './assets/faq2.png';
import faq3 from './assets/Around-img8.webp';
import cardCirclesImg from './assets/curveup.svg';
import cardCirclesImgdown from './assets/curvedown.svg';
import Amenities_img1 from './assets/Amenities_img1.webp';
import Amenities_img2 from './assets/Amenities_img2.webp';
import Amenities_img3 from './assets/Amenities_img3.webp';
import Amenities_img4 from './assets/Amenities_img4.webp';
import Amenities_img6 from './assets/Amenities_img6.webp';
import Amenities_img8 from './assets/Amenities_img8.webp';
const Amenities_img9 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787150686/Amenities_img9_pufqli.webp';
import Amenities_img10 from './assets/Amenities_img10.webp';
import Amenities_img12 from './assets/Amenities_img12.webp';
const Built_img1 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787219033/Built-img1_nan12l.webp';
const Built_img2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787224714/Built-img2_gtmiqx.webp';
const Built_img3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787151314/Built-img3_azmwv0.webp';
const Built_img4 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787145271/Built-img4_fknned.webp';
import Built_img5 from './assets/Built-img5.webp';
import Built_img6 from './assets/Built-img6.webp';
import oneseaimages1 from "./assets/oneseaimages1.webp"
const oneseaimages2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787224297/oneseaimages2_v4rtkf.webp"
import oneseaimages3 from "./assets/oneseaimages3.webp"
const oneseaimages4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787150169/oneseaimages4_nljz6o.jpg"
import oneseaimages5 from "./assets/oneseaimages5.webp"

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import thumb from "./assets/thumb.jpeg";
import thumb2 from "./assets/thumb2.jpeg";
import thumb3 from "./assets/thumb3.jpeg";
import thumb4 from "./assets/thumb4.jpeg";
import thumb5 from "./assets/thumb5.jpeg";
import thumb6 from "./assets/thumb6.jpeg";
import avatar1 from "./assets/avatar1.jpeg";
import avatar2 from "./assets/avatar2.jpeg";
import avatar3 from "./assets/avatar3.jpeg";
import avatar4 from "./assets/avatar4.jpeg";

const galleryImages = [
    Amenities_img1,
    Amenities_img2,
    Amenities_img3,
    Amenities_img4,
    Amenities_img6,
    Amenities_img8,
    Amenities_img9,
    Amenities_img10,
    Amenities_img12,
    Built_img1,
    Built_img2,
    Built_img3,
    Built_img4,
    Built_img5,
    Built_img6,
    oneseaimages1,
    oneseaimages2,
    oneseaimages3,
    oneseaimages4,
    oneseaimages5,
];

const cn = (...classes) =>
    classes.filter(Boolean).join(' ');

const specifications = [
    {
        title: 'Sustainable Living',
        icon: <img src={one1} alt="Sustainable Living" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'RCC framed structure engineered for seismic safety, with fire-rated common areas and 24/7 CCTV surveillance.',
    },
    {
        title: 'Electrical Services',
        icon: <img src={one2} alt="Electrical Services" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'Solar-powered common areas, concealed copper wiring, and dedicated transformers with RMU units for every tower.',
    },
    {
        title: 'Flooring',
        icon: <img src={one3} alt="Flooring" style={{ width: '100%', height: '60%', objectFit: 'contain' }} />,
        desc: 'Premium vitrified tiles in living spaces and bedrooms, with anti-skid flooring in toilets, utility, and balcony areas.',
    },
    {
        title: 'Doors & Windows',
        icon: <img src={one4} alt="Doors & Windows" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'Polished wood-frame doors with secure digital locks, paired with UPVC windows for insulation and weather protection.',
    },
    {
        title: 'Kitchen & Sanitary Fittings',
        icon: <img src={one5} alt="Kitchen & Sanitary Fittings" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'Modular kitchen provisions with granite countertops, and premium CP fittings from trusted sanitaryware brands.',
    },
    {
        title: 'Painting & Finishes',
        icon: <img src={one6} alt="Painting & Finishes" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'Weatherproof exterior paint and premium emulsion finishes inside every home, built to stay fresh for years.',
    },
    {
        title: 'Structure',
        icon: <img src={one7} alt="Sustainable Living1" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'RCC framed structure engineered for Seismic Zone III, with 165–200mm outer walls built for lasting durability.',
    },
    {
        title: 'Plumbing Fittings',
        icon: <img src={one8} alt="Electrical Services1" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'Jaguar or equivalent CP fittings and floor-mounted EWCs, with granite-countertop washbasins in every toilet'
    },
    {
        title: 'Wall Finish',
        icon: <img src={one9} alt="Flooring" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'Premium vitrified tiles in living spaces and bedrooms, with anti-skid flooring in toilets, utility, and balcony areas.',
    },
    {
        title: 'Firefighting Services',
        icon: <img src={one10} alt="Doors & Windows" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'Sprinklers, smoke detectors, and fire hydrants across every apartment, corridor, and dedicated refuge floor.',
    },
    {
        title: 'Joineries',
        icon: <img src={one11} alt="Kitchen & Sanitary Fittings" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: 'UPVC sliding windows with toughened glass and granite sills throughout, plus ventilated UPVC toilets with exhaust and ODU access.',
    },
    {
        title: 'Common Facilities',
        icon: <img src={one12} alt="Painting & Finishes" style={{ width: '60%', height: '100%', objectFit: 'contain' }} />,
        desc: '24/7 CCTV, EV charging points, automated garbage chutes, and full sewage treatment for a self-sufficient community.',
    },
];

const legacyProperties = [
    { title: 'Voora Onesea', path: '/' },
    { title: 'Voora Agastya', path: '/agastya' },
    { title: 'Voora Highway Haven', path: '/highway' },
    { title: "Voora Ocean'27", path: '#' },
    { title: 'Voora Westside', path: '#' },
];

const legacyCards = [
    {
        name: 'Voora One Sea',
        location: 'Kanathur, Chennai',
        image: frame4,
        className: 'legacy-card-1',
    },
    {
        name: 'Voora Agastya',
        location: 'Tondiarpet, Chennai',
        image: frame2,
        className: 'legacy-card-5', // Top Center - matches 01
    },
    {
        name: 'Voora Highway Haven',
        location: 'Panapakkam, Kanchipuram',
        image: image3,
        className: 'legacy-card-2', // Middle Left - matches 02
    },
    {
        name: 'Voora Oceans 27 ',
        location: 'Chennai',
        image: image1,
        className: 'legacy-card-3', // Bottom Center - matches 03
    },
    {
        name: 'Voora WestSite',
        location: 'Chennai',
        image: frame5,
        className: 'legacy-card-4', // Bottom Right - matches 04
    },
];

function LegacyCard({
    card,
    index
}) {
    return (
        <div className={`onesea-legacy-card ${card.className}`}>
            <img
                src={card.image}
                className="onesea-legacy-image"
                alt={card.name || 'Legacy Project'}
            />
            {card.name && (
                <div className="onesea-legacy-caption">
                    <h4>{card.name}</h4>
                    <p>{card.location}</p>
                </div>
            )}
        </div>
    );
}

const CylinderCarousel = forwardRef(
    (
        {
            images,
            className,
            containerClassName,
            cardClassName,
            animationDuration = 32,
            cardWidth = 250,
            animate = true,
            ...props
        },
        ref,
    ) => {
        const [currentCardWidth, setCurrentCardWidth] = useState(cardWidth);

        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth <= 425) {
                    setCurrentCardWidth(180);
                } else if (window.innerWidth <= 768) {
                    setCurrentCardWidth(260);
                } else {
                    setCurrentCardWidth(cardWidth);
                }
            };

            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [cardWidth]);

        const N = images.length;
        const anglePerCard = 360 / N; // degrees
        // Compute the cylinder radius in JS instead of relying on CSS calc()/tan(),
        // which some browsers/renderers don't support inside transform values.
        const halfAngleRad = (anglePerCard * Math.PI) / 360; // (anglePerCard/2) in radians
        const radius =
            (1.08 * (0.5 * currentCardWidth + 7)) / (Math.tan(halfAngleRad) || 0.0001);

        const customStyle = {
            '--n': N,
            '--w': `${currentCardWidth}px`,
            '--anim-dur': `${animationDuration}s`,
        };

        return (
            <div
                ref={ref}
                className={cn('w-full h-full', className)}
                style={{
                    perspective: '65em',
                    display: 'grid',
                    placeItems: 'center',
                    overflow: 'hidden',
                }}
                {...props}
            >
                <div
                    className={containerClassName}
                    style={{
                        ...customStyle,
                        transformStyle: 'preserve-3d',
                        animation: animate && animationDuration > 0 ? 'ry var(--anim-dur) linear infinite' : 'none',
                        display: 'grid',
                        placeItems: 'center',
                    }}
                >
                    <style>
                        {`
              @keyframes ry {
                to { transform: rotateY(1turn); }
              }
            `}
                    </style>

                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt || `Carousel image ${i}`}
                            className={cardClassName}
                            style={
                                {
                                    width: 'var(--w)',
                                    aspectRatio: '4/5',
                                    gridArea: '1/1',
                                    backfaceVisibility: 'hidden',
                                    borderRadius: '1rem',
                                    objectFit: 'cover',
                                    transform: `rotateY(${i * anglePerCard}deg) translateZ(-${radius}px)`,
                                }
                            }
                        />
                    ))}
                </div>
            </div>
        );
    },
);
CylinderCarousel.displayName = 'CylinderCarousel';

function LegacySection() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            } else {
                setInView(false);
            }
        }, { threshold: 0.15 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="legacy" className="onesea-legacy" ref={sectionRef}>
            <div className="onesea-legacy-container">
                <div className="onesea-legacy-left">
                    <h4 className="fp-eyebrow">MORE BY VOORA</h4>
                    <h2 className="overview-heading">
                        A legacy built <span className="highlight-text">across the city</span>
                    </h2>
                    <p className='overview-description'>
                        Explore other Voora addresses across Chennai, each built
                        <br />
                        on the same promise of quality, trust, and lasting value.
                    </p>

                    <ul className="onesea-legacy-list">
                        {legacyProperties.map((prop, i) => (
                            <li
                                key={i}
                                className="onesea-legacy-item"
                                onClick={() => window.location.href = prop.path}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="onesea-legacy-num">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="onesea-legacy-name">{prop.title}</span>
                                <button className="onesea-legacy-arrow" aria-label="View">
                                    <span className="btn-icons"><svg width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`onesea-legacy-right ${inView ? "in-view" : ""}`}>
                    {legacyCards.map((card, i) => (
                        <LegacyCard key={i} card={card} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const stories = [
        {
            id: 1,
            videoId: "ESAD4lMGoow",
            name: "Rajesh Sharma",
            label: "Client Review",
            image: thumb,
        },
        {
            id: 2,
            videoId: 'Id3OAOGsPIk',
            name: 'Priya Nair',
            label: 'Client Review',
            image: thumb2,
        },
        {
            id: 3,
            videoId: 'ocUX26KqlIQ',
            name: 'Arjun Mehta',
            label: 'Client Review',
            image: thumb3,
        },
        {
            id: 4,
            videoId: 'RWd1JyTms6A',
            name: 'Sneha Kapoor',
            label: 'Client Review',
            image: thumb4,
        },
        {
            id: 5,
            videoId: 'Im58BnXNUpY',
            name: 'Vikram Reddy',
            label: 'Client Review',
            image: thumb5,
        },
        {
            id: 6,
            videoId: 'iy5gFvfzC90',
            name: 'Karthik Iyer',
            label: 'Client Review',
            image: thumb6,
        },
    ];
    const sliderRef = useRef(null);
    const isHoveredRef = useRef(false);

    useEffect(() => {
        let animationFrameId;

        const scrollLoop = () => {
            if (sliderRef.current && !isHoveredRef.current) {
                sliderRef.current.scrollLeft += 0.5; // Controls the slow running speed

                // Loop back seamlessly when reaching the end
                if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth - 1) {
                    sliderRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scrollLoop);
        };

        animationFrameId = requestAnimationFrame(scrollLoop);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="onesea-testimonials-section">
            <div className="onesea-testimonials-container">
                <header className="onesea-testimonials-header">
                    <h4 className="fp-eyebrow">TRUSTED BY FAMILIES</h4>
                    <h2 className="overview-heading">
                        Hear from <span className="highlight-text">the User</span>
                    </h2>
                    <p className="overview-description">
                        Hear directly from the families who trusted Voora to build their
                        home
                        <br />
                        real stories from our completed communities across Chennai
                    </p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {/* TOP TRACK: Smooth scrolling video cards */}
                    <div
                        ref={sliderRef}
                        onMouseEnter={() => { isHoveredRef.current = true; }}
                        onMouseLeave={() => { isHoveredRef.current = false; }}
                        style={{
                            display: 'flex',
                            overflowX: 'hidden',
                            gap: '30px',
                            paddingBottom: '10px'
                        }}
                    >
                        {stories.map((item) => (
                            <div
                                className="onesea-video-card"
                                key={item.id}
                                style={{ flex: '0 0 calc(25% - 22.5px)', cursor: 'pointer' }}
                                onClick={() => setSelectedVideo(item.videoId)}
                            >
                                <div className="onesea-video-thumbnail" style={{ padding: 0 }}>
                                    <img
                                        src={item.image || `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                                        alt={item.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                                    />
                                    <div className="onesea-video-play">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                                <h3 className="onesea-video-name">{item.name}</h3>
                                <p className="onesea-video-role">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* BOTTOM TRACK: Static stat and image cards */}
                    <div className="onesea-testimonials-grid" style={{ rowGap: '0' }}>

                        <div className="onesea-stat-card">
                            <img
                                src={cardCirclesImgdown}
                                alt=""
                                className="onesea-stat-curve"
                            />
                            <div className="onesea-stat-stars-row">
                                <div className="onesea-avatars">
                                    <img src={avatar1} className="onesea-avatar" alt="Avatar 1" style={{ objectFit: 'cover' }} />
                                    <img src={avatar2} className="onesea-avatar" alt="Avatar 2" style={{ objectFit: 'cover' }} />
                                    <img src={avatar3} className="onesea-avatar" alt="Avatar 3" style={{ objectFit: 'cover' }} />
                                    <img src={avatar4} className="onesea-avatar" alt="Avatar 4" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="onesea-stars">
                                    <FiStar fill="currentColor" />
                                    <FiStar fill="currentColor" />
                                    <FiStar fill="currentColor" />
                                    <FiStar fill="currentColor" />
                                    <FiStar fill="currentColor" />
                                </div>
                            </div>
                            <h2 className="onesea-stat-number">4.9/5.0</h2>
                            <p className="onesea-stat-desc">
                                Rated by 500+ homeowners across Voora's completed communities
                            </p>
                        </div>

                        <div className="onesea-stat-card">
                            <img
                                src={cardCirclesImgdown}
                                alt=""
                                className="onesea-stat-curve"
                            />
                            <p className="onesea-stat-desc-top">
                                Homebuyers who'd recommend Voora to family or friends
                            </p>
                            <h2 className="onesea-stat-number large">92%</h2>
                        </div>

                        <div className="onesea-image-card">
                            <img src={Trust} alt="Voora Oceans 2 Community" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Popup */}
            {selectedVideo && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex',
                    justifyContent: 'center', alignItems: 'center'
                }} onClick={() => setSelectedVideo(null)}>
                    <div style={{ width: '90%', maxWidth: '800px', aspectRatio: '16/9', position: 'relative' }}>
                        <button style={{
                            position: 'absolute', top: '-40px', right: '0', background: 'transparent',
                            color: '#ffffff', border: 'none', fontSize: '30px', cursor: 'pointer'
                        }} onClick={() => setSelectedVideo(null)} aria-label="Close">✕</button>

                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                            title="Testimonial Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: 'Where is Voora One Sea located?', answer: "Voora One Sea is a sea-facing residential tower on East Coast Road (ECR) at Kanathur, South Chennai — close to the OMR IT corridor, with easy access to Sholinganallur, Chennai's key business districts, and the airport." },
        { question: 'What apartment configurations are available?', answer: "The project offers spacious 2 & 3 BHK homes, ranging from approximately 1,112 to 1,584 sq. ft., designed to suit families of different sizes." },
        { question: 'What makes Voora One Sea unique in Chennai?', answer: "It's the first project in the city to offer both sea and backwater views, set in the tallest tower on ECR at 41 floors — and the only development in the area with its own dedicated sea-view café." },
        { question: 'What amenities can residents expect?', answer: "Over 40 world-class amenities, including a 60,000 sq. ft. clubhouse, a one-acre natural lake within the community, and smart home integration in every unit." },
        { question: 'How environmentally sustainable is the community?', answer: "Voora One Sea is designed as a 100% eco-sensitive community with over 1,000 trees, water conservation systems, energy-efficient design, and structured waste management." },
        { question: 'Why choose a Voora project on ECR?', answer: "With over 30 years in Chennai real estate, Voora brings a track record of timely delivery and construction quality to one of the city's most sought-after coastal addresses." },
    ];

    return (
        <section id="faq" className="onesea-faq-section">
            <div className="onesea-faq-container">
                <div className="onesea-faq-left">
                    <h4 className="fp-eyebrow">FAQ</h4>
                    <h2 className="overview-heading">
                        Frequently Asked <span className="highlight-text">Questions</span>
                    </h2>

                    <div className="onesea-faq-image-box">
                        <div className="onesea-faq-img-col">
                            <img src={faq1} className="onesea-faq-img-small" alt="" />
                            <img src={faq2} className="onesea-faq-img-small" alt="" />
                        </div>
                        <div className="onesea-faq-img-col">
                            <img src={faq3} className="onesea-faq-img-tall" alt="" />
                        </div>
                    </div>
                </div>

                <div className="onesea-faq-right">
                    <div className="onesea-faq-list">
                        {faqs.map((q, i) => (
                            <div
                                key={i}
                                className="onesea-faq-item"
                                style={{ flexDirection: 'column', alignItems: 'flex-start' }}
                                onClick={() => toggleFAQ(i)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                    <span>{q.question}</span>
                                    <FiPlus
                                        className="onesea-faq-icon"
                                        style={{
                                            transform: openIndex === i ? 'rotate(45deg)' : 'none',
                                        }}
                                    />
                                </div>
                                {openIndex === i && (
                                    <div className="onesea-faq-answer" style={{ marginTop: '10px', color: '#61656e', fontSize: '14px', lineHeight: '1.5', fontFamily: 'Inter, sans-serif' }}>
                                        {q.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function BookVisitSection() {
    return (
        <section id="book-visit" className="onesea-book-section">
            <div className="onesea-book-wrapper">
                <div className="onesea-book-header">
                    <h4 className="fp-eyebrow">BOOK A VISIT</h4>
                    <h2 className="overview-heading">
                        Let's Plan Your <span className="highlight-text">Site Visit</span>
                    </h2>
                    <p className="overview-description">
                        Whether you're exploring floor plans or ready to see it in person,
                        our team
                        <br />
                        will guide you through every step of finding your home by the sea.
                    </p>
                </div>
                <div className="onesea-book-container">
                    <div className="onesea-book-left">
                        <div className="onesea-book-image-card">
                            <img src={BookVisit} className="onesea-book-bg" alt="" />
                        </div>
                    </div>
                    <div className="onesea-book-right">
                        <form className="onesea-book-form">
                            <label className="onesea-form-label">Name</label>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="onesea-form-input"
                                />
                            </div>

                            <label className="onesea-form-label">Email Address</label>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="onesea-form-input"
                                />
                            </div>

                            <label className="onesea-form-label">Mobile Number</label>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="onesea-form-input"
                                />
                            </div>

                            <label className="onesea-form-label">Preferred Visit Date</label>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Preferred Visit Date"
                                    className="onesea-form-input"
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                />
                            </div>

                            <label className="onesea-form-label">Message (optional)</label>
                            <div className="form-group">
                                <textarea
                                    placeholder=""
                                    className="onesea-form-input textArea"
                                ></textarea>
                            </div>

                            <button type="button" className="onesea-submit-btn">
                                Book Your Site Visit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyOneSeaSection() {
    return (
        <section className="onesea-why-section">
            <div className="onesea-why-container">
                <div className="onesea-why-left">
                    {/* <h2 className="onesea-why-heading">Why One Sea</h2> */}
                    <h2 className="overview-heading">
                        <span className="highlight-text">Why One Sea</span>
                    </h2>
                    <p className="overview-description">
                        The sea shouldn't be a weekend escape. It should be part of your
                        everyday life. That's the idea behind every residence at One Sea.
                    </p>
                    <div className="onesea-why-image-card" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <video
                            src={oneseavideo1}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ borderRadius: '16px', maxWidth: '572px', height: '406px', width: '100%', objectFit: 'cover', display: 'block', margin: '0 auto' }}
                        />
                    </div>
                </div>
                <div className="onesea-why-right">
                    <div className="onesea-feature-card">
                        <div className="onesea-feature-icon">
                            <img src={whyIcon1} alt="Sea-Facing Living" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                        </div>
                        <div className="onesea-feature-text">
                            <h3>Sea-Facing Living</h3>
                            <p >
                                Every home is oriented to frame uninterrupted views of the sea
                                and backwaters — from your morning coffee to the evening tide.
                            </p>
                        </div>
                    </div>
                    <div className="onesea-feature-card">
                        <div className="onesea-feature-icon">
                            <img src={whyIcon2} alt="Thoughtful Design" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                        </div>
                        <div className="onesea-feature-text">
                            <h3>Thoughtful Design</h3>
                            <p>
                                Every home is oriented to frame uninterrupted views of the sea
                                and backwaters — from your morning coffee to the evening tide.
                            </p>
                        </div>
                    </div>
                    <div className="onesea-feature-card">
                        <div className="onesea-feature-icon">
                            <img src={whyIcon3} alt="Sustainable Living" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                        </div>
                        <div className="onesea-feature-text">
                            <h3>Sustainable Living</h3>
                            <p>
                                85% open space and French-inspired landscaping across 11 acres,
                                with sustainability built into the community, not added as an
                                afterthought
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WatchOneSeaSection() {
    return (
        <section className="onesea-watch-section">
            <div className="onesea-watch-container">
                <div className="onesea-watch-header">
                    <div className="overview-label">
                        <span className="dot"></span> SEE IT FOR YOURSELF
                    </div>
                    <h2 className="overview-heading">
                        Watch One Sea <span className="highlight-text">Come to Life</span>
                    </h2>
                    <p className="overview-description">
                        Take a cinematic tour through Voora One Sea — from the sea-facing
                        towers to the
                        <br />
                        grand clubhouse, experience the project before you ever set foot on
                        site.
                    </p>
                </div>

                <div className="onesea-watch-card-wrapper">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/byoTnV_YaTM?rel=0&autoplay=1&mute=1"
                        title="Watch One Sea Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="onesea-watch-main-img"
                    ></iframe>
                    <div className="onesea-watch-footer">
                        <div className="onesea-watch-title">
                            Voora One Sea — Official Walkthrough
                        </div>
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
                </div>
            </div>
        </section>
    );
}

function FloorPlanSection() {
    const sectionRef = useRef < HTMLDivElement > (null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
            } else {
                setInView(false);
            }
        }, { threshold: 0.15 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="fp-section section-one" ref={sectionRef}>
            <div className="fp-container container-one">
                <div className="fp-left">
                    <div className="fp-text-box">
                        <h4 className="fp-eyebrow">THOUGHTFULLY DESIGNED</h4>
                        <h2 className="overview-heading">
                            Explore Your <span className="highlight-text">Floor Plans</span>
                        </h2>
                        <p className="overview-description">
                            Every home at Voora Agastya Heights is planned for light, space, and everyday comfort — from smart automation in
                            every room to layouts built for how families actually live. Explore 3 & 4 BHK configurations, from 1,800 to 2,207 sq. ft.
                        </p>
                    </div>
                    <div className={`fp-animate-card ${inView ? "in-view" : ""}`} style={{ transitionDelay: '0s' }}>
                        <div className="fp-img-large-box fp-animate-wrapper">
                            <img src={image1_2} alt="Floor Plan" className="fp-img fp-animate-img" />
                        </div>
                    </div>
                </div>
                <div className="fp-right">
                    <div className={`fp-animate-card ${inView ? "in-view" : ""}`} style={{ transitionDelay: '0.15s' }}>
                        <div className="fp-img-top-box fp-animate-wrapper">
                            <img src={image2} alt="Floor Plan Top" className="fp-img fp-animate-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function OneSea() {
    const [specPage, setSpecPage] = useState(0);
    const specsPerPage = 6;
    const maxSpecPage = Math.ceil(specifications.length / specsPerPage) - 1;

    const handleSpecPrev = () => setSpecPage((p) => Math.max(0, p - 1));
    const handleSpecNext = () => setSpecPage((p) => Math.min(maxSpecPage, p + 1));

    return (
        <div className="onesea-wrapper">
            <WatchOneSeaSection />
            <WhyOneSeaSection />
            {/* FIRST SECTION */}
            <FloorPlanSection />

            <section id="gallery" className="fp-gallery-section">
                <div className="fp-gallery-text-container" style={{ marginTop: '2%' }}>
                    <h4 className="fp-eyebrow">GALLERY</h4>
                    <h2 className="overview-heading">
                        A Closer Look Inside <span className="highlight-text">One Sea</span>
                    </h2>
                    <p className="overview-description">
                        From sea-facing interiors to landscaped courtyards, explore
                        <br />
                        every space that makes One Sea Residences home
                    </p>
                </div>

                <div
                    className="fp-swiper-container"
                    style={{ margin: '-17% 0 0 0', padding: 0 }}
                >
                    <CylinderCarousel
                        images={galleryImages.map((src) => ({ src }))}
                        cardWidth={750}
                        animate={true}
                        animationDuration={60}
                    />
                </div>
            </section>

            <section className="onesea-specs-section">
                <div className="onesea-specs-container">
                    <header className="onesea-specs-header">
                        <h4 className="fp-eyebrow">BUILT TO LAST</h4>
                        <h2 className="overview-heading">
                            <span className="highlight-text">Specifications</span>
                        </h2>
                        <p className="overview-description">
                            Every detail at One Sea Residences is chosen for durability,
                            safety, and everyday comfort.
                            <br />
                            From premium vitrified flooring to secure digital door locks, no
                            specification is left to chance.
                        </p>
                    </header>

                    <div className="onesea-specs-grid">
                        {specifications
                            .slice(specPage * specsPerPage, (specPage + 1) * specsPerPage)
                            .map((spec, index) => (
                                <div className="onesea-specs-card" key={index}>
                                    <img
                                        src={cardCirclesImg}
                                        alt=""
                                        className="onesea-specs-curve"
                                    />
                                    <div className="onesea-specs-card-header">
                                        <div className="onesea-specs-icon">{spec.icon}</div>
                                        <h3 className="onesea-specs-card-title">{spec.title}</h3>
                                    </div>
                                    <p className="onesea-specs-card-desc">{spec.desc}</p>
                                </div>
                            ))}
                    </div>

                    <div className="onesea-specs-navigation">
                        <button
                            className="onesea-specs-arrow"
                            onClick={handleSpecPrev}
                            disabled={specPage === 0}
                            style={{ opacity: specPage === 0 ? 0.3 : 1 }}
                        >
                            <FiArrowLeft />
                        </button>
                        <button
                            className="onesea-specs-arrow"
                            onClick={handleSpecNext}
                            disabled={specPage === maxSpecPage}
                            style={{ opacity: specPage === maxSpecPage ? 0.3 : 1 }}
                        >
                            <FiArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            <TestimonialsSection />
            <FAQSection />
            <BookVisitSection />
            <LegacySection />
        </div>
    );
}