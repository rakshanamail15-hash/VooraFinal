import React, { useState, useEffect, useRef } from "react";
import "./HeroOneSea.css";
import "./CompletedProjects.css";
import "./Contact.css"; // Added to fix the layout for the contact form section at the bottom
import "./About.css"; // Added to fix layout for the about section
const heroBg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786008732/ocea3_y05ami.jpg"; // Cinematic background image
const InteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787207488/Agastya1_iwc2tq.jpg";
const InteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917058/Agastya3_amua3b.jpg";
const ExteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya4_l47oa1.jpg";
const ExteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya5_vuwogt.jpg";
const ExteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya6_uxggw8.jpg";
const ExteriorImg4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya7_jzbqsv.jpg";
const aboutImg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917274/highabout_uxxmwk.webp";
const agastyaabout = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785923335/AgastyaRibbon_trwsxv.jpg";
import { ArrowUpRight, ShieldCheck, Award, X, ArrowRight, MapPin, Building2, Building, Square, Home, Calendar, Download, Star, Quote, PlayCircle, Waves, Eye, Trees, Sparkles } from "lucide-react";
import {
    FaMapMarkerAlt,
    FaBuilding,
    FaRulerCombined,
    FaHome,
    FaBed,
    FaCalendarAlt,
    FaTag,
    FaDownload,
    FaArrowRight,
    FaTimes,
    FaUser,
    FaPhone,
    FaEnvelope,
    FaCommentDots,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IcMaterials, IcConstruction, IcSustainability, IcClock, IcResidential, IcCommercial, IcLocation, IcShield, IcSupport } from "./Icons";
import { Link } from "react-router-dom";
import SiteVisitForm from "./SiteVisitForm";
import { SITE_VISIT_ENDPOINTS } from "../config/siteVisitEndpoints";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import RibbonGallery from "./HeroRibbon";
const aboutvoora = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917274/highabout_uxxmwk.webp";

// Project Images
const oneSea = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917278/homeonesea_z6nhbs.png";
const westSide = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917397/westside_wgbhlt.webp";
const agasthya = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/heroagastiya_puncll.webp";
const highwayHaven = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/herohighwayhaven_f6cn4e.webp";
const beckford = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/herobeckford_yrmenj.webp";
const techedge = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786011239/tech-edgeRibbon_ytnaqj.jpg"

// Completed Project Images
const vooraashwin = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/vooraaswin_rvhcu0.webp";
const vooranarayana = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/vooranarayana_ivmgrz.webp";
const vooraprakash = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/vooraprakash_kpm786.webp";
const vooravilla96 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/vooravilla96_axfzjk.webp";
const vooravidyasagar = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/vooravidhya_dnoqxz.webp";
const voorasaraswathi = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/voorasaraswathi_vi76qg.webp";
const vooragithanjali = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/vooragitanjali_lwl8xs.webp";
const vooravijayasree = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/vooravijayasree_bqqlud.webp";
const voorapritvi = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/voorapritvi_bxnjgk.webp";
const vooraradhahomes = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/vooraradhahomes_jv7ulf.webp";
const voorajktower = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/voorajktower_tqxxjl.webp";
const voorasreela = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/voorasreelaterraces_rf2cpb.webp";
const trm = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/TRM_nltdhd.webp";
// import tblock from "../assets/image/tblockheroabout.webp";
const tblock = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786598223/tblock_elevation_609x550px_ei7hzl.jpg";
const ocean27 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786008732/ocea2_klyrjm.jpg";
const user = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/user_z37p18.png";
import VideoCarousel from "./VideoCarousel";

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

const shortsVideos = [
    "vilaYkwCONQ",
    "ESAD4lMGoow",
    "g2pu1TbGQ3I",
    "iy5gFvfzC90",
];

const videoTitles = [
    "Venkatesh MR",
    "Zainab Khuzema Raja",
    "Srinivaulu Kannan DR",
    "Murali Shankar MR",
];

const videos = [
    { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Voora One Sea" },
    { src: "https://www.youtube.com/embed/iO4aofTnM4Q", title: "Commercial Construction" },
    { src: "https://www.youtube.com/embed/Id3OAOGsPIk", title: "Interior Design Showcase" },
    { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Villa Project Tour" },
    { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Project Walkthrough" },
];

// import book1 from '../assets/image/book1.png';
const book1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044239/ONE_SEA_CTA_POP-UP_534X415_px_km6hro.webp";
const book2 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book2_xs2p6a.png';
const book3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book3_naly9e.png';
const book4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787045486/HOME_PAGE_EXPLORE_-_AGASTYA_osze4j.webp";

const book5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787031544/WESTSIDE_CTA_POP-UP_534X415_PX_fni06m.webp";
const book6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044825/OCEAN_27_CTA_POP-UP_534X415_px_a3x5xq.webp"

const stats = [
    { icon: 'years', value: 30, suffix: '+', label: 'Years of Excellence' },
    { icon: 'projects', value: 50, suffix: '+', label: 'Projects' },
    { icon: 'clients', value: 6, suffix: 'K+', label: 'Happy Clients' },
    { icon: 'awards', value: 9, suffix: 'M', label: 'sqft constructed' },
];

const heroImages = [
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
];

const completedProjects = [
    {
        name: "Voora Ocean27",
        type: "Residential",
        location: "Adyar, Chennai",
        Acres: "1.8 Acres",
        Units: "132 Units",
        BHK: "2 & 3 BHK Apartments",
        completion: "",
        img: ocean27,
    },

    {
        name: "Voora VidyasagarTblock",
        type: "Residential",
        location: "Korukkupet, Chennai",
        Acres: "0.48 Acres",
        Units: "38 Units",
        BHK: "2, 3 & 4 BHK Apartments",
        completion: "",
        img: tblock,
    },

    {
        name: "Voora Aswin",
        type: "Residential",
        location: "T. Nagar, Chennai",
        Acres: "0.11 Acres",
        Units: "5 Units",
        BHK: "4 BHK Apartments",
        completion: "Mar 2025",
        img: vooraashwin,
    },
    {
        name: "Voora TRM Court",
        type: "Residential",
        location: "Mylapore, Chennai",
        Acres: "0.11 Acres",
        Units: "5 Units",
        BHK: "3 BHK Apartments",
        completion: "May 2025",
        img: trm,
    },
    {
        name: "Voora Narayana",
        type: "Residential",
        location: "Purasaiwakkam, Chennai",
        Acres: "0.22 Acres",
        Units: "9 Units",
        BHK: "3 & 4 BHK",
        completion: "Nov 2024",
        img: vooranarayana,
    },
    {
        name: "Voora Prakash",
        type: "Residential",
        location: "Vijayaraghava Road, T. Nagar, Chennai",
        Acres: "0.2 Acres",
        Units: "8 Units",
        BHK: "4 BHK",
        completion: "Oct 2024",
        img: vooraprakash,
    },
    {
        name: "Voora Villa 96",
        type: "Residential",
        location: "ECR – Sholinganallur, Chennai",
        Acres: "7.5 Acres",
        Units: "96 Units",
        BHK: "2 & 3 & 4BHK",
        completion: "Jul 2015",
        img: vooravilla96,
    },
    {
        name: "Voora Vidyasagar Oswal Garden",
        type: "Residential",
        location: "Phase -I Korukkupet, Chennai",
        Acres: "12.11 Acres",
        Units: "880 Units",
        BHK: "2 & 3 & 4 BHK",
        completion: "May 2016",
        img: vooravidyasagar,
    },
    {
        name: "Voora Saraswathi",
        type: "Residential",
        location: "Hindi Prachar Sabha Road, T. Nagar, Chennai",
        Acres: "0.27 Acres",
        Units: "14 Units",
        BHK: "3 BHK Apartments",
        completion: "Aug 2019",
        img: voorasaraswathi,
    },

    {
        name: "Voora Gitanjali",
        type: "Residential",
        location: "T.Nagar, Chennai",
        Acres: "0.22 Acres",
        Units: "16 Units",
        BHK: "2 & 3 BHK Apartments",
        completion: "Dec 2017",
        img: vooragithanjali,
    },

    {
        name: "Voora Vijayasree",
        type: "Residential",
        location: "Dr.B.N. Road, T. Nagar, Chennai",
        Acres: "0.27 Acres",
        Units: "16 Units",
        BHK: "2 & 3 BHK Apartments",
        completion: "Jun 2000",
        img: vooravijayasree,
    },

    {
        name: "Voora Pritvi",
        type: "Residential",
        location: "ECR, Kottivakkam, Chennai",
        Acres: "1 Acres",
        Units: "48 Units",
        BHK: "2, 3 & 4 BHK Apartments",
        completion: "Sep 2008",
        img: voorapritvi,
    },

    {
        name: "Voora Radha Homes",
        type: "Residential",
        location: "Harrington Road, Chetpet, Chennai",
        Acres: " Acres",
        Units: "544 Units",
        BHK: "2, 3 & 4 BHK Apartments",
        completion: "Mar 2010",
        img: vooraradhahomes,
    },

    {
        name: "Voora J K Tower",
        type: "Commercial",
        location: "T.Nagar, Chennai",
        Acres: "0.16 Acres",
        Units: "8 Units",
        // BHK: "2, 3 & 4 BHK Apartments",
        completion: "Mar 2010",
        img: voorajktower,
    },

    {
        name: "Voora Sreela Terrace",
        type: "Commercial",
        location: "Adyar, Chennai",
        Acres: "0.27 Acres",
        Units: "8 Units",
        // BHK: "2, 3 & 4 BHK Apartments",
        completion: "2004",
        img: voorasreela,
    },
];

export default function HeroAgastya() {
    const masterContainerRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [videoIndex, setVideoIndex] = useState(0);

    const nextVideo = () => {
        if (videoIndex < videos.length - 2) setVideoIndex((prev) => prev + 1);
    };
    const prevVideo = () => {
        if (videoIndex > 0) setVideoIndex((prev) => prev - 1);
    };

    const galleryData = {
        Interior: [InteriorImg1, InteriorImg3, heroBg],
        Exterior: [ExteriorImg1, ExteriorImg2, ExteriorImg3, ExteriorImg4],
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((p) => (p === heroImages.length - 1 ? 0 : p + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const slides = [
        {
            videoId: "byoTnV_YaTM",
            title: "Voora Project Showcase 1",
        },
    ];

    const iframeRefs = useRef([]);
    const [showModal, setShowModal] = useState(false);

    const [start, setStart] = useState(0);
    const [perView, setPerView] = useState(
        window.innerWidth <= 768 ? 1 : 2
    );

    useEffect(() => {
        const handleResize = () => {
            setPerView(window.innerWidth <= 768 ? 1 : 2);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxStart = reviews.length - perView;
    const prev = () => setStart((s) => Math.max(0, s - 1));
    const next = () => setStart((s) => Math.min(maxStart, s + 1));
    const [activeProject, setActiveProject] = useState(0);
    const [showBrochure, setShowBrochure] = useState(false);
    const [activeVideo, setActiveVideo] = useState(0);

    // Completed Projects Pasted State
    const filters = ["All Projects", "Residential", "Commercial"];
    const [filter, setFilter] = useState("All Projects");
    const trackRef = useRef(null);

    const visible = completedProjects.filter(
        (p) => filter === "All Projects" || p.type === filter
    );

    const scroll = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector(".up-card");
        const amount = card ? card.offsetWidth + 28 : 380;
        track.scrollBy({
            left: dir * amount,
            behavior: "smooth",
        });
    };

    const [selectedProject, setSelectedProject] = useState(null);
    const [showBrochureModal, setShowBrochureModal] = useState(false);

    const openBrochure = (project) => {
        setSelectedProject(project);
        setShowBrochureModal(true);
    };

    const closeBrochureModal = () => {
        setShowBrochureModal(false);
    };
    const getYoutubeThumb = (url) => {
        const match = url.match(/embed\/([^?]+)/);
        if (match && match[1]) {
            return `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`;
        }
        return "";
    };

    const features = [
        { icon: <IcMaterials aria-hidden="true" />, title: "Premium Materials" },
        { icon: <IcConstruction aria-hidden="true" />, title: "Expert Engineers" },
        { icon: <IcSustainability aria-hidden="true" />, title: "Sustainable Build" },
        { icon: <IcClock aria-hidden="true" />, title: "On-Time Delivery" },
        { icon: <IcShield aria-hidden="true" />, title: "Quality Assurance" },
        { icon: <IcSupport aria-hidden="true" />, title: "Expert Support" },
    ];

    // Framer Motion Variants
    const imageVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

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

    const projects = [
        {
            name: "Voora One Sea",
            type: "Residential",
            location: "Next to Mayajaal, ECR",
            Acres: "11.06 Acres",
            Units: "1039 Units",
            BHK: "2, 3 BHK",
            Price: "₹7199/sqft",
            completion: "Aug 2028",
            img: oneSea,
            route: "/voora-one-sea",
        },
        {
            name: "Voora WestSide",
            type: "Residential",
            location: "Manapakkam, Chennai",
            Acres: "1.5 Acres",
            Units: "77 Units",
            BHK: "2 & 3 BHK",
            Price: "₹13000/sqft",
            completion: "Ready",
            img: westSide,
            route: "/voora-westside",
        },
        {
            name: "Voora Agasthya",
            type: "Residential",
            location: "Tondiarpet, chennai",
            Acres: "0.55 Acres",
            Units: "54 Units",
            BHK: "3 & 4 BHK",
            Price: "₹12499/sqft",
            completion: "Mar 2028",
            img: agasthya,
            route: "/voora-agastya",
        },
        {
            name: "Voora Highway Haven",
            type: "Residential",
            location: "Panapakkam, Kanchipuram",
            Acres: "11.33 Acres",
            Units: "269 Units",
            BHK: "Plots",
            Price: "₹1500/sqft",
            completion: "Ready",
            img: highwayHaven,
            route: "/voora-highway-haven",
        },
        {
            name: "Voora Beckford",
            type: "Residential",
            location: "Nungabakkam, Chennai",
            Acres: "N/A",
            Units: "5 Units",
            BHK: "4 BHK",
            Price: "₹30000/sqft",
            completion: "N/A",
            img: beckford,
            route: "/voora-beckford",
        },
        {
            name: "Voora Tech Edge",
            type: "Commercial",
            location: "Next to Mayajaal, ECR",
            Acres: "6.5 Acres",
            Units: "544 Units",
            BHK: "Commercial",
            Price: "Contact Us",
            completion: "N/A",
            img: techedge,
            route: "/voora-tech-edge",
        },
    ];


    const testimonialsData = [
        { name: "Arvind", role: "Homeowner", text: "Voora's attention to detail is unmatched. Living here is an absolute dream, the build quality is perfectly executed.", img: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5 },
        { name: "Priya", role: "Investor", text: "Excellent build quality and on-time delivery. The entire process was professional and highly transparent.", img: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5 },
        { name: "Rahul", role: "Homeowner", text: "Professional, transparent, and an absolutely premium experience from booking to handover.", img: "https://randomuser.me/api/portraits/men/85.jpg", rating: 5 },
        { name: "Sneha", role: "Business Owner", text: "We love our new commercial space. The design is incredibly modern and perfectly functional.", img: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5 }
    ];

    const statsData = [
        { value: 30, suffix: "+", label: "Years of Excellence" },
        { value: 50, suffix: "+", label: "Projects Delivered" },
        { value: 6, suffix: "K+", label: "Happy Clients" },
        { value: 9, suffix: "M+", label: "Sq.Ft Constructed" }
    ];

    const videosData = [
        { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Voora One Sea" },
        { src: "https://www.youtube.com/embed/BCkP2JGxTJs?rel=0", title: "Voora Westside" },
        { src: "https://www.youtube.com/embed/FUOvesvTRRo?rel=0", title: "Voora Beckford" },
        { src: "https://www.youtube-nocookie.com/embed/zkVxve-uOeA?rel=0", title: "Voora Ocean27" },
    ];

    return (
        <>
            {/* ── Hero ── */}
            <div className="hero-banner">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop={false}
                    speed={1100}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide">
                                <iframe
                                    ref={(el) => (iframeRefs.current[index] = el)}
                                    className="slide-image"
                                    src="https://www.youtube.com/embed/byoTnV_YaTM?autoplay=1&mute=0&loop=1&playlist=byoTnV_YaTM&enablejsapi=1"
                                    title="Test Video"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />

                                <div className="slide-overlay" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Luxury Curved Statistics Ribbon */}
                <div
                    className="luxury-stats-ribbon"
                    aria-label="Company statistics"
                >
                </div>
            </div>

            <RibbonGallery />

            {/* ── Overview ── */}
            <section id="overview" className="overview-section">
                <motion.div
                    className="overview-container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="overview-image" variants={imageVariant}>
                        <img src={agastyaabout} alt="Voora One Sea" className="main-image" />
                    </motion.div>

                    <motion.div className="overview-content">
                        <div className="heading-main">
                            <div data-reveal="true" className="active is-visible">
                                <h2 className="section-title">
                                    High-Rise Residential Building <br className="br-only" />
                                    <span className="accent">In North Chennai's Tondiarpet</span>
                                </h2>
                                <p>Curated for Comfort. Crafted for Life. This is what you Experience.</p>
                            </div>
                        </div>

                        <motion.div className="feature-grid" variants={containerVariants}>
                            {[
                                { icon: ShieldCheck, title: "Ultimate Privacy" },
                                { icon: Home, title: "Spacious Luxury Homes" },
                                { icon: Eye, title: "Unmatched Views" },
                                { icon: Trees, title: "Serene Green Surroundings" },
                                { icon: Sparkles, title: "Smart Layouts" },
                                { icon: Building, title: "Premium Amenities" },
                            ].map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div key={i} variants={fadeUp} className="feature">
                                        <Icon size={18} color="#bf953f" />
                                        <p>{item.title}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* <motion.button
                            className="cta-btn"
                            onClick={() => setOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Agastya View →
                        </motion.button> */}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── Gallery ── */}
            <section id="gallery" className="premium-gallery">
                <div className="container">
                    <div className="heading-main-center">
                        <div data-reveal="true" className="active is-visible">
                            <h2 className="section-title">
                                Project <br className="br-only" />
                                <span className="accent">Gallery</span>
                            </h2>
                            <p className="vn-subtitle-center">
                                Explore our thoughtfully designed spaces, premium amenities, elegant architecture, and beautifully crafted interiors.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-marquee-row">
                        <div className="gallery-marquee-track">
                            {[...galleryData.Exterior, ...galleryData.Exterior, ...galleryData.Exterior, ...galleryData.Exterior].map((img, index) => (
                                <div className="gallery-card" key={index}><img src={img} alt={`Exterior ${index + 1}`} /></div>
                            ))}
                        </div>
                    </div>
                    <div className="gallery-marquee-row reverse">
                        <div className="gallery-marquee-track">
                            {[...galleryData.Interior, ...galleryData.Interior, ...galleryData.Interior, ...galleryData.Interior, ...galleryData.Interior].map((img, index) => (
                                <div className="gallery-card" key={index}><img src={img} alt={`Interior ${index + 1}`} /></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
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


            {/* ── Video Stories Section ── */}
            <section className="vs-sections" id="video-stories">
                <div className="vs-container">

                    {/* Left Content */}
                    <div className="vs-info">
                        <div className="vs-heading">
                            <div className="heading-mains">
                                <div data-reveal="true" className="active is-visible">

                                    <h2 className="section-title">
                                        Experience Through
                                        <br />
                                        <span className="accent">Video Stories</span>

                                    </h2>
                                </div>
                            </div>
                        </div>

                        <p className="vs-desc">
                            Explore meticulously crafted layouts designed to maximize
                            natural light, ventilation, functionality, and luxury living
                            experiences for modern families.
                        </p>
                        <a
                            href="https://www.youtube.com/results?search_query=Voora+Group"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-more-btn"
                            style={{ display: 'inline-flex', alignItems: 'center', marginTop: '20px', textDecoration: 'none' }}
                        >
                            Explore Here
                        </a>
                    </div>

                    {/* Right Slider */}
                    <div className="vs-gallery">
                        <VideoCarousel videos={shortsVideos} titles={videoTitles} />
                    </div>

                </div>
            </section>
            {/* ── Contact Form ── */}

            <section className="hero" id="top">

                <div className="container hero-inner">

                    <SiteVisitForm apiEndpoint={SITE_VISIT_ENDPOINTS.Contact} projectName="Contact" />

                    {/* HERO IMAGE + STATS */}
                    <div className="hero-visual">

                        <img src={heroImages[currentImage]} alt="project" />

                        <div className="hero-stats">
                            {stats.map((s, i) => (
                                <div
                                    className="hero-stat"
                                    key={s.label}
                                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                                >
                                    <strong>
                                        <CountUpNumber end={s.value} suffix={s.suffix} />
                                    </strong>
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
}

function CountUpNumber({ end, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, end]);

    return <span ref={ref}>{count}{suffix}</span>;
}
