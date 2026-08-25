import VideoCarousel from "../components/VideoCarousel";
import "./VooraWestside.css";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const icon = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/fav1_nlyrnx.png";
import React, { useState, useEffect, useRef } from "react";
import SiteVisitForm from "../components/SiteVisitForm";
import { SITE_VISIT_ENDPOINTS } from "../config/siteVisitEndpoints";
const locationimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917401/WestSiteMap_nuvmyx.jpg";
const hero2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/hero5_reuppp.webpp";
const about = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917312/oneseaabout_noilcf.webp";
const plan1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787306906/westsideplan1_qnwevg.jpg";
const plan2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787306903/westsideplan2_nbqbtw.jpg";
const plan3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787306900/westsideplan3_oohkxc.jpg";
const plan4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787306897/westsideplan4_wpjgyn.jpg";
const plan5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787306894/westsideplan5_letxzs.jpg";
const plan6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787306866/westsideplan6_mkyj66.jpg";
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
const InteriorImg3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917357/west3_m9afhm.jpg";
const ExteriorImg1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917350/west4_jkqs3j.jpg";
const ExteriorImg2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917349/west5_bbgpry.jpg";
const ExteriorImg4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917361/west7_vfyejb.jpg";
const ExteriorImg5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917348/west8_yndi96.jpg";
const ExteriorImg6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917356/west9_rbpvbm.jpg";
const aminities1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917368/west11_sv6gry.jpg";
const aminities2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917363/west12_mq7yjp.jpg";
const aminities3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917359/west13_tuwg2n.jpg";
const aminities4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917369/west14_f3qjfz.jpg";
const aminities6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917367/west16_rasf8l.jpg";
const aminities9 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917377/west19_ij0uml.jpg";
const aminities10 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917377/west20_frtsvi.jpg";
const aminities11 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917381/west21_icsegh.jpg";
const aminities12 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917390/west22_ttuwxm.jpg";
const aminities13 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917381/west23_ekuvr4.jpg";
const aminities14 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917388/west24_utp5ee.jpg";
const aminities15 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917390/west25_qxngv9.jpg";
const aminities16 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917391/west26_op36av.jpg";
const aminities19 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917393/west29_pkozne.jpg";
const aminities22 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917401/west32_ph8tov.jpg";
const aminities23 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917399/west33_xdhgu3.jpg";
const masterplan = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917292/Master-Layout_c7v2vw.jpg";
const book1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044239/ONE_SEA_CTA_POP-UP_534X415_px_km6hro.webp";
const book2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book2_xs2p6a.png";
const book3 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1785917264/book3_naly9e.png';
const book4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917263/book4_ynq55g.webp"
const book5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787031544/WESTSIDE_CTA_POP-UP_534X415_PX_fni06m.webp";
const book6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044825/OCEAN_27_CTA_POP-UP_534X415_px_a3x5xq.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
const herowestside = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786598856/westsideelevation_609x550px_vj1kxt.jpg";
const westsiteamenities = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787032598/WESTSIDE_AMENITIES_654X650_PX_dps4fa.webp";
import { KeyRound, Trees, Sparkles, LayoutPanelTop } from "lucide-react";
const overviewimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787227500/overview_hxi0e0.jpg";
const amenitiesimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917058/amenities_f3hofw.jpg";
const walthroughimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917341/walkthrough_af3ro6.jpg"
const floorplanimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/floorplan_ykmkuw.jpg"
const specficationsimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917324/specification_n5amb9.jpg"
const faqimg = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/faq_qfhcma.jpg"
const locationimgribbon = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917287/location_xezwuh.jpg"
import {
  Waves,
  Play,
  Users,
  Dumbbell,
  Trophy,
  Sun,
  Zap,
  Camera,
  Car,
  Recycle,
} from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";

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
  { src: "https://www.youtube.com/embed/BCkP2JGxTJs?si=7utxZ65YtZ0ZZgfF", title: "Voora Westsite" },
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
    href: "#location",
  },
  {
    image: floorplanimg,
    title: "Floor Plans",
    href: "#floorplans",
  },
  {
    image: specficationsimg,
    title: "Specifications",
    href: "#specifications",
  },
  {
    image: faqimg,
    title: "FAQ",
    href: "#faq",
  },
];


const stats = [
  { icon: "years", value: 30, suffix: "+", label: "Years of Excellence" },
  { icon: "projects", value: 50, suffix: "+", label: "Projects" },
  { icon: "clients", value: 6, suffix: "K+", label: "Happy Clients" },
  { icon: "awards", value: 9, suffix: "M", label: "sqft constructed" },
];

const highlights = [
  "Contemporary layouts with abundant daylight",
  "Peaceful living amidst city bustle",
  "110 premium stylish residences designed",
  "Smart amenities for effortless comfort",
  "Smart homes with keyless security",
  "Close to IT and business hubs"
];

const amenities = [
  { icon: Waves, title: "Swimming Pool" },
  { icon: Play, title: "Kids' Play Area" },
  { icon: Users, title: "Residents Hall" },
  { icon: Dumbbell, title: "Gym" },
  { icon: Trophy, title: "Futsal Turf" },
  { icon: Sun, title: "Solar Energy" },
  { icon: Zap, title: "Standby Power" },
  { icon: Camera, title: "CCTV Camera" },
  { icon: Car, title: "EV Support" },
  { icon: Recycle, title: "Eco Recycling" },
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
export default function VooraWestside() {
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

  const [selectedImage, setSelectedImage] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  /* =========================
     GALLERY DATA
  ========================= */
  const galleryData = {
    Interior: [InteriorImg3],
    Exterior: [ExteriorImg1, ExteriorImg2, ExteriorImg4, ExteriorImg5, ExteriorImg6],
    "Site Progress": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    ],
    Amenities: [
      aminities1, aminities2, aminities3, aminities4, aminities6,
      aminities9, aminities10, aminities11, aminities12,
      aminities13, aminities14, aminities15, aminities16,
      aminities19, aminities22, aminities23,
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
      title: "STRUCTURE",
      points: [
        "R. C. C. frame structure designed for earthquake resistance - Seismic Zone 3.",
        "Outer walls with 8” thickness and inner partition walls with 4” thickness.",
      ],
    },
    {
      title: "ELECTRICAL FITTINGS",
      points: [
        "DG backup for 2 BHK – 750watts single phase complete lighting fan and 6A socket load with TV through ACCL.",
        "DG backup for 3 BHK – 1000watts single phase complete lighting fan and 6A socket load with TV through ACCL.",
      ],
    },

    {
      title: "FLOORING & WALL FINISHING",
      points: [
        "Flooring with quality 4’ X 2’ vitrified tiles for the foyer, living, bedrooms, kitchen and dining areas with 4” skirting.",
        "Toilet tiles are a blend of imported digital tiles.",
        "Toilet flooring will be of firm foot – grip tiles.",
        "Wash area will be of ceramic tiles, provided up to the parapet wall height or will be in line with kitchen dado.",
        "20mm. black granite slab will be provided for kitchen cooking platform with 8 x12 ceramic dado (2' above counter)",
      ],
    },
    {
      title: "DOORS",
      points: [
        "Main door frame will be of polished Teak wood frame with both sides laminated flush door shutter with Godrej highly secured digital locks.",
        "Other doors will be of good quality wooden frames with both sides laminated flush door shutter.",
        "All door fittings will be SS fittings.",
      ],
    },
    {
      title: "COMMON AREA FLOORING",
      points: [
        "Ground floor entrance and lift lobbies will be of imported tiles.",
        "Typical floor lift lobbies will be of imported tiles.",
        "Staircase will be of restile/equivalent flooring.",
        "Corridors will be of vitrified/ceramic",
      ],
    },
    {
      title: "PLUMBING AND SANITARY FITTINGS",
      points: [
        "All ceramic fittings will be of EWC and wash basins will be of white Hindware or equivalent.",
        "Provision for hot water connection in individual heater of 15ltrs. capacity for each bathroom.",
        "Hot and cold mixers for shower and tap in each bathroom will be of Hindware CP fittings or equivalent fittings.",
        "Concealed plumbing lines from the overhead tank for each floor.",
        "Single bowl stainless steel sink with drain board in the kitchen.",
        "Concealed copper wiring with Legrand/Crabtree or equivalent modular switches.",
        "HT connection with internal metering for units.",
        "Separate meter for lighting in common areas, lift and pumps.",
        "3-phase will be provided for each flat.",
        "15-amps power plug sockets will be provided for water heaters in the bathrooms and for air conditioners in the bedrooms.",
        "One 5-amp socket will be provided for each room, except in the living room in addition to a multiple socket with 3 outlets will be provided for connection to TV etc.",
        "2-way switches will be provided for fans and lights in all bedrooms.",
        "Two 5-amp sockets and one 15-amp socket will be provided in the kitchen.",
        "One bell point will be provided.",
        "Fan points in living room, dining and bedrooms.",
        "Light points, in living, dining, bedrooms, kitchen, washing area and balcony.",
      ],
    },
    {
      title: "PAINT",
      points: [
        "Ceiling painting will be of OBD over putty.",
        "Putty with acrylic emulsion for interior walls will be of Asian Paints or equivalent.",
        "Enamel paints for MS Grills.",
        "Exterior walls painted with weather-shield paint, Asian Paints or equivalent.",
        "Melamine matte finishes paint for main door.",
        "Enamel paint for other doors.",
      ],
    },

    {
      title: "WINDOWS AND VENTILATORS",
      points: [
        "MS Grills (painted) will be provided for all windows.",
        "Windows and ventilators will be of UPVC casement fitted with 4mm. thick glass as per builder’s choice.",
      ],
    },

  ];

  /* =========================
     FAQs
  ========================= */
  const faqs = [
    { question: "What types of apartments in Ramapuram, Chennai are available at Voora Westside?", answer: "Voora Westside offers thoughtfully designed 2 BHK and 3 BHK apartments in Ramapuram, Chennai. Our project focuses on “zero dead space” design to ensure you get the most usable area in your new home." },
    { question: "I'm looking for a new apartment in Ramapuram. Is your project ready to move in?", answer: "Voora Westside is a premier new apartment project in Ramapuram. It is currently under construction, with possession scheduled for January 2026, making it an excellent opportunity for early investment in a modern property." },
    { question: "Yes, our 3 BHK flats for sale in Ramapuram are specifically designed for a luxury lifestyle. The Voora Westside project includes a swimming pool, gym, futsal turf, and EV charging stations, among other premium amenities." },
    { question: "What makes Ramapuram apartments a good choice for families and professionals?", answer: "Ramapuram apartments offer a strategic advantage due to their close proximity to major IT hubs like DLF IT Park, top-tier schools like PSBB, and leading hospitals like MIOT International, making the daily commute convenient for everyone." },
    { question: "How many units are available in Voora Westside?", answer: "The development consists of 110 exclusive 2 and 3 BHK apartments, fostering a vibrant and close-knit community." },
    { question: "Where can I find a premium flat for sale in Ramapuram, Chennai?", answer: "You can find your ideal home at Voora Westside. Our project offers the perfect blend of a prime location and luxury living, making it a top choice for anyone looking for a flat for sale in Ramapuram, Chennai." },
    { question: "Why should I choose a Voora apartment over other apartments for sale in Ramapuram?", answer: "When you choose a Voora apartment in Ramapuram, you are investing with a developer with over 30 years of trust and experience. We offer unique features like no common walls for enhanced privacy and a 20-year structural warranty." },
    { question: "What are the size and specifications of the 3 BHK flats in Ramapuram by Voora?", answer: " Our 3 BHK flats in Ramapuram range from 1,377 to 1,685 sq. ft. They come with vitrified tile flooring, a teak wood main door frame, and premium fittings, ensuring a high-quality living experience." },
    { question: "Do Voora's Ramapuram apartments come with smart features?", answer: "Absolutely. Given Ramapuram’s rapid infrastructure growth and its status as a major employment hub, investing in a flat in Ramapuram, Chennai, especially in a new project like Voora Westside, holds strong potential for property value appreciation." },
    { question: "Is investing in a flat in Ramapuram, Chennai a good financial decision?", answer: "Yes, all our Ramapuram apartments at the Westside project are smart-home ready. They feature highly secure keyless digital locks, providing modern convenience and enhanced security for your family." },
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
        const step = Math.max(carousel.clientWidth / 2, 220);

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

    let scrollFrame = null;
    const handleScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = null;
        const heroElement = document.querySelector(".hero-banner") || document.querySelector(".one-sea-hero");
        const threshold = heroElement ? heroElement.offsetHeight / 2 : 400;
        const shouldPause = window.scrollY > threshold;

        playersRef.current.forEach((player) => {
          if (!player) return;
          try {
            if (typeof player.pauseVideo === "function" && typeof player.playVideo === "function" && typeof player.getPlayerState === "function") {
              const state = player.getPlayerState();
              if (shouldPause && state === 1) {
                player.pauseVideo();
              } else if (!shouldPause && state !== 1 && state !== 3) {
                player.playVideo();
              }
            }
          } catch (err) {
            console.error(err);
          }
        });
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
      {/* <div className="hero-banner">
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

        <div
          className="luxury-stats-ribbon"
          aria-label="Company statistics"
        >
        </div>
      </div> */}

      <HeroCarousel />

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
            <img src={herowestside} alt="Voora One Sea" className="main-image" />
          </motion.div>

          <motion.div className="overview-content">
            <div className="heading-main">
              <div data-reveal="true" className="active is-visible">
                <h2 className="section-title">
                  Smart Living in on a

                  <span className="accent">Strategic Location</span>
                </h2>
                <p>Voora Westside is a premium luxury residential development located near Porur</p>
              </div>
            </div>

            <motion.div className="feature-grid" variants={containerVariants}>
              {[
                { icon: KeyRound, title: "Keyless Smart Living" },
                { icon: Trees, title: "Calm City Living" },
                { icon: Sparkles, title: "Advanced Lifestyle Amenities" },
                { icon: LayoutPanelTop, title: "Contemporary Design" },
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
              Westsite View →
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
                <span>VOORA Westside</span>
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
                    <span className="amenity-icon">
                      <Icon size={22} color="#bf953f" />
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

          <div className="amenities-right-agastya">
            <img src={westsiteamenities} alt="Amenities" className="amenities-image" />
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
                      <span className="amenity-icon">
                        <Icon size={22} color="#bf953f" />
                      </span>

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
            <div className="single-video-wrapper">
              <iframe
                src={videos[0].src}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="westside-walkthrough-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Floor Plans ── */}
      <section className="project-plans-section" id="plan">
        <div className="project-plans-wrapper">

          {/* Left Content */}
          <div className="project-plans-content">
            <div className="heading-mains">
              <div data-reveal="true" className="active is-visible">

                <h2 className="section-title">
                  Project
                  <br className="br-only" />
                  <span className="accent"> Plan</span>
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
                  const step = Math.max(carousel.clientWidth / 2, 220);

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
      <section className="hero" id="top">
        <div className="container hero-inner">
          <SiteVisitForm
            apiEndpoint={SITE_VISIT_ENDPOINTS.VooraWestside}
            projectName="Voora Westside"
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
