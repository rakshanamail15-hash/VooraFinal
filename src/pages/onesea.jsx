import React, { useState, useEffect, useRef } from 'react';
import './onesea.css';
import { FiArrowUpRight, FiShield, FiZap, FiGrid, FiLayout, FiDroplet, FiPenTool, FiArrowLeft, FiArrowRight, FiPlay, FiStar, FiPlus, FiSun, FiFeather } from 'react-icons/fi';
const vooraLogo = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/Voora-logo-final_rv4c2a.png';

// import image1 from '../assets/image/3page/container.png';
const image1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917317/one1_wkg7xs.jpg"; // Fallback URL
const image1_2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917317/one1_wkg7xs.jpg";
const image2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917317/one2_dstgrw.jpg";
const image3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917311/one3_lpk6wj.jpg";
const cardCirclesImg = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917267/curveup_trixb1.png';
const cardCirclesImgdown = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917267/curvedown_ztnted.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const galleryImagesOld = [
    // arc-0: green leaves closeup (left edge partial)
    "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&h=800&fit=crop",
    // arc-1: tropical jungle/palm plants
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop",
    // arc-2: red/pink leaves on white background (bougainvillea style)
    "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&h=800&fit=crop",
    // arc-3: fiddle leaf fig plant on white background
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=800&fit=crop",
    // arc-4: purple/lavender flowers (right edge partial)
    "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&h=800&fit=crop",
];

const testimonials = [
    {
        name: "Venkatesh M R",
        role: "Homeowner, Voora Oceans 2",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
    },
    {
        name: "Venkatesh M R",
        role: "Homeowner, Voora Oceans 2",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
    },
    {
        name: "Venkatesh M R",
        role: "Homeowner, Voora Oceans 2",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
    },
];

const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
];


const cn = (...classes) => classes.filter(Boolean).join(' ');

const galleryImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=800&fit=crop",

    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=800&fit=crop",

    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=800&fit=crop",

    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=800&fit=crop",
];

const CylinderCarousel = React.forwardRef(
    (
        {
            images,
            className,
            containerClassName,
            cardClassName,
            animationDuration = 32,
            cardWidth = 250,
            ...props
        },
        ref
    ) => {
        const N = images.length;

        const customStyle = {
            "--n": N,
            "--w": `${cardWidth}px`,
            "--ba": `calc(1turn / var(--n))`,
            "--anim-dur": `${animationDuration}s`,
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "w-full h-full",
                    className
                )}
                style={{
                    perspective: "65em",
                    maskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
                    WebkitMaskImage: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
                    display: 'grid',
                    placeItems: 'center',
                    overflow: 'hidden'
                }}
                {...props}
            >
                <div
                    className={containerClassName}
                    style={{
                        ...customStyle,
                        transformStyle: "preserve-3d",
                        animation: "ry var(--anim-dur) linear infinite",
                        display: 'grid',
                        placeItems: 'center'
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
                            style={{
                                width: "var(--w)",
                                aspectRatio: "4/5",
                                gridArea: "1/1",
                                backfaceVisibility: "hidden",
                                borderRadius: "1rem",
                                objectFit: "cover",
                                "--i": i,
                                transform: "rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1.05 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))",
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
);
CylinderCarousel.displayName = "CylinderCarousel";


const specifications = [
    {
        title: 'Sustainable Living',
        icon: <FiShield />,
        desc: 'RCC framed structure engineered for seismic safety, with fire-rated common areas and 24/7 CCTV surveillance.'
    },
    {
        title: 'Electrical Services',
        icon: <FiZap />,
        desc: 'Solar-powered common areas, concealed copper wiring, and dedicated transformers with RMU units for every tower.'
    },
    {
        title: 'Flooring',
        icon: <FiGrid />,
        desc: 'Premium vitrified tiles in living spaces and bedrooms, with anti-skid flooring in toilets, utility, and balcony areas.'
    },
    {
        title: 'Doors & Windows',
        icon: <FiLayout />,
        desc: 'Polished wood-frame doors with secure digital locks, paired with UPVC windows for insulation and weather protection.'
    },
    {
        title: 'Kitchen & Sanitary Fittings',
        icon: <FiDroplet />,
        desc: 'Modular kitchen provisions with granite countertops, and premium CP fittings from trusted sanitaryware brands.'
    },
    {
        title: 'Painting & Finishes',
        icon: <FiPenTool />,
        desc: 'Weatherproof exterior paint and premium emulsion finishes inside every home, built to stay fresh for years.'
    },

    {
        title: 'Sustainable Living1',
        icon: <FiShield />,
        desc: 'RCC framed structure engineered for seismic safety, with fire-rated common areas and 24/7 CCTV surveillance.'
    },
    {
        title: 'Electrical Services1',
        icon: <FiZap />,
        desc: 'Solar-powered common areas, concealed copper wiring, and dedicated transformers with RMU units for every tower.'
    },
    {
        title: 'Flooring',
        icon: <FiGrid />,
        desc: 'Premium vitrified tiles in living spaces and bedrooms, with anti-skid flooring in toilets, utility, and balcony areas.'
    },
    {
        title: 'Doors & Windows',
        icon: <FiLayout />,
        desc: 'Polished wood-frame doors with secure digital locks, paired with UPVC windows for insulation and weather protection.'
    },
    {
        title: 'Kitchen & Sanitary Fittings',
        icon: <FiDroplet />,
        desc: 'Modular kitchen provisions with granite countertops, and premium CP fittings from trusted sanitaryware brands.'
    },
    {
        title: 'Painting & Finishes',
        icon: <FiPenTool />,
        desc: 'Weatherproof exterior paint and premium emulsion finishes inside every home, built to stay fresh for years.'
    }
];

const legacyProperties = [
    "Voora Oceans 1",
    "Voora Villa 96",
    "Voora Beckon",
    "Voora Kamakoti",
    "Voora Bhuvaneswari"
];

const legacyCards = [
    { name: "Voora Oceans 1", location: "ECR, Chennai", image: image1, className: "legacy-card-1" },
    { name: "Voora Villa 96", location: "ECR, Chennai", image: image2, className: "legacy-card-2" },
    { name: "Voora Beckon", location: "ECR, Chennai", image: image3, className: "legacy-card-3" },
    { name: "Voora Kamakoti", location: "ECR, Chennai", image: image1, className: "legacy-card-4" },
    { name: "Voora Bhuvaneswari", location: "ECR, Chennai", image: image2, className: "legacy-card-5" }
];

function LegacySection() {
    const [active, setActive] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="onesea-legacy" ref={sectionRef}>
            <div className="onesea-legacy-container">
                <div className="onesea-legacy-left">
                    <div className="onesea-eyebrow">
                        <span className="onesea-dot"></span> MORE BY VOORA
                    </div>
                    <h2 className="onesea-heading onesea-heading-left">
                        A legacy built <span className="onesea-heading-italic">across the city</span>
                    </h2>
                    <p className="onesea-subtitle onesea-subtitle-left">
                        Explore other Voora addresses across Chennai, each built
                        <br />
                        on the same promise of quality, trust, and lasting value.
                    </p>

                    <ul className="onesea-legacy-list">
                        {legacyProperties.map((prop, i) => (
                            <li
                                key={i}
                                className={`onesea-legacy-item ${active === i ? "active" : ""
                                    }`}
                                onClick={() => setActive(i)}
                            >
                                <span className="onesea-legacy-num">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="onesea-legacy-name">{prop}</span>
                                <button className="onesea-legacy-arrow" aria-label="View">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 12H19M19 12L12 5M19 12L12 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="onesea-legacy-right">
                    {legacyCards.map((card, i) => (
                        <div key={i} className={`onesea-legacy-card ${card.className} ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.25}s` }}>
                            <div
                                className="onesea-legacy-image"
                                style={{ backgroundImage: `url(${card.image})` }}
                            ></div>
                            {card.name && (
                                <div className="onesea-legacy-caption">
                                    <h4>{card.name}</h4>
                                    <p>{card.location}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    return (
        <section className="onesea-testimonials-section">
            <div className="onesea-testimonials-container">
                <header className="onesea-testimonials-header">
                    <h4 className="fp-eyebrow">TRUSTED BY FAMILIES</h4>
                    <h2 className="fp-heading">Hear from <span className="fp-highlight">the User</span></h2>
                    <p className="onesea-testimonials-description">
                        Hear directly from the families who trusted Voora to build their home<br />
                        real stories from our completed communities across Chennai
                    </p>
                </header>

                <div className="onesea-testimonials-grid">
                    {[1, 2, 3].map((item) => (
                        <div className="onesea-video-card" key={item}>
                            <div className="onesea-video-thumbnail">
                                <img src={image1} alt="Video Thumbnail" />
                                <div className="onesea-video-play">
                                    <FiPlay fill="currentColor" />
                                </div>
                            </div>
                            <h3 className="onesea-video-name">Venkatesh M R</h3>
                            <p className="onesea-video-role">Homeowner, Voora Oceans 2</p>
                        </div>
                    ))}

                    <div className="onesea-stat-card">
                        <img src={cardCirclesImgdown} alt="" className="onesea-stat-curve" />
                        <div className="onesea-stat-stars-row">
                            <div className="onesea-avatars">
                                <div className="onesea-avatar" style={{ backgroundColor: '#e2e8f0' }}></div>
                                <div className="onesea-avatar" style={{ backgroundColor: '#cbd5e1' }}></div>
                                <div className="onesea-avatar" style={{ backgroundColor: '#94a3b8' }}></div>
                                <div className="onesea-avatar" style={{ backgroundColor: '#64748b' }}></div>
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
                        <p className="onesea-stat-desc">Rated by 500+ homeowners across Voora's completed communities</p>
                    </div>

                    <div className="onesea-stat-card">
                        <img src={cardCirclesImgdown} alt="" className="onesea-stat-curve" />
                        <p className="onesea-stat-desc-top">Homebuyers who'd recommend Voora to family or friends</p>
                        <h2 className="onesea-stat-number large">92%</h2>
                    </div>

                    <div className="onesea-image-card">
                        <img src={image2} alt="Voora Oceans 2 Community" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        "Where is Voora One Sea located?",
        "What are the amenities provided?",
        "When is the handover date?",
        "Is there a sea view from all apartments?",
        "What is the security system in place?",
        "Can I customize my floor plan?"
    ];

    return (
        <section className="onesea-faq-section">
            <div className="onesea-faq-container">
                <div className="onesea-faq-left">
                    <div className="onesea-eyebrow">
                        <span className="onesea-circle"></span> FAQ
                    </div>
                    <h2 className="fp-heading">Frequently Asked <span className="fp-highlight">Questions</span></h2>

                    <div className="onesea-faq-image-box">
                        <div className="onesea-faq-img-col">
                            <img src={image1} className="onesea-faq-img-small" alt="" />
                            <img src={image2} className="onesea-faq-img-small" alt="" />
                        </div>
                        <div className="onesea-faq-img-col">
                            <img src={image3} className="onesea-faq-img-tall" alt="" />
                        </div>
                    </div>
                </div>

                <div className="onesea-faq-right">
                    <div className="onesea-faq-list">
                        {faqs.map((q, i) => (
                            <div key={i} className="onesea-faq-item" onClick={() => toggleFAQ(i)}>
                                <span>{q}</span>
                                <FiPlus className="onesea-faq-icon" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'none' }} />
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
        <section className="onesea-book-section">
            <div className="onesea-book-wrapper">
                <div className="onesea-book-header">
                    <div className="onesea-eyebrow">
                        <span className="onesea-circle"></span> BOOK A VISIT
                    </div>
                    <h2 className="fp-heading">Let's Plan Your <span className="fp-highlight-blue">Site Visit</span></h2>
                    <p className="fp-desc-wide">
                        Whether you're exploring floor plans or ready to see it in person, our team<br />
                        will guide you through every step of finding your home by the sea.
                    </p>
                </div>
                <div className="onesea-book-container">
                    <div className="onesea-book-left">
                        <div className="onesea-book-image-card">
                            <img src={image2} className="onesea-book-bg" alt="" />
                            <div className="onesea-book-overlay-panel">
                                <img src={vooraLogo} className="onesea-book-logo" alt="Voora" />
                                <h3>Our Promise</h3>
                                <p>Experience sea-facing living firsthand, with honest<br />guidance every step.</p>
                            </div>
                        </div>
                    </div>
                    <div className="onesea-book-right">
                        <form className="onesea-book-form">
                            <label className="onesea-form-label">Name</label>
                            <div className="form-group">
                                <input type="text" placeholder="voora one sea" className="onesea-form-input" />
                            </div>

                            <label className="onesea-form-label">Email Address</label>
                            <div className="form-group">
                                <input type="email" placeholder="voora one sea" className="onesea-form-input" />
                            </div>

                            <label className="onesea-form-label">Mobile Number</label>
                            <div className="form-group">
                                <input type="tel" placeholder="voora one sea" className="onesea-form-input" />
                            </div>

                            <label className="onesea-form-label">Preferred Visit Date</label>
                            <div className="form-group">
                                <input type="text" placeholder="voora one sea       &#128197;" className="onesea-form-input" style={{ fontFamily: 'Arial, sans-serif' }} />
                            </div>

                            <label className="onesea-form-label">Message (optional)</label>
                            <div className="form-group">
                                <textarea placeholder="" className="onesea-form-input textArea"></textarea>
                            </div>

                            <button type="button" className="onesea-submit-btn">Book Your Site Visit</button>
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
                    <h2 className="onesea-why-heading">Why One Sea</h2>
                    <p className="onesea-why-desc">
                        The sea shouldn't be a weekend escape. It should be part of your
                        everyday life. That's the idea behind every residence at One Sea.
                    </p>
                    <div className="onesea-why-image-card">
                        <img src={image1} className="onesea-why-img" alt="One Sea Living" />
                    </div>
                </div>
                <div className="onesea-why-right">
                    <div className="onesea-feature-card">
                        <div className="onesea-feature-icon">
                            <FiSun size={24} color="#ffffff" />
                        </div>
                        <div className="onesea-feature-text">
                            <h3>Sea-Facing Living</h3>
                            <p>Every home is oriented to frame uninterrupted views of the sea and backwaters — from your morning coffee to the evening tide.</p>
                        </div>
                    </div>
                    <div className="onesea-feature-card">
                        <div className="onesea-feature-icon">
                            <FiLayout size={24} color="#ffffff" />
                        </div>
                        <div className="onesea-feature-text">
                            <h3>Thoughtful Design</h3>
                            <p>Every home is oriented to frame uninterrupted views of the sea and backwaters — from your morning coffee to the evening tide.</p>
                        </div>
                    </div>
                    <div className="onesea-feature-card">
                        <div className="onesea-feature-icon">
                            <FiFeather size={24} color="#ffffff" />
                        </div>
                        <div className="onesea-feature-text">
                            <h3>Sustainable Living</h3>
                            <p>85% open space and French-inspired landscaping across 11 acres, with sustainability built into the community, not added as an afterthought</p>
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
                    <h4 className="fp-eyebrow">SEE IT FOR YOURSELF</h4>
                    <h2 className="fp-heading">Watch One Sea <span className="fp-highlight">Come to Life</span></h2>
                    <p className="onesea-subtitle" style={{ maxWidth: '650px', marginBottom: '40px', color: '#4B5563' }}>
                        Take a cinematic tour through Voora One Sea — from the sea-facing towers to the
                        <br />
                        grand clubhouse, experience the project before you ever set foot on site.
                    </p>
                </div>

                <div className="onesea-watch-card-wrapper">
                    <img src={image1} className="onesea-watch-main-img" alt="One Sea Towers" />
                    <div className="onesea-watch-footer">
                        <div className="onesea-watch-title">
                            Voora One Sea — Official Walkthrough
                        </div>
                        <div className="onesea-watch-badges">
                            <div className="onesea-badge"><span role="img" aria-label="wave">🌊</span> Sea-Facing Towers</div>
                            <div className="onesea-badge"><span role="img" aria-label="leaf">🌿</span> 85% Open, Green Space</div>
                            <div className="onesea-badge"><span role="img" aria-label="drone">🚁</span> Aerial + Interior Tour</div>
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

    const handleSpecPrev = () => setSpecPage(p => Math.max(0, p - 1));
    const handleSpecNext = () => setSpecPage(p => Math.min(maxSpecPage, p + 1));
    return (
        <div className="onesea-wrapper">
            <WatchOneSeaSection />
            <WhyOneSeaSection />
            {/* FIRST SECTION */}
            <section className="fp-section section-one">
                <div className="fp-container container-one">
                    <div className="fp-left">
                        <div className="fp-text-box">
                            <h4 className="fp-eyebrow">THOUGHTFULLY DESIGNED</h4>
                            <h2 className="fp-heading">Explore Your <span className="fp-highlight">Floor Plans</span></h2>
                            <p className="fp-desc">
                                Every home at One Sea is planned for light, airflow, and everyday comfort-from layout of your Kitchen to the width of your balcony.Explore 2 & 3 BHK configurations designed for how modern families actually live
                            </p>
                            <button className="fp-cta">
                                Get Consultation
                                <div className="fp-cta-icon-box">
                                    <FiArrowUpRight className="fp-cta-icon" />
                                </div>
                            </button>
                        </div>
                        <div className="fp-img-large-box">
                            <img src={image1_2} alt="Floor Plan" className="fp-img" />
                        </div>
                    </div>
                    <div className="fp-right">
                        <div className="fp-img-top-box">
                            <img src={image2} alt="Floor Plan Top" className="fp-img" />
                        </div>
                        <div className="fp-img-bottom-box">
                            <img src={image3} alt="Floor Plan Bottom" className="fp-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="fp-gallery-section">
                <div className="fp-gallery-text-container">
                    <h4 className="fp-eyebrow">GALLERY</h4>
                    <h2 className="fp-heading">A Closer Look Inside <span className="fp-highlight">One Sea</span></h2>
                    <p className="fp-gallery-desc">
                        From sea-facing interiors to landscaped courtyards, explore<br />
                        every space that makes One Sea Residences home
                    </p>
                </div>

                <div className="fp-swiper-container" style={{ margin: '-150px 0 -100px 0', padding: 0 }}>
                    <CylinderCarousel images={galleryImages.map(src => ({ src }))} cardWidth={550} />
                </div>
            </section>

            <section className="onesea-specs-section">
                <div className="onesea-specs-container">
                    <header className="onesea-specs-header">
                        <h4 className="fp-eyebrow">BUILT TO LAST</h4>
                        <h2 className="fp-heading">Specifications</h2>
                        <p className="onesea-specs-description">
                            Every detail at One Sea Residences is chosen for durability, safety, and everyday comfort.<br />
                            From premium vitrified flooring to secure digital door locks, no specification is left to chance.
                        </p>
                    </header>

                    <div className="onesea-specs-grid">
                        {specifications.slice(specPage * specsPerPage, (specPage + 1) * specsPerPage).map((spec, index) => (
                            <div className="onesea-specs-card" key={index}>
                                <img src={cardCirclesImg} alt="" className="onesea-specs-curve" />
                                <div className="onesea-specs-card-header">
                                    <div className="onesea-specs-icon">{spec.icon}</div>
                                    <h3 className="onesea-specs-card-title">{spec.title}</h3>
                                </div>
                                <p className="onesea-specs-card-desc">{spec.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="onesea-specs-navigation">
                        <button className="onesea-specs-arrow" onClick={handleSpecPrev} disabled={specPage === 0} style={{ opacity: specPage === 0 ? 0.3 : 1 }}><FiArrowLeft /></button>
                        <button className="onesea-specs-arrow" onClick={handleSpecNext} disabled={specPage === maxSpecPage} style={{ opacity: specPage === maxSpecPage ? 0.3 : 1 }}><FiArrowRight /></button>
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
