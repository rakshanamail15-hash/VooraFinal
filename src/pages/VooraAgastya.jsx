import VideoCarousel from "../components/VideoCarousel";
import "./VooraAgastya.css";
import "../components/HeroCarousel.css";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const icon = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/fav1_nlyrnx.png";
import React, { useState, useEffect, useRef } from "react";
import SiteVisitForm from "../components/SiteVisitForm";
import { SITE_VISIT_ENDPOINTS } from "../config/siteVisitEndpoints";
const locationimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917064/AgastyaMap_ftsgxm.jpg";
const hero2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/heroagasta_knieei.webp";
const about = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917312/oneseaabout_noilcf.webp";
const plan1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917322/project1_m9jinl.webp";
const plan2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917322/project2_or78yu.webp";
const plan3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917322/project3_s0sex9.webp";
const plan4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917322/project4_rfcjcg.webp";
// import plan5 from "../assets/image/project4.webp";
// import plan6 from "../assets/image/project4.webp";
const news1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056689/news1_apmoah.webp"
const news2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056692/news2_ph0g8d.webp"
const news3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056690/news3_rouxcx.webp"
const news4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056690/news4_dw5gvg.webp"
const news5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056690/news5_bmqlha.webp"
const news6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056691/news6_vmdykv.webp"
const news7 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056692/news7_lryhl3.webp"
const news8 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056692/news8_jfcsw9.webp"
const news9 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056692/news9_ukqjpz.webp"
const news10 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056689/news10_mxib1j.webp"
const news11 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056692/news11_ubdphr.webp"
const news12 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056691/news12_njfyzj.webp"
const news13 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056693/news13_pduxjq.webp"
const news14 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056693/news14_jgxuso.webp"
const news15 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056694/news15_zjlz9g.webp"
const news16 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056695/news16_nja1jh.webp"
const news17 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056694/news17_s3fwhr.webp"
const news18 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056697/news18_vk5tnr.webp"
const news19 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056696/news19_pkodvf.webp"
const news20 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056695/news20_hvawrj.webp"
const news21 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787056695/news21_k0jqxt.webp"
const InteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787207488/Agastya1_iwc2tq.jpg";
const InteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787206983/agastyaamenitie_koaf6x.jpg";
// import InteriorImg2 from "../assets/image/Agastya2.webp";
const InteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917058/Agastya3_amua3b.jpg";
const ExteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya4_l47oa1.jpg";
const ExteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya5_vuwogt.jpg";
const ExteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya6_uxggw8.jpg";
const ExteriorImg4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Agastya7_jzbqsv.jpg";
const masterplan = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917292/Master-Layout_c7v2vw.jpg";
// import book1 from "../assets/image/book1.png";
const book1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044239/ONE_SEA_CTA_POP-UP_534X415_px_km6hro.webp";
const book2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book2_xs2p6a.png";
const book3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book3_naly9e.png';
const book4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787045486/HOME_PAGE_EXPLORE_-_AGASTYA_osze4j.webp";
const book5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787031544/WESTSIDE_CTA_POP-UP_534X415_PX_fni06m.webp";
const book6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044825/OCEAN_27_CTA_POP-UP_534X415_px_a3x5xq.webp"

// import agastyaabout from "../assets/image/AgastyaRibbon.jpg";
// import agastyaabout from "../assets/image/Agastyaabout.jpeg";
const agastyaabout = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786597586/agasthiya_elevation_609x550px_uddnuy.jpg";
// import agastyaamenities from "../assets/image/agastyaamenities.jpg";
const agastyaamenities = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787206983/agastyaamenitie_koaf6x.jpg";
const agastyaamenitiess = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787047137/AGASTHYA_AMENITES_654X650_px_kgthp2.webp"
const overviewimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787227500/overview_hxi0e0.jpg";
const amenitiesimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917058/amenities_f3hofw.jpg";
const walthroughimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917341/walkthrough_af3ro6.jpg"
const floorplanimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/floorplan_ykmkuw.jpg"
const specficationsimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917324/specification_n5amb9.jpg"
const faqimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/faq_qfhcma.jpg"
const locationimgribbon = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917287/location_xezwuh.jpg"
import { ShieldCheck, Home, Eye, Trees } from "lucide-react";
import {
  Building2,
  Home as HomeIcon,
  Dumbbell,
  ToyBrick,
  TreePine,
  Trash2,
  BatteryCharging,
  Car,
  Camera,
  ArrowUpDown,
  Zap,
  Droplets,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const shortsVideos = [
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786013638/agastyavideo1_eskwty.mp4",
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786013699/agastyavideo2_fh8jpb.mp4",
];


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


/* =========================
   CONSTANTS
========================= */
const ITEMS_PER_ROW = 3;
const INITIAL_ROWS = 4;
const INITIAL_SHOW = ITEMS_PER_ROW * INITIAL_ROWS;

/* =========================
   STATIC DATA
========================= */
const videos = [
  { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Voora One Sea" },
  { src: "https://www.youtube.com/embed/iO4aofTnM4Q", title: "Commercial Construction" },
  { src: "https://www.youtube.com/embed/Id3OAOGsPIk", title: "Interior Design Showcase" },
  { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Villa Project Tour" },
  { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Project Walkthrough" },
];

const ribbonProjects = [
  {
    image: overviewimg,
    title: "Overview",
    href: "#overview",
  },
  {
    image: amenitiesimg,
    title: "Amenities",
    href: "#amenities",
  },
  {
    image: walthroughimg,
    title: "Walkthrough",
    href: "#walkthrough",
  },
  {
    image: locationimgribbon,
    title: "Location",
    href: "#faqs",
  },
  {
    image: floorplanimg,
    title: "Floor Plans",
    href: "#plan",
  },
  {
    image: specficationsimg,
    title: "Specifications",
    href: "#specification",
  },
  {
    image: faqimg,
    title: "FAQ",
    href: "#faqs",
  },
];



const stats = [
  { icon: "years", value: 30, suffix: "+", label: "Years of Excellence" },
  { icon: "projects", value: 50, suffix: "+", label: "Projects" },
  { icon: "clients", value: 6, suffix: "K+", label: "Happy Clients" },
  { icon: "awards", value: 9, suffix: "M", label: "sqft constructed" },
];

const highlights = [
  "Exclusive five-story residence with just one luxury apartment per floor for unmatched privacy.",
  "Located on the prestigious Pycrofts Garden Road, combining elegance with urban convenience.",
  "Spacious layouts and premium finishes that embody refined living.",
  "Thoughtfully crafted interiors designed to balance luxury and comfort.",
  "Nestled amidst lush greenery, offering a serene and peaceful environment.",
  "A perfect blend of exclusivity and convenience for discerning homeowners.",
];

const amenities = [
  { icon: Building2, title: "Grand Lobby" },
  { icon: HomeIcon, title: "Smart Homes" },
  { icon: Dumbbell, title: "Gymnasium" },
  { icon: ToyBrick, title: "Play Zone" },
  { icon: Trees, title: "Terrace Lawn" },
  { icon: Trash2, title: "Garbage Chute" },
  { icon: BatteryCharging, title: "EV Charging" },
  { icon: Car, title: "Visitor Parking" },
  { icon: Camera, title: "CCTV Security" },
  { icon: ArrowUpDown, title: "Express Lifts" },
  { icon: Zap, title: "Power Backup" },
  { icon: Droplets, title: "Water Solutions" },
];

const heroImages = [book1, book2, book3, book4, book5, book6];

const sectionEyebrowMap = {
  '.overview-section': 'OVERVIEW',
  '.amenities-section': 'LUXURY AMENITIES',
  '.video-section-full': 'Project Showcase',
  '.project-plans-content': 'Thoughtful Layouts',
  '.mpt-section': 'Site Master Plan',
  '.spec-section': 'Project Highlights',
  '.vn-section': 'PRESS COVERAGE',
  '.masterplan-info': 'PROJECT HIGHLIGHTS',
  '.faq-section': 'Need More Information?',
};

/* =========================
   ANIMATION VARIANTS
========================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

/* =========================
   COUNT UP COMPONENT
========================= */
function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const start = performance.now();
            const duration = 1400;
            const animate = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <strong ref={ref}>{val}{suffix}</strong>;
}

/* =========================
   MAIN COMPONENT
========================= */
export default function VooraAgastya() {
  const slides = [
    {
      image: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787836279/Agastya_uap2tb.jpg",
      mobileImage: "https://res.cloudinary.com/wdfwbagg/image/upload/v1787999516/Agastya_mob_dtaxlq.jpg",
      title: "Voora Agastya Banner",
    },
  ];

  // ✅ ALL HOOKS AT THE TOP — no code between them
  const location = useLocation();
  const masterContainerRef = useRef(null);
  const floorPlansRef = useRef(null);
  const floorPlansTimerRef = useRef(null);
  const masterTimerRef = useRef(null);
  const typingTimerRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [amenitiesPopup, setAmenitiesPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [activeTab, setActiveTab] = useState("Interior");
  const [currentImage, setCurrentImage] = useState(0);
  const [sent, setSent] = useState(false);
  const [currentNews, setCurrentNews] = useState(0);
  const [currentSpec, setCurrentSpec] = useState(0);

  const [popupImage, setPopupImage] = useState(null);
  /* =========================
     GALLERY DATA
  ========================= */
  const galleryData = {
    Interior: [InteriorImg1, InteriorImg2, InteriorImg3],
    Exterior: [ExteriorImg1, ExteriorImg2, ExteriorImg3, ExteriorImg4,],
    /* "Site Progress": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    ], */
  };

  const images = galleryData[activeTab];

  /* =========================
     NEWS DATA
  ========================= */
  const newsData = [
    { image: news1, title: "DT Next" },
    { image: news2, title: "The Hindu" },
    { image: news3, title: "Times of India" },
    { image: news4, title: "Economic Times" },
    { image: news5, title: "DT Next" },
    { image: news6, title: "The Hindu" },
    { image: news7, title: "Times of India" },
    { image: news8, title: "Economic Times" },
    { image: news9, title: "DT Next" },
    { image: news10, title: "The Hindu" },
    { image: news11, title: "The Hindu" },
    { image: news12, title: "Times of India" },
    { image: news13, title: "Economic Times" },
    { image: news14, title: "DT Next" },
    { image: news15, title: "DT Next" },
    { image: news16, title: "The Hindu" },
    { image: news17, title: "Times of India" },
    { image: news18, title: "Economic Times" },
    { image: news19, title: "DT Next" },
    { image: news20, title: "The Hindu" },
    { image: news21, title: "Times of India" },
  ];

  const newsExcerpts = [
    "Voora unveils ambitious seafront landmark on ECR redefining coastal living.",
    "Voora Group expands premium portfolio with One Sea, next to Mayajaal.",
    "Sales milestone: Voora One Sea crosses ₹500 Cr in early bookings.",
    "Voora wins 'Developer of the Year' for innovation and sustainability.",
    "Chennai's tallest seafront tower breaks ground at Voora One Sea.",
    "Voora partners with global architects for an iconic skyline statement.",
    "Industry leaders applaud Voora's transparent customer-first approach.",
    "Voora's pre-launch event draws record turnout from across South India.",
    "Smart-home tech and biophilic design highlight the One Sea blueprint.",
    "Voora Group celebrates two decades of building landmark homes.",
    "Investors place faith in Voora One Sea as ECR demand surges.",
    "Voora One Sea earns IGBC pre-certification for green building practices.",
    "Construction milestone unlocked: foundation work begins ahead of schedule.",
    "Voora hosts media walkthrough showcasing sea-facing residences.",
    "ECR property prices climb as Voora One Sea sets new benchmarks.",
    "Voora announces curated wellness amenities for One Sea residents.",
    "Industry roundtable: Voora outlines vision for future coastal projects.",
    "Voora One Sea opens experience centre with immersive 3D walkthroughs.",
    "Voora Group reaffirms commitment to on-time, on-quality delivery.",
  ];

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const newsMeta = (i) => {
    const day = ((i * 3) % 28) + 1;
    const month = monthNames[(i + 4) % 12];
    return { date: `${month} ${day}, 2025`, read: `${3 + (i % 4)} min read` };
  };

  const featured = newsData[currentNews];
  const sideOffset = (off) => newsData[(currentNews + off) % newsData.length];
  const featuredMeta = newsMeta(currentNews);
  const featuredExcerpt = newsExcerpts[currentNews % newsExcerpts.length];

  /* =========================
     SPECIFICATIONS
  ========================= */
  const specifications = [
    {
      title: "STRUCTURE",
      points: [
        "BRCC framed structure designed for earthquake resistance (Seismic Zone III) with pile foundation.",
        "Outer walls will be 200mm thick and inner partition walls will be 100mm thick solid blocks.",
        "Floor height (including slab) will be maintained at 3000mm.g.",
      ],
    },
    {
      title: "ELECTRICAL",
      points: [
        "Wires: Fire Retardant Low Smoke (FRLS) copper wire of BIS quality – Polycab .",
        "Switches: Modular boxes and switches – Havells/Crabtree or equivalent.",
        "Power Supply: 3-phase supply for all units with LT connection.",
        "Safety Devices: MCB & RCCB (Residual Current Circuit Breaker).",
        "Lighting: 2-way switches for fan and light points in all bedrooms.",
        "5 Amp: One in main switchboard, two in kitchen, three in bedrooms for TV/data.",
        "20 Amp: Air conditioners for living, dining & bedrooms.",
      ],
    },

    {
      title: "FLOOR FINISH",
      points: [
        "300x300mm premium anti-skid tile flooring in toilets.",
        "1200x600mm premium vitrified tile flooring in all bedrooms.",
        "1800x1200mm premium vitrified tile flooring in the living room, dining room & kitchen.",
        "Premium anti-skid tile flooring in balcony & utility areas.",
        "High-quality granite for entrance lobby flooring.",
      ],
    },
    {
      title: "WINDOWS & DOORS",
      points: [
        "Main Doors: Polished wood frame and laminated flush door shutter with high-security digital locks.",
        "Polished wood frame and laminated flush door shutter with anodized aluminium fittings.",
        "Main Doors: Polished wood frame and laminated flush door shutter with high-security digital locks.",
        "Polished wood frame and laminated flush door shutter with anodized aluminium fittings.",
      ],
    },
    {
      title: "WALL FINISH",
      points: [
        "Toilets: 600x1200mm premium ceramic tiles up to the grid false ceiling.",
        "Kitchen: Wall tile and platform are client’s scope (electrical points and water lines will be provided).",
        "Utility: Ceramic tiles will be provided up to parapet wall height.",
        "Lift wall in lobby: Full-body vitrified tiles (600x600mm) with granite jambs.",
      ],
    },
    {
      title: "PLUMBING FITTINGS",
      points: [
        "Sanitary Fittings: Jaquar/American Standard/Grohe or equivalent.",
        "CP Fittings: Jaquar/American Standard/Grohe or equivalent.",
        "EWC: Floor-mounted closet with cistern & health faucet.",
        "Washbasins: Granite countertop washbasins with bottle trap in all toilets.",
        "Water Supply: OHT with gravity pumping system.",
        "Shower & Spout: Hot and cold diverters for shower and spout.",
      ],
    },

  ];

  /* =========================
     FAQs
  ========================= */
  const faqs = [
    { question: "Where is the Project located?", answer: "Voora Agastya Heights is situated on Tondiarpet Main Road, right beside the Tondiarpet Metro Station. This prime location offers seamless connectivity across Chennai and is surrounded by reputed schools, hospitals, and shopping hubs for everyday convenience." },
    { question: "What types of apartments are available, and what are their size?", answer: " The project features spacious 3 BHK homes ranging from 1800 to 1928 sq. ft. and premium 4 BHK homes of 2207 sq. ft. Each apartment is thoughtfully designed to provide ample space, comfort, and modern living features." },
    { question: "What makes this project unique in North Chennai?", answer: " Its blend of smart home automation, high-quality finishes, and a location directly next to the metro makes it stand out in the region. Residents enjoy a modern lifestyle with the convenience of excellent connectivity." },
    { question: "What amenities are available?", answer: "Amenities include a gym, kids play area, landscaped terrace, yoga and meditation space, visitor parking, and more. Every facility is planned to enhance comfort, recreation, and community living." },
    { question: "What warranties are provided?", answer: "Voora Agastya Heights offers a 20-year structural warranty and a 10-year warranty on fittings. These assurances reflect the project’s commitment to quality and long-lasting value." },
    { question: "Is the project environment-friendly?", answer: "Yes, it includes eco-friendly features such as rainwater harvesting, organic waste recycling, water softening plants, and landscaped green areas. These sustainable measures ensure a healthier environment for residents." },
  ];

  /* =========================
     FUNCTIONS
  ========================= */
  const nextVideo = () => {
    if (videoIndex < videos.length - 2) setVideoIndex((prev) => prev + 1);
  };
  const prevVideo = () => {
    if (videoIndex > 0) setVideoIndex((prev) => prev - 1);
  };

  const scroll = (direction) => {
    if (masterContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 600;
      masterContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const nextGallerySlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevGallerySlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextNewsSlide = () => {
    setCurrentNews((prev) => (prev >= newsData.length - 1 ? 0 : prev + 1));
  };
  const prevNewsSlide = () => {
    setCurrentNews((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  };

  const nextSpecSlide = () => {
    if (currentSpec < specifications.length - 3) setCurrentSpec(currentSpec + 1);
    else setCurrentSpec(0);
  };
  const prevSpecSlide = () => {
    if (currentSpec > 0) setCurrentSpec(currentSpec - 1);
    else setCurrentSpec(specifications.length - 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 3000);
  };

  const startMasterAutoScroll = () => {
    const carousel = masterContainerRef.current;
    if (!carousel || masterTimerRef.current) return;

    masterTimerRef.current = window.setInterval(() => {
      if (!carousel) return;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      let stepAmount = 350;
      if (carousel.children.length > 0) {
        stepAmount = carousel.children[0].offsetWidth + 20;
      }

      if (carousel.scrollLeft >= maxScrollLeft - 1) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: stepAmount, behavior: "smooth" });
      }
    }, 3500);
  };

  const stopMasterAutoScroll = () => {
    if (masterTimerRef.current) {
      window.clearInterval(masterTimerRef.current);
      masterTimerRef.current = null;
    }
  };

  /* =========================
     EFFECTS
  ========================= */
  useEffect(() => {
    setCurrentImage(0);
  }, [location.pathname]);

  useEffect(() => {
    const sectionEntries = Object.entries(sectionEyebrowMap).map(([selector, text]) => ({
      selector,
      text,
      element: document.querySelector(selector),
    }));

    const sections = sectionEntries.filter((entry) => entry.element);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const activeSection = sections.find((entry) => entry.element === visibleEntry.target);

        if (!activeSection) return;

        if (typingTimerRef.current) {
          window.clearTimeout(typingTimerRef.current);
          typingTimerRef.current = null;
        }



        let charIndex = 0;
        const text = activeSection.text;

        const typeNextChar = () => {

          charIndex += 1;

          if (charIndex < text.length) {
            typingTimerRef.current = window.setTimeout(typeNextChar, 150);
          }
        };

        typeNextChar();
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: '0px 0px -15% 0px',
      }
    );

    sections.forEach((entry) => observer.observe(entry.element));

    return () => {
      if (typingTimerRef.current) {
        window.clearTimeout(typingTimerRef.current);
        typingTimerRef.current = null;
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const carousel = floorPlansRef.current;

    if (!carousel) return;

    const startAutoScroll = () => {
      if (floorPlansTimerRef.current) return;

      floorPlansTimerRef.current = window.setInterval(() => {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        const step = Math.round((carousel.clientWidth / 2) + 15);

        if (carousel.scrollLeft >= maxScrollLeft - 1) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: step, behavior: "smooth" });
        }
      }, 1800);
    };

    const stopAutoScroll = () => {
      if (floorPlansTimerRef.current) {
        window.clearInterval(floorPlansTimerRef.current);
        floorPlansTimerRef.current = null;
      }
    };

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, []);

  useEffect(() => {
    startMasterAutoScroll();

    return () => {
      stopMasterAutoScroll();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((p) => (p === heroImages.length - 1 ? 0 : p + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="one-sea-page">
      <div className="hero-navbar" />

      {/* ── Hero ── */}
      <div className="hero-banner hero-banner--mobile-auto">
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
                <picture>
                  {slide.mobileImage && <source media="(max-width: 768px)" srcSet={slide.mobileImage} />}
                  <img
                    className="slide-image"
                    src={slide.image}
                    alt={slide.title || "Voora Banner"}
                  />
                </picture>

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
      {/* ── Ribbon ── */}
      <section className="rg-section">
        <div className="rg-marquee">
          <div className="rg-track">
            {[...ribbonProjects, ...ribbonProjects].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="rg-card"
              >
                <div className="rg-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rg-image"
                  />
                </div>

                <div className="rg-info">
                  <h3 className="rg-title">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section id="overview" className="overview-section">
        <motion.div
          className="overview-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="overview-images" variants={imageVariant}>
            <img src={agastyaabout} alt="Voora One Sea" className="main-image" />
          </motion.div>

          <motion.div className="overview-content">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  High-Rise Residential Building <br className="br-only" />
                  <span className="accent">In North Chennai's Tondiarpet</span>
                </h2>
                <p>Voora Agastya is a premium luxury residential development located near the Tondiarpet.</p>
              </div>
            </div>

            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                { icon: ShieldCheck, title: "Ultimate Privacy" },
                { icon: Home, title: "Spacious Luxury Homes" },
                { icon: Eye, title: "Unmatched Views" },
                { icon: Trees, title: "Serene Green Surroundings" },
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

            <motion.button
              className="cta-btn"
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agastya View →
            </motion.button>
          </motion.div>
        </motion.div>
      </section>


      {popupImage && (
        <div
          className="project-plan-popup-overlay"
          onClick={() => setPopupImage(null)}
        >
          <div
            className="project-plan-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-plan-popup-close"
              onClick={() => setPopupImage(null)}
            >
              ✕
            </button>

            <img
              src={popupImage}
              alt="Floor Plan"
              className="project-plan-popup-image"
            />
          </div>
        </div>
      )}


      {/* ── Highlights Popup ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="highlights-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="highlights-popup"
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="highlights-close" onClick={() => setOpen(false)}>✕</button>
              <div className="highlights-header">
                <span>VOORA AGASTYA</span>
                <h2>Project Highlights</h2>
                <p>Luxury Living With Unmatched Views</p>
              </div>
              <div className="highlights-grid">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="highlight-item"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <p><img src={icon} alt="icon" />{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Amenities Section ── */}
      <section id="amenities" className="amenities-section">
        <div className="amenities-wrap">

          <div className="amenities-left">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  Amenities &amp; <br className="br-only" />
                  <span className="accent"> Features</span>
                </h2>
                <p>Designed to enhance comfort, convenience, and everyday living.</p>
              </div>
            </div>

            <motion.div
              className="amenities-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {amenities.slice(0, INITIAL_SHOW).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="amenity-card"
                    key={index}
                    variants={itemVariants}
                  >
                    <span className="amenity-icon"><Icon size={22} color="#bf953f" /></span>
                    <h3>{item.title}</h3>
                  </motion.div>
                );
              })}
            </motion.div>

            {amenities.length > INITIAL_SHOW && (
              <button
                className="view-more-btn"
                onClick={() => setAmenitiesPopup(true)}
              >
                View All {amenities.length} Amenities
                <span className="btn-arrow">▼</span>
              </button>
            )}
          </div>

          <div className="amenities-right-agastya">
            <img src={agastyaamenitiess} alt="Amenities" className="amenities-images" />
          </div>

        </div>
      </section>

      {/* ── Amenities Popup ── */}
      <AnimatePresence>
        {amenitiesPopup && (
          <motion.div
            className="amenities-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAmenitiesPopup(false)}
          >
            <motion.div
              className="amenities-popup"
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="amenities-popup-header">
                <div>
                  <span className="subtext-eyebrow">LUXURY AMENITIES</span>
                  <h2>All Amenities &amp; Features</h2>
                  <p>{amenities.length} World-Class Amenities</p>
                </div>
                <button
                  className="amenities-popup-close"
                  onClick={() => setAmenitiesPopup(false)}
                >
                  ✕
                </button>
              </div>

              <div className="amenities-popup-grid">
                {amenities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      className="amenity-card"
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                    >
                      <span className="amenity-icon"><Icon size={22} color="#bf953f" /></span>
                      <div className="amenity-card-text">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ── Master Plan ── */}
      <section id="master-plan" className="mpt-section">
        <div className="heading-main-center">
          <div data-reveal="true" className="active is-visible">
            <h2 className="section-title">
              Master <br className="br-only" />
              <span className="accent">Plans</span>
            </h2>
            <p className="vn-subtitle-center">
              Thoughtfully crafted layouts that optimize space, enhance natural
              ventilation, and elevate the experience of luxurious living.
            </p>
          </div>
        </div>

        <div className="mpt-grid">

          {/* LEFT COLUMN — 2 cards */}
          <div className="mpt-col">
            <div className="mpt-card">
              <div className="mpt-quote">"</div>
              <p>The master plan is exceptionally designed with wide internal roads, landscaped spaces, and excellent ventilation throughout.</p>
              <div className="mpt-footer">
                <div className="mpt-av mpt-av--gold">RK</div>
                <div>
                  <div className="mpt-stars">★★★★★</div>
                  <div className="mpt-name">Rajesh Kumar</div>
                  <div className="mpt-role">Home Buyer</div>
                </div>
              </div>
            </div>

            <div className="mpt-card">
              <div className="mpt-quote">"</div>
              <p>Every block is positioned thoughtfully, creating a perfect balance between privacy and community living.</p>
              <div className="mpt-footer">
                <div className="mpt-av">PS</div>
                <div>
                  <div className="mpt-stars">★★★★★</div>
                  <div className="mpt-name">Priya Sharma</div>
                  <div className="mpt-role">Resident</div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="mpt-image-cell">
            <img src={masterplan} alt="Master Plan" />
          </div>

          {/* RIGHT COLUMN — 2 cards */}
          <div className="mpt-col">
            <div className="mpt-card">
              <div className="mpt-quote">"</div>
              <p>Open spaces and green zones are beautifully integrated into the layout, making the entire community feel spacious.</p>
              <div className="mpt-footer">
                <div className="mpt-av mpt-av--gold">AS</div>
                <div>
                  <div className="mpt-stars">★★★★★</div>
                  <div className="mpt-name">Arun S</div>
                  <div className="mpt-role">Investor</div>
                </div>
              </div>
            </div>

            <div className="mpt-card">
              <div className="mpt-quote">"</div>
              <p>The planning reflects luxury living standards with seamless access to amenities and recreational areas.</p>
              <div className="mpt-footer">
                <div className="mpt-av">MR</div>
                <div>
                  <div className="mpt-stars">★★★★★</div>
                  <div className="mpt-name">Meena R</div>
                  <div className="mpt-role">Property Owner</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Video Amenities ── */}
      <section className="vs-sections" id="video-stories">
        <div className="vs-container">

          {/* Left Content */}
          <div className="vs-info">
            <div className="vs-heading">
              <div className="heading-main">
                <div data-reveal="true" className="active is-visible">

                  <h2 className="section-title">
                    Luxury in Every
                    <br />
                    <span className="accent">Frame</span>
                  </h2>
                  <p className="vs-desc">
                    Explore the vision behind One Sea through captivating videos that bring premium coastal living to life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="vs-gallery">
            <VideoCarousel videos={shortsVideos} />
          </div>
        </div>
      </section>


      {/* ── Specifications ── */}
      <section className="spec-section">
        <div className="heading-main-center">
          <div data-reveal="true" className="active is-visible">
            <h2 className="section-title">
              Specifi
              <span className="accent">cations</span>
            </h2>
            <p className="vn-subtitle-center">
              Premium quality materials and modern engineering standards crafted for luxury living.
            </p>
          </div>
        </div>

        <div className="spec-slider-wrapper">
          <button className="spec-btn left" onClick={prevSpecSlide}>&#10094;</button>

          <div className="spec-container">
            {specifications.slice(currentSpec, currentSpec + 3).map((item, index) => {
              const cardId = currentSpec + index;
              return (
                <div className="spec-card" key={cardId} style={{ height: "100%" }}>
                  <h3>{item.title}</h3>
                  <div style={{
                    maxHeight: expandedCards[cardId] ? "none" : "180px",
                    overflow: "hidden",
                    position: "relative",
                    marginBottom: "15px",
                  }}>
                    <ul>
                      {item.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                    {!expandedCards[cardId] && item.points.length > 3 && (
                      <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        height: "50px",
                        background: "linear-gradient(transparent, rgba(255,255,255,1))",
                      }} />
                    )}
                  </div>
                  {item.points.length > 3 && (
                    <span
                      style={{ color: "rgb(141 87 225)", cursor: "pointer", fontWeight: "bold", textDecoration: "underline", marginTop: "auto", alignSelf: "flex-start" }}
                      onClick={() => setExpandedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }))}
                    >
                      {expandedCards[cardId] ? "Read Less" : "Read More"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <button className="spec-btn right" onClick={nextSpecSlide}>&#10095;</button>
        </div>
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
                <div className="gallery-card" key={index}><img src={img} alt={`Exterior Gallery ${index + 1}`} /></div>
              ))}
            </div>
          </div>
          <div className="gallery-marquee-row reverse">
            <div className="gallery-marquee-track">
              {[...galleryData.Interior, ...galleryData.Interior, ...galleryData.Interior, ...galleryData.Interior, ...galleryData.Interior].map((img, index) => (
                <div className="gallery-card" key={index}><img src={img} alt={`Interior Gallery ${index + 1}`} /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── News & Media ── */}
      <section className="vn-section">
        <div className="vn-shell">
          <div className="vn-head">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  News & <br className="br-only" />
                  <span className="accent">Media</span>
                </h2>
                <p className="vn-subtitle">Voora One Sea featured across India's leading publications and real-estate journals.</p>
              </div>
              <div className="vn-meta-bar">
                <div className="vn-counter">
                  <strong>{String(currentNews + 1).padStart(2, "0")}</strong>
                  <span>/ {String(newsData.length).padStart(2, "0")}</span>
                </div>
                <div className="vn-nav">
                  <button className="vn-nav-btn" onClick={prevNewsSlide} aria-label="Previous article">&#10094;</button>
                  <button className="vn-nav-btn" onClick={nextNewsSlide} aria-label="Next article">&#10095;</button>
                </div>
              </div>
            </div>
          </div>

          <div className="vn-grid">
            <article className="vn-featured" key={currentNews}>
              <div className="vn-featured-img" style={{ backgroundImage: `url(${featured.image})` }}>
                <span className="vn-tag vn-tag--featured">★ FEATURED</span>
                <span className="vn-index">{String(currentNews + 1).padStart(2, "0")}</span>
              </div>
              <div className="vn-featured-body">
                <div className="vn-pub">
                  <span className="vn-pub-dot" />
                  {featured.title}
                </div>
                <h3 className="vn-featured-title">{featuredExcerpt}</h3>
                <div className="vn-featured-meta">
                  <span>📅 {featuredMeta.date}</span>
                  <span className="vn-dot-sep">•</span>
                  <span>⏱ {featuredMeta.read}</span>
                </div>
                <button className="vn-read-btn" onClick={() => setPopupImage(featured.image)}>Read Full Article <span className="vn-read-arrow">→</span></button>
              </div>
            </article>

            <div className="vn-stack">
              {[1, 2, 3].map((off) => {
                const item = sideOffset(off);
                const idx = (currentNews + off) % newsData.length;
                const meta = newsMeta(idx);
                const excerpt = newsExcerpts[idx % newsExcerpts.length];
                return (
                  <button key={`${idx}-${off}`} className="vn-side" onClick={() => setCurrentNews(idx)}>
                    <div className="vn-side-img" style={{ backgroundImage: `url(${item.image})` }}>
                      <span className="vn-side-index">{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="vn-side-body">
                      <span className="vn-side-pub">{item.title}</span>
                      <p className="vn-side-title">{excerpt}</p>
                      <span className="vn-side-date">{meta.date} <span className="vn-side-arrow">→</span></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="vn-wall">
            <div className="vn-wall-track">
              {[...newsData, ...newsData].map((item, idx) => (
                <span key={idx} className="vn-wall-item">
                  <span className="vn-wall-bullet" />
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


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
              className="vs-track"
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

      {/* ── FAQs ── */}
      <section id="faqs" className="faq-section">
        <div className="faq-body">
          <div className="faq-col-left">
            <img src={locationimg} alt="Location" className="faq-image" />
          </div>
          <div className="faq-col-right">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  Frequently Asked <br className="br-only" />
                  <span className="accent">Questions</span>
                </h2>
                <p>Find quick answers to the most common questions about the project.</p>
              </div>
            </div>
            <div className="faq-scroll">
              {faqs.map((faq, index) => (
                <details className="faq-card" key={index}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Hero Stats ── */}
      {/* ── Contact / Hero Stats ── */}
      <section className="hero" id="top">
        <div className="container hero-inner">
          <SiteVisitForm
            apiEndpoint={SITE_VISIT_ENDPOINTS.VooraAgastya}
            projectName="Voora Agastya"
          />
          <div className="hero-visual">
            <img src={heroImages[currentImage]} alt="project" />
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div className="hero-stat" key={s.label} style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                  <strong><CountUp target={s.value} suffix={s.suffix} /></strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── Image Popup Modal ── */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            className="vn-image-popup-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setPopupImage(null)}
          >
            <motion.div
              className="vn-image-popup-content"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="vn-image-popup-close" onClick={() => setPopupImage(null)}>
                &times;
              </button>
              <img src={popupImage} alt="Full Article" className="vn-image-popup-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
