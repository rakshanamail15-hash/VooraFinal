import "./VooraOneSea.css";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const icon = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/fav1_nlyrnx.png";
import { useState, useEffect, useRef } from "react";

import SiteVisitForm from "../components/SiteVisitForm";
import { SITE_VISIT_ENDPOINTS } from "../config/siteVisitEndpoints";
const locationimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917287/Location-Image_k3lefr.jpg";
const about = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917312/oneseaabout_noilcf.webp";
const plan1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305384/onseaplan1_siz91x.webp";
const plan2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305381/onseaplan2_oogfo5.webp";
const plan3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305378/onseaplan3_pdjhfq.webp";
const plan4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305374/onseaplan4_mrkcoc.webp";
const plan5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305315/onseaplan5_v2jb7l.webp";
const plan6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305312/onseaplan6_km9qli.webp";
const plan7 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305309/onseaplan7_bw2mpm.webp";
const plan8 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787305307/onseaplan8_nben7j.webp";
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
const overviewonesea = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786597828/one_sea_elevation_609x550px_k4du9w.jpg";
const InteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917281/Interior-img1_nghodc.jpg";
const InteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917282/Interior-img2_ncv5hu.jpg";
const InteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917283/Interior-img3_ejdl36.jpg";
const ExteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-1_ajfw04.jpg";
const ExteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-2_w1dvwu.jpg";
const ExteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-3_yyefc7.jpg";
const ExteriorImg4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917268/Exterior-img-4_zi3mun.jpg";
// import ExteriorImg5 from "../assets/image/Exterior-img-5.jpg";
const ExteriorImg6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787297804/Exterior-img-6_bg3rfd.jpg";
const ExteriorImg7 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917269/Exterior-img-7_myes9h.jpg";
// import aminities1 from "../assets/image/Aminities-1.jpg";
const aminities1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044516/ONE_SEA_AMENITIES_654X650_px_h9j1nj.webp";
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
const masterplan = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917292/Master-Layout_c7v2vw.jpg";
const book1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044239/ONE_SEA_CTA_POP-UP_534X415_px_km6hro.webp";
const book2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book2_xs2p6a.png";
const book3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book3_naly9e.png';
const book4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787045486/HOME_PAGE_EXPLORE_-_AGASTYA_osze4j.webp";

const book5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787031544/WESTSIDE_CTA_POP-UP_534X415_PX_fni06m.webp";
const book6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044825/OCEAN_27_CTA_POP-UP_534X415_px_a3x5xq.webp"
import Contact from "../components/Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
const overviewimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787227500/overview_hxi0e0.jpg";
const amenitiesimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917058/amenities_f3hofw.jpg";
const walthroughimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917341/walkthrough_af3ro6.jpg"
const floorplanimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/floorplan_ykmkuw.jpg"
const specficationsimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917324/specification_n5amb9.jpg"
const faqimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/faq_qfhcma.jpg"
const locationimgribbon = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917287/location_xezwuh.jpg"
import {
  PersonStanding,
  Trophy,
  Waves,
  Building2,
  Users,
  Bike,
  Trees,
  Dog,
  Fish,
  Flower2,
  Footprints,
  Dumbbell,
  Landmark,
  Umbrella,
  Sprout,
  Droplets,
  Puzzle,
  Play,
  MapPin,
  Home,
} from "lucide-react";

const shortsVideos = [
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786014012/oneseavideo1_dotydg.mp4",
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786014021/oneseavideo2_ybvbe9.mp4",
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786014010/oneseavideo3_z7vifj.mp4",
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786014006/oneseavideo4_ptx3bn.mp4",
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786014009/oneseavideo5_zr0adp.mp4",
  "https://res.cloudinary.com/wdfwbagg/video/upload/v1786014006/oneseavideo6_j9k1fz.mp4",
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
  // { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Villa Project Tour" },
  // { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Project Walkthrough" },
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
  "Located on ECR at Kanathur",
  "1-acre natural lake inside the community",
  "Total Land Area 11.06 Acres",
  "Grand Club spread across 60,000 sq. ft",
  "Tallest tower in ECR with 41 floors",
  "100% eco-sensitive with 1,000+ trees",
  "Spread Across 4 Towers",
  "French-inspired design with 100+ exotic plants",
  "2 & 3 BHK - (1112 sq.ft to 1584 sq.ft)",
  "Largest project in ECR with 1039 apartments in Phase 1",
  "Fastest Handover Fit-out completion in just 2.5 years*",
  "First project in Chennai offering both sea and backwater views",
  "Unparalleled 40+ world-class amenities",
  "85% Open Space",
  "265+ quality checkpoints before handover",
  "Exclusive sea-view café—the only one in ECR",
  "25+ Safety Features",
  "Sky Amphitheatre",
  "20-year structure warranty—a first in India",
  "2.7-acres podium space",
  "10-year warranty on fittings and features",
  "Grand Entrance Lobby",
  "IGBC Pre-Certified Gold-Rated Green Homes",
  "Fastest elevator with the speed of 2.5 secs per floor",
];
const amenities = [
  { icon: PersonStanding, title: "Foot Entry" },
  { icon: Building2, title: "Buggy Bay" },
  { icon: Flower2, title: "Yoga Pavilion" },
  { icon: Trees, title: "Relax Zone" },
  { icon: Flower2, title: "Bamboo Ave" },
  { icon: Footprints, title: "Healing Path" },
  { icon: Waves, title: "Lap Pool" },
  { icon: Waves, title: "Kids Pool" },
  { icon: Trophy, title: "Athletic Court" },
  { icon: Trophy, title: "Tether Zone" },
  { icon: Bike, title: "Cycling Track" },
  { icon: Users, title: "Social Pavilion" },
  { icon: Play, title: "Children's Play Area" },
  { icon: Dog, title: "Dog Walk Area" },
  { icon: Droplets, title: "Water Archway" },
  { icon: Sprout, title: "Planting Island" },
  { icon: PersonStanding, title: "Meditation Pavilion" },
  { icon: Landmark, title: "Floating Deck" },
  { icon: Fish, title: "Bio Pond" },
  { icon: Flower2, title: "Aroma Garden" },
  { icon: Landmark, title: "Feature Sculpture" },
  { icon: Waves, title: "Lounge Pool" },
  { icon: Trophy, title: "Mini Soccer Field" },
  { icon: Trophy, title: "Cricket Practice Net" },
  { icon: Dumbbell, title: "Jogging Track" },
  { icon: Users, title: "Sports Viewing Gallery" },
  { icon: Puzzle, title: "Chess Board Area" },
  { icon: Umbrella, title: "Sand Play Area" },
  { icon: Waves, title: "Natural Pond (1 Acre)" },
  { icon: Building2, title: "Block Entry Plaza" },
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
export default function VooraOneSea() {
  const slides = [
    {
      videoId: "byoTnV_YaTM",
      title: "Voora Project Showcase 1",
    },
  ];

  // ✅ ALL HOOKS AT THE TOP — no code between them
  const location = useLocation();
  const iframeRefs = useRef([]);
  const playersRef = useRef([]);
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
  const [typedText, setTypedText] = useState("");
  const [popupImage, setPopupImage] = useState(null);

  const [vsStart, setVsStart] = useState(0);
  const [vsPerView, setVsPerView] = useState(typeof window !== "undefined" && window.innerWidth <= 991 ? 1 : 2);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVsPerView(window.innerWidth <= 991 ? 1 : 2);
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const vsMaxStart = Math.max(0, shortsVideos.length - vsPerView);
  const vsPrev = () => setVsStart((s) => Math.max(0, s - 1));
  const vsNext = () => setVsStart((s) => Math.min(vsMaxStart, s + 1));

  /* =========================
     GALLERY DATA
  ========================= */
  const galleryData = {
    Interior: [InteriorImg1, InteriorImg2, InteriorImg3, about],
    Exterior: [ExteriorImg1, ExteriorImg2, ExteriorImg3, ExteriorImg4, ExteriorImg6, ExteriorImg7],
    "Site Progress": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    ],
    Amenities: [
      aminities1, aminities2, aminities3, aminities4, aminities5, aminities6,
      aminities7, aminities8, aminities9, aminities10, aminities11, aminities12,
      aminities13, aminities14, aminities15, aminities16, aminities17, aminities18,
      aminities19, aminities20, aminities21, aminities22, aminities23,
    ],
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
    { image: news12, title: "Times of India" },
    { image: news13, title: "Economic Times" },
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
      title: "PLUMBING FITTINGS",
      points: [
        "Sanitary fittings - Jaguar or equivalent.",
        "CP Fittings - Jaguar or equivalent.",
        "EWC - Floor mounted closet with cistern and health faucet.",
        "Wash basin - Granite countertop washbasins with bottle trap in all toilets.",
        "Shower spout - Hot and cold diverters for shower and spout.",
        "Single bowl SS sink will be provided in Utility only.",
        "Pneumatic pumping system will be provided for water lines.",
        "Water meter will be provided.",
      ],
    },
    {
      title: "FIRE FIGHTING SERVICES",
      points: [
        "Fire sprinklers will be provided inside apartment, corridors and basement/ground floor car park.",
        "Smoke detectors/heat detectors with fire alarms will be provided inside the apartment.",
        "Fire hydrants and fire hose reels will be provided in all floor lobby and external yard.",
        "Public address system will be provided.",
        "Fire refuge areas will be provided in each towers.",
      ],
    },
    {
      title: "STRUCTURE",
      points: [
        "RCC framed structure - Designed for earthquake resistance (Seismic Zone III) with pile foundation. Outer walls will be 165mm/200mm thick and inner partition walls will be 100mm thick RCC walls.",
        "Floor Height (Including Slab) - Will be maintained at 2950mm",
      ],
    },
    {
      title: "ELECTRICAL SERVICES",
      points: [
        "Solar power - Provided for all common area lighting.",
        "Safety equipment - Lightning arresters will be provided in all towers.",
        "Transformers with RMU units for each tower.",
      ],
    },
    {
      title: "FLOOR FINISH",
      points: [
        "600x1200mm - Premium vitrified tile flooring in the living room, dining room and all bedrooms.",
        "300x300mm - Premium anti-skid tile flooring in toilets.",
        "600x600mm Anti-skid premium tiles flooring in utility and balcony.",
        "600x600mm - Premium vitrified tile flooring in corridor and lobby area.",
        "High quality granite for entrance lobby flooring.",
        "Full body vitrified tiles for Staircase and landings area.",
      ],
    },
    {
      title: "DOORS",
      points: [
        "Main doors - Polished wood frame and laminated flush-door shutter with highly secured digital locks.",
        "Bedroom doors - Polished wood frame and laminated flush-door shutter with anodised fittings.",
        "Toilet doors - Polished wood frame with waterproof flush door shutters with anodized fittings.",
      ],
    },
    {
      title: "WALL FINISH",
      points: [
        "Toilets – 300x600mm premium ceramic tiles upto 7'6\".",
        "Kitchen - Kitchen wall tile and platform on client scope (we will provide electrical points and water lines).",
        "Utility - Ceramic tiles will be provided up to the parapet wall height.",
        "Lift wall in lobby – Full body vitrified tiles of size 600x600mm and jambs with granite finish.",
        "Lift wall in entrance lobby – High quality granite/marble.",
      ],
    },
    {
      title: "PAINT FINISHES",
      points: [
        "Internal walls - Finished with 2 coats of putty, 1 coat of primer & 2 coats of premium emulsion paint.",
        "Exterior walls - Finished with 1 coat of primer and superior quality texture finish with color as per architect design.",
        "Ceiling finish - Finished with 2 coats of putty, 1 coat of primer and 2 coats of premium distemper.",
      ],
    },
    {
      title: "JOINERIES",
      points: [
        "Living, bedroom, kitchen - UPVC sliding windows having clear toughened glass, with sill granite.",
        "Toilets - UPVC ventilators with provision for exhaust fan and openable shutter for ODU access.",
      ],
    },
    {
      title: "SECURITY",
      points: [
        "24x7 CCTV surveillance.",
        "Video door phone.",
        "Smart access control.",
        "Security cabin at entrance.",
      ],
    },
    {
      title: "LIFTS",
      points: [
        "High-speed automatic elevators.",
        "Dedicated service lift.",
        "Emergency alarm system.",
        "Premium branded lifts.",
      ],
    },
    {
      title: "WATER SUPPLY",
      points: [
        "Underground sump provided.",
        "Hydro pneumatic system.",
        "Rainwater harvesting.",
        "Water treatment plant.",
      ],
    },
    {
      title: "PARKING",
      points: [
        "Covered car parking.",
        "EV charging provision.",
        "Visitor parking area.",
        "Wide driveway access.",
      ],
    },
    {
      title: "AMENITIES",
      points: [
        "Swimming pool.",
        "Gymnasium.",
        "Kids play area.",
        "Clubhouse facilities.",
      ],
    },
    {
      title: "ELECTRICALS",
      points: [
        "Wires - Fire Retardant Low Smoke (FRLS) copper wire of a quality BIS, polycab or equivalent.",
        "Switches - Modular boxes and switches of Havells/Crabtree or equivalent.",
        "3-phase supply for all units with LT connection.",
        "Safety device - MCB & RCCB (Residual Current Circuit Breaker).",
        "2-way switches for fan and light points in all bedrooms.",
        "5 amp - One socket will be provided in all main switch boards and two nos in kitchen.",
        "15 amp - Provided for washing machine and two nos. in kitchen.",
        "Foot lamp - Provided in all bedrooms.",
        "TV - Point provided in living and bedrooms with 3 nos. of 5-amp sockets.",
        "Data - Point provided in living and bedrooms.",
        "Air conditioner - 20-amp socket and control switch will be provided for living, dining and bedrooms.",
        "Exhaust fan - 5-amp socket will be provided in all toilets.",
        "Chimney - 5Amp socket will be provided in kitchen with exhaust hole.",
        "Geyser - 15-amp socket will be provided in all toilets.",
        "Aquaguard - 5Amp socket and water line will be provided above the kitchen sink.",
        "Power Backup - 1 BHK-500W, 2 BHK-750W, 3 BHK - 1000W through ACCL.",
        "Power backup for common area - 100% power backup for all common areas like STP, water softener plant, lift and other services.",
      ],
    },
    {
      title: "COMMON FACILITIES",
      points: [
        "Lifts - Adequate passenger lifts, stretcher lift/service lift will be provided for each tower.",
        "STP - Will be provided for treating 100% sewage effluent and treated water will be used for toilet flushing and gardening purpose.",
        "Water softener plant will be provided.",
        "Garbage chute - Automated garbage chutes will be provided for each tower.",
        "OWC - Organic Waste Convertor will be provided.",
        "Piped gas - The reticulated gas supply will be provided with metering system.",
        "Surveillance - 24/7 CCTV surveillance system will be installed in all common areas at ground floor only.",
        "EV charging station for car and bike will be provided.",
        "DTH - Provision for data and TV will be provided for each apartment.",
        "Rainwater Harvesting System will be provided.",
        "Landscape - Green belt will be provided through out the site.",
      ],
    },
  ];

  /* =========================
     FAQs
  ========================= */
  const faqs = [
    { question: "Where is the Project located?", answer: "The project is located in Kanathur, ECR (East Coast Road), Chennai, offering a prime location with stunning views and easy access to key areas." },
    { question: "What types of apartments are available, and what are their size?", answer: "The project offers spacious 2 & 3 BHK homes, with sizes ranging from 1100 sq. ft. to 1600 sq. ft., providing ample living space for families of different needs." },
    { question: "What makes this project unique in Chennai?", answer: "This is the first project in Chennai that offers both sea and backwater views, along with the tallest tower in ECR, standing at 41 floors. It is also the only project in the area that features a sea-view café, adding a luxurious touch to the living experience." },
    { question: "What amenities are available?", answer: "Residents can enjoy 40+ world-class amenities, including a grand 60,000 sq. ft. clubhouse, a one-acre natural pond within the community, and smart home integrations in all units to enhance convenience and modern living." },
    { question: "What warranties are provided?", answer: "The project offers a 20-year structural warranty, which is a first-of-its-kind initiative in India, along with a 10-year warranty on fittings and features, ensuring long-term durability and quality assurance." },
    { question: "How environmentally friendly is the community?", answer: "The project is designed as a 100% environmentally sensitive community, featuring over 1000 trees, efficient water conservation methods, energy-saving initiatives, and proper waste management systems to promote sustainable living." },
    { question: "What types of apartments and flats in ECR does Voora offer for sale?", answer: "Voora's new project offers a range of luxury apartments in ECR, including spacious 1, 2, and 3 BHK flats for sale. Each unit is designed for modern living in Chennai's most scenic corridor." },
    { question: "Are these genuine sea-facing apartments in Chennai?", answer: "Absolutely. This is a premier sea-facing apartment project, featuring the tallest tower on the ECR. Most of our flats offer stunning, direct sea views or tranquil backwater views, providing a genuine coastal living experience." },
    { question: "Is this one of the new residential projects in ECR, Chennai?", answer: "Yes, this is one of the most anticipated new projects in ECR. As an upcoming project, it features the latest in construction technology, smart home integration, and contemporary design, making it a prime investment." },
    { question: "Are there eco-friendly features in the project?", answer: "Yes, the project includes eco-friendly landscaping, natural ponds, green spaces, and IGBC Gold-rated sustainable development features." },
    { question: "What makes these ECR luxury apartments stand out?", answer: "Beyond the prime location, our ECR luxury apartments by Voora stand out due to their IGBC Gold-Rated eco-conscious design, premium interior finishes, a 20-year structural warranty, and an exclusive 40,000 sq. ft. clubhouse." },
    { question: "Why should I trust a Voora residential project in ECR?", answer: "With over 30 years of experience in Chennai's real estate, Voora has a legacy of trust and quality. Choosing this residential project in ECR means you are investing with a reputable developer known for timely delivery and excellence in construction." },
    { question: "Where can I find beach view apartments in Chennai for sale with good amenities?", answer: "You've found them. Voora's project on the ECR is the definitive answer for anyone searching for beach view apartments in Chennai for sale. We combine breathtaking views with a comprehensive list of lifestyle amenities unmatched in the area." },
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
        const gap = parseFloat(window.getComputedStyle(carousel).gap || "24");
        stepAmount = carousel.children[0].offsetWidth + gap;
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

        const text = activeSection.text;
        let index = 0;

        setTypedText('');

        const typeNextChar = () => {
          if (index >= text.length) {
            typingTimerRef.current = window.setTimeout(() => {
              setTypedText('');
              typingTimerRef.current = null;
            }, 1200);
            return;
          }

          setTypedText(text.slice(0, index + 1));
          index += 1;
          typingTimerRef.current = window.setTimeout(typeNextChar, 60);
        };

        typingTimerRef.current = window.setTimeout(typeNextChar, 120);
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
        const step = Math.max(carousel.clientWidth / 4, 220);

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

  useEffect(() => {
    let active = true;

    const loadPlayer = () => {
      if (!active) return;
      slides.forEach((slide, index) => {
        const iframe = iframeRefs.current[index];
        if (!iframe) return;

        if (playersRef.current[index] && typeof playersRef.current[index].destroy === "function") {
          try {
            playersRef.current[index].destroy();
          } catch (e) {
            console.error(e);
          }
        }

        const player = new window.YT.Player(iframe, {
          events: {
            onReady: (event) => {
              if (active) {
                playersRef.current[index] = event.target;
                event.target.playVideo();

                const heroElement = document.querySelector(".hero-banner") || document.querySelector(".one-sea-hero");
                const threshold = heroElement ? heroElement.offsetHeight / 2 : 400;
                if (window.scrollY > threshold) {
                  event.target.pauseVideo();
                }
              }
            },
          },
        });
      });
    };

    if (window.YT && window.YT.Player) {
      loadPlayer();
    } else {
      let script = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!script) {
        script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }

      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousCallback) {
          try { previousCallback(); } catch (e) { console.error(e); }
        }
        loadPlayer();
      };
    }

    const handleScroll = () => {
      const heroElement = document.querySelector(".hero-banner") || document.querySelector(".one-sea-hero");
      const threshold = heroElement ? heroElement.offsetHeight / 2 : 400;
      const shouldPause = window.scrollY > threshold;

      playersRef.current.forEach((player) => {
        if (!player) return;
        try {
          if (typeof player.pauseVideo === "function" && typeof player.playVideo === "function") {
            if (shouldPause) {
              player.pauseVideo();
            } else {
              player.playVideo();
            }
          }
        } catch (err) {
          console.error(err);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      active = false;
      window.removeEventListener("scroll", handleScroll);
      playersRef.current.forEach((player) => {
        if (player && typeof player.destroy === "function") {
          try {
            player.destroy();
          } catch (e) {
            console.error(e);
          }
        }
      });
      playersRef.current = [];
    };
  }, []);

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="one-sea-page">
      <div className="hero-navbar" />

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
                <video
                  className="slide-image"
                  src="https://res.cloudinary.com/wdfwbagg/video/upload/v1786014537/landingVideo_io88dy.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
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
          <motion.div className="overview-image" variants={imageVariant}>
            <img src={overviewonesea} alt="Voora One Sea" className="main-image" />
          </motion.div>

          <motion.div className="overview-content">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  Enjoy Your Sea Facing View <br className="br-only" />
                  <span className="accent">At ECR With Voora</span>
                </h2>
                <p>Voora ONE SEA is a premium luxury residential development located near the coastline.</p>
              </div>
            </div>

            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                { icon: MapPin, title: "Located on ECR at Kanathur" },
                { icon: Building2, title: "Spread Across 4 Towers" },
                { icon: Waves, title: "Sea & Backwater Views" },
                { icon: Home, title: "2 & 3 BHK Luxury Homes" },
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

            <motion.button
              className="cta-btn"
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              One Sea View →
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
                <span>VOORA ONE SEA</span>
                <h2>Project Highlights</h2>
                <p>Luxury Living With Unmatched Sea Views</p>
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
                    <span className="amenity-icon">
                      <Icon size={24} />
                    </span>

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

          <div className="amenities-right">
            <img src={aminities1} alt="Amenities" className="amenities-image" />
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
                    >
                      <span className="amenity-icon">
                        <Icon size={24} />
                      </span>

                      <div className="amenity-card-text">
                        <h3>{item.title}</h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Walkthrough ── */}
      <section id="walkthrough" className="video-section-full">
        <div className="container">
          <div className="video-section">
            <div className="heading-main-center">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  Explore Our <br className="br-only" />
                  <span className="accent">Signature Developments</span>
                </h2>
              </div>
            </div>

            <button className="video-nav video-prev" onClick={prevVideo} disabled={videoIndex === 0}>❮</button>

            <div className="video-slider">
              <div
                className="video-track"
                style={{
                  transform: `translateX(-${window.innerWidth <= 991 ? videoIndex * 100 : videoIndex * 50}%)`,
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

      {/* ── Floor Plans ── */}
      <section className="project-plans-section" id="plan">
        <div className="project-plans-wrapper">

          {/* Left Content */}
          <div className="project-plans-content">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  PROJECT
                  <br className="br-only" />
                  <span className="accent"> PLANS</span>
                </h2>
              </div>
            </div>

            <p className="project-plans-description">
              Explore meticulously crafted layouts designed to maximize
              natural light, ventilation, functionality, and luxury living
              experiences for modern families.
            </p>

            {/* Replaced arrows with button */}
            <motion.button
              className="cta-btn"
              onClick={() => {
                document
                  .getElementById("top")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Consultation →
            </motion.button>
          </div>

          {/* Right Carousel */}
          <div className="project-plans-slider">
            <div
              className="project-plans-track"
              ref={floorPlansRef}
              onMouseEnter={() => {
                if (floorPlansTimerRef.current) {
                  window.clearInterval(floorPlansTimerRef.current);
                  floorPlansTimerRef.current = null;
                }
              }}
              onMouseLeave={() => {
                const carousel = floorPlansRef.current;
                if (!carousel || floorPlansTimerRef.current) return;

                floorPlansTimerRef.current = window.setInterval(() => {
                  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
                  const firstCard = carousel.children[0];
                  const gap = parseFloat(window.getComputedStyle(carousel).gap || "0");
                  const step = firstCard ? firstCard.offsetWidth + gap : 220;

                  if (carousel.scrollLeft >= maxScrollLeft - 1) {
                    carousel.scrollTo({ left: 0, behavior: "smooth" });
                  } else {
                    carousel.scrollBy({ left: step, behavior: "smooth" });
                  }
                }, 1800);
              }}
            >
              <div className="project-plan-card" onClick={() => setPopupImage(plan1)}>
                <img src={plan1} alt="Plan 1" />
              </div>

              <div className="project-plan-card" onClick={() => setPopupImage(plan2)}>
                <img src={plan2} alt="Plan 2" />
              </div>

              <div className="project-plan-card" onClick={() => setPopupImage(plan3)}>
                <img src={plan3} alt="Plan 3" />
              </div>

              <div className="project-plan-card" onClick={() => setPopupImage(plan4)}>
                <img src={plan4} alt="Plan 4" />
              </div>

              <div className="project-plan-card" onClick={() => setPopupImage(plan5)}>
                <img src={plan5} alt="Plan 5" />
              </div>

              <div className="project-plan-card" onClick={() => setPopupImage(plan6)}>
                <img src={plan6} alt="Plan 6" />
              </div>

              <div className="project-plan-card" onClick={() => setPopupImage(plan7)}>
                <img src={plan7} alt="Plan 7" />
              </div>

              <div className="project-plan-card" onClick={() => setPopupImage(plan8)}>
                <img src={plan8} alt="Plan 8" />
              </div>
            </div>
          </div>

        </div>
      </section>
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
            <div className="ts-viewport" style={{ overflow: "hidden", width: "100%" }}>
              <div
                className="vs-track"
                onMouseEnter={stopMasterAutoScroll}
                onMouseLeave={startMasterAutoScroll}
                style={{
                  display: "flex",
                  width: `${(shortsVideos.length / vsPerView) * 100}%`,
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: "transform",
                  transform: `translateX(-${(vsStart / shortsVideos.length) * 100}%)`,
                }}
              >
                {shortsVideos.map((video, index) => (
                  <div
                    className="ts-cell"
                    key={index}
                    style={{
                      width: `${100 / shortsVideos.length}%`,
                      flex: `0 0 ${100 / shortsVideos.length}%`,
                      boxSizing: "border-box",
                      padding: "0 12px",
                      margin: 0
                    }}
                  >
                    <div className="vs-card" style={{ width: "100%", margin: 0, minWidth: "0", flex: "none" }}>
                      <video
                        src={video}
                        controls
                        loop
                        muted
                        style={{ width: "100%", height: "350px", borderRadius: "18px", background: "#000", objectFit: "fill" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ts-dots" style={{ marginTop: "30px", position: "relative", zIndex: 10 }}>
              <button
                onClick={vsPrev}
                disabled={vsStart === 0}
              >
                ‹
              </button>

              {Array.from({ length: vsMaxStart + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`dot ${vsStart === i ? "active" : ""}`}
                  onClick={() => setVsStart(i)}
                />
              ))}

              <button
                onClick={vsNext}
                disabled={vsStart === vsMaxStart}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ── Specifications ── */}
      <section className="spec-section" id="specification">
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
                <button className="vn-read-btn">Read Full Article <span className="vn-read-arrow">→</span></button>
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
                </div>
              </div>
            </div>

            <p className="vs-desc">
              Explore meticulously crafted layouts designed to maximize
              natural light, ventilation, functionality, and luxury living
              experiences for modern families.
            </p>
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
      <Contact projectName="Voora One Sea" />

    </div>
  );
}