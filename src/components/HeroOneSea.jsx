import VideoCarousel from "../components/VideoCarousel";
import React, { useState, useEffect, useRef } from "react";
import "./HeroOneSea.css";
import "./CompletedProjects.css";
import "./Contact.css"; // Added to fix the layout for the contact form section at the bottom
import "./About.css"; // Added to fix layout for the about section
const heroBg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786008732/ocea3_y05ami.jpg"; // Cinematic background image
const InteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917281/Interior-img1_nghodc.jpg";
const InteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917282/Interior-img2_ncv5hu.jpg";
const InteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917283/Interior-img3_ejdl36.jpg";
const ExteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-1_ajfw04.jpg";
const ExteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-2_w1dvwu.jpg";
const ExteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-3_yyefc7.jpg";
const ExteriorImg4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-4_zi3mun.jpg";
const ExteriorImg5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917269/Exterior-img-5_nnanue.png";
const ExteriorImg6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787297804/Exterior-img-6_bg3rfd.jpg";
const ExteriorImg7 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917269/Exterior-img-7_myes9h.jpg";
const aminities1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917060/Aminities-1_auj5ky.jpg";
const aminities2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Aminities-2_nwdgw3.jpg";
const aminities3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917059/Aminities-3_eu2lim.jpg";
const aminities4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917060/Aminities-4_vhgxmq.jpg";
const aminities5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917060/Aminities-5_t0jjjp.jpg";
const aminities6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917060/Aminities-6_cbpbsu.jpg";
const aminities7 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917061/Aminities-7_mp8f3t.jpg";
const aminities8 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917062/Aminities-8_pdx8on.jpg";
const aminities9 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917062/Aminities-9_sycypy.jpg";
const aminities10 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917063/Aminities-10_gz0u52.jpg";
const aminities11 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917067/Aminities-11_xys5px.jpg";
const aminities12 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917064/Aminities-12_pla4ir.jpg";
const aminities13 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917063/Aminities-13_p5wfqv.jpg";
const aminities14 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917064/Aminities-14_qhh6h6.jpg";
const aminities15 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917064/Aminities-15_qcjdup.jpg";
const aminities16 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917064/Aminities-16_lii0fb.jpg";
const aminities17 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917065/Aminities-17_wqvpef.jpg";
const aminities18 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917065/Aminities-18_xwaujs.jpg";
const aminities19 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917065/Aminities-19_etk8lp.jpg";
const aminities20 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917066/Aminities-20_zcqxfg.png";
const aminities21 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917066/Aminities-21_zlmlp2.jpg";
const aminities22 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917066/Aminities-22_nqzxhf.jpg";
const aminities23 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917067/Aminities-23_br86fq.png";
const aminities24 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917318/oneseaImg1_wx3act.webp";
const aminities25 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787219033/Built-img1_nan12l.webp";
const aminities26 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917317/oneseaImg3_kafe7t.webp";
const aminities27 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917318/oneseaImg4_u4f2rt.webp";
const overviewonesea = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917318/oneseaover_jpsi5z.webp";
const aboutImg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917274/highabout_uxxmwk.webp";
import { ArrowUpRight, ShieldCheck, Award, X, ArrowRight, MapPin, Building2, Square, Home, Calendar, Download, Star, Quote, PlayCircle, Waves, Trees } from "lucide-react";
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
  FaChevronRight
} from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IcMaterials, IcConstruction, IcSustainability, IcClock, IcResidential, IcCommercial, IcLocation, IcShield, IcSupport } from "./Icons";
import { Link } from "react-router-dom";
import SiteVisitForm from "./SiteVisitForm";
import { SITE_VISIT_ENDPOINTS } from "../config/siteVisitEndpoints";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import RibbonGallery from "./HeroRibbon";
const  aboutvoora = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917274/highabout_uxxmwk.webp";

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
const mobile3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917288/mobile3_zugtvx.webp";
const seaponvandu = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917322/Ponvandu-web-design-BG-scaled_swrjxy.png";
import PonvanduSlider from "./PonvanduSlider";
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

const videos = [
  { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Voora One Sea" },
  { src: "https://www.youtube.com/embed/iO4aofTnM4Q", title: "Commercial Construction" },
  { src: "https://www.youtube.com/embed/Id3OAOGsPIk", title: "Interior Design Showcase" },
  { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Villa Project Tour" },
  { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Project Walkthrough" },
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

export default function HeroOneSea() {
  const masterContainerRef = useRef(null);
  const masterTimerRef = useRef(null);

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

  const stopMasterAutoScroll = () => {
    if (masterTimerRef.current) {
      window.clearInterval(masterTimerRef.current);
      masterTimerRef.current = null;
    }
  };

  useEffect(() => {
    startMasterAutoScroll();
    return () => stopMasterAutoScroll();
  }, []);
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
    Interior: [InteriorImg1, InteriorImg2, InteriorImg3],
    Exterior: [ExteriorImg1, ExteriorImg2, ExteriorImg3, ExteriorImg4, ExteriorImg5, ExteriorImg6, ExteriorImg7],
    "Site Progress": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    ],
    Amenities: [
      aminities1, aminities2, aminities3, aminities4, aminities5, aminities6,
      aminities7, aminities8, aminities9, aminities10, aminities11, aminities12,
      aminities13, aminities14, aminities15, aminities16, aminities17, aminities18,
      aminities19, aminities20, aminities21, aminities22, aminities23, aminities24, aminities25, aminities26, aminities27
    ],
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
        <PonvanduSlider />
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
            <img src={overviewonesea} alt="Voora One Sea" className="main-image" />
          </motion.div>

          <motion.div className="overview-content">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  Enjoy Sea-Facing Living at<br className="br-only" />
                  <span className="accent"> ECR</span>
                </h2>
                <p>Experience the Perks of Living Above the Ordinary with Voora One Sea.</p>
              </div>
            </div>

            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                { icon: MapPin, title: "Located on ECR at Kanathur" },
                { icon: Building2, title: "Spread Across 4 Towers" },
                { icon: Waves, title: "Sea & Backwater Views" },
                { icon: Home, title: "2 & 3 BHK Luxury Homes" },
                { icon: ShieldCheck, title: "25+ Safety Features" },
                { icon: Trees, title: "85% Open Space" },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div key={i} variants={fadeUp} className="feature">
                    <Icon size={18} />
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
              One Sea View →
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
              {[...galleryData.Interior, ...galleryData.Exterior, ...galleryData.Interior, ...galleryData.Exterior].map((img, index) => (
                <div className="gallery-card" key={index}><img src={img} alt={`Gallery ${index + 1}`} /></div>
              ))}
            </div>
          </div>
          <div className="gallery-marquee-row reverse">
            <div className="gallery-marquee-track">
              {[...galleryData.Amenities, ...galleryData.Amenities].map((img, index) => (
                <div className="gallery-card" key={index}><img src={img} alt={`Amenities ${index + 1}`} /></div>
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

      {/* ── Walkthrough ── */}
      <section id="walkthrough" className="video-section-full">
        <div className="container">
          <div className="video-section">
            <div className="heading-main-center">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  Explore Our <br className="br-only" />
                  <span className="accent"> Developments</span>
                </h2>
                <p className="text-dark">Explore exceptional developments that redefine modern living and investment value.</p>
              </div>
            </div>

            <button className="video-nav video-prev" onClick={prevVideo} disabled={videoIndex === 0}>❮</button>

            <div className="video-slider">
              <div
                className="video-track"
                style={{
                  transform: `translateX(-${window.innerWidth <= 768 ? videoIndex * 100 : videoIndex * 50}%)`,
                }}
              >
                {videos.map((video, index) => (
                  <div className="video-item" key={index}>
                    <div className="video-card">
                      <iframe
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="video-nav video-next" onClick={nextVideo} disabled={videoIndex >= videos.length - 2}>❯</button>
          </div>
        </div>
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
