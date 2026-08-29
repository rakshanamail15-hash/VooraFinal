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
  FaCheckCircle,
  FaRegEye,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useRef } from 'react';

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
// import residentialcompleted from "../assets/image/residentialcompleted.webp";
const residentialcompleted = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787047612/RESIDENTIAL_COMPLETED_PROJECTS_-_HERO_BANNER_ahbtho.webp"
const completedmobile = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787899256/completedmobile_ctoqtz.png";
const trm = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/TRM_nltdhd.webp";
import CompletedProjects from "../components/CompletedProjects";

// Mapping of project names to custom description paragraphs for the view modal
// Mapping of project names to custom description paragraphs for the view modal
const descriptionMap = {
  "Voora TRM Court": `Located on Dr. Ranga Road in the culturally vibrant neighborhood of Mylapore. Exclusive development with only five luxurious “villaments.” Spacious 3 BHK flat for sale in Mylapore residences spanning 2520 sq. ft. for villa‑style living. Each home occupies an entire floor for optimal privacy and spaciousness. Two large balconies offering scenic views of Mylapore’s greenery and landmarks. Designed to blend elegance, comfort, and fine living. A serene setting in a central location for the best of both worlds.`,
  "Voora Narayana": `Voora Narayana presents a collection of spacious 3 & 4 BHK residences meticulously crafted to balance comfort, style, and practicality. Ranging from 2,073 to 2,465 sq. ft., these homes are thoughtfully designed with quality finishes, functional layouts, and an inviting ambience, making every moment at home truly special. The five‑story building with stilt parking seamlessly blends elegance and convenience. Situated in Purasaiwakkam, a well‑connected and vibrant neighbourhood, Voora Narayana places you within easy reach of schools, hospitals, shopping centres, and dining establishments. The building’s smart design maximises natural light and ventilation, creating a warm, harmonious living environment for its residents.`,
  "Voora Prakash": `Voora Prakash, located on the renowned Vijayaraghava Road in T. Nagar, is a premium residential development spanning 25,000 sq. ft. Designed for families and individuals seeking both comfort and convenience, the project offers spacious homes within a stilt + 4‑floor layout. Nestled in a vibrant neighbourhood, Voora Prakash offers easy access to schools, hospitals, shopping centres, and public transport, ensuring a seamless and connected lifestyle. With its thoughtful design and prime location, it strikes the perfect balance between modern living and urban accessibility, making it an ideal home for those who desire both peace and convenience in the heart of the city.`,
  "Voora Villa 96": `Voora Villa 96, nestled in Injambakkam near the vibrant East Coast Road (ECR) in Chennai, presents an exclusive collection of 96 independent villas designed for contemporary living. Spanning across 230,000 sq. ft., this residential development ensures each home offers a private sanctuary of comfort and elegance. With spacious interiors that invite natural light and a serene atmosphere, Voora Villa 96 provides a peaceful retreat without compromising on convenience. Located just moments away from top schools, healthcare centres, and shopping malls, it’s the ideal choice for families seeking a perfect blend of tranquillity and connectivity.`,
  "Voora Oswar Garden": `Voora Vidyasagar Oswal Garden is a sprawling residential complex nestled in the vibrant neighbourhood of Korukkupet. Spanning an expansive 9,73,840 sq. ft., this thoughtfully designed development features 18 blocks with stilt + 4 floors, offering a perfect blend of space and comfort for modern families. Designed with families in mind, the complex combines contemporary functionality with a strong sense of community. The spacious layout ensures privacy while fostering connectivity through well‑maintained green spaces and shared amenities. Residents can easily access essential services like schools, hospitals, and shopping areas, making everyday living both convenient and comfortable. More than just a residential complex, Voora Vidyasagar Oswal Garden is a thriving community where urban living meets peaceful surroundings, offering the perfect balance of comfort, accessibility, and a sense of belonging.`,
  "Voora Saraswathi": `Voora Saraswathi, located on the vibrant Hindi Prachar Sabha Road in T. Nagar, spans 22,000 sq. ft. across two blocks with a stilt + 4‑floor design. This residential complex offers a perfect blend of modern living and tranquillity in the heart of Chennai. With spacious homes designed for comfort and functionality, residents enjoy easy access to schools, shopping centres, transport hubs, and other essential amenities, ensuring convenience at every step. Whether seeking a peaceful retreat or a dynamic urban lifestyle, Voora Saraswathi is the ideal choice for families seeking the best of both worlds.`,
  "Voora Gitanjali": `Situated on Bazullah Road, T. Nagar, Voora Gitanjali is a residential complex offering 21,700 sq. ft. of thoughtfully designed living space. With a stilt and four upper floors, this property stands as a landmark address in one of Chennai’s most sought‑after neighbourhoods, known for its vibrant character and seamless connectivity. Voora Gitanjali provides the best of both worlds—a quiet, serene living environment amidst the hustle and bustle of the city. Its central location ensures easy access to key amenities such as schools, healthcare centres, shopping hubs, and public transport, making everyday living convenient and stress‑free. As a trusted name in T. Nagar’s residential community, Voora Gitanjali symbolizes accessible and comfortable living in a prime location, blending urban convenience with a peaceful lifestyle.`,
  "Voora Vijayasree": `Nestled in Chennai’s bustling T. Nagar, Voora Vijayasree is a unique development offering vibrant commercial spaces and serene residential living under one roof. The ground floor features premium shop spaces, perfectly positioned to benefit from T. Nagar’s energetic commercial pulse. Above, the thoughtfully designed residential units provide calm with modern conveniences and elegant architecture. This iconic development spans 35,000 sq. ft., offering an unmatched combination of connectivity and comfort in the heart of the city.`,
  "Voora Pritvi": `Located along the scenic East Coast Road (ECR) in the serene neighbourhood of Kottivakkam, Voora Pritvi is a thoughtfully designed residential apartment spanning an impressive 65,000 sq. ft. With its Ground + 1 floor structure, this complex combines modern aesthetics with functional layouts to create a peaceful and comfortable living environment. Voora Pritvi is crafted to provide open, airy spaces with abundant natural light, making it an ideal choice for those seeking a relaxed lifestyle away from the city’s hustle. Its thoughtfully planned layout ensures privacy and tranquillity, while its prime location offers seamless connectivity to essential amenities, including schools, shopping centres, and ECR’s coastal attractions. Offering a balanced lifestyle, Voora Pritvi perfectly blends the charm of suburban living with the convenience of urban proximity.`,
  "Voora Radha Homes": `Located along the scenic East Coast Road (ECR) in the serene neighbourhood of Kottivakkam, Voora Radha Homes offers luxurious residential living with thoughtful design and spacious layouts. This development provides a tranquil environment while maintaining easy access to schools, shopping centres, and coastal attractions, ensuring a ba blends the charm of suburban living with the convenience of urban proximity.`
};

const projectData = [
  {
    name: "Voora Ashwin",
    type: "Residential",
    location: "T. Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooraashwin,
  },
  {
    name: "Voora TRM Court",
    type: "Residential",
    location: "Mylapore, Chennai",
    Acres: "4.2 Acres",
    Units: "320 Units",
    BHK: "2 & 3 BHK Apartments",
    Price: "₹1 CR Onwards",
    completion: "Q1 2026",
    img: trm,
  },
  {
    name: "Voora Narayana",
    type: "Residential",
    location: "Purasaiwakkam, Chennai",
    Acres: "5.8 Acres",
    Units: "410 Units",
    BHK: "3 & 4 BHK SEA=Facing Apartments",
    Price: "₹2.3 Crore Onwards",
    completion: "Q3 2025",
    img: vooranarayana,
  },
  {
    name: "Voora Prakash",
    type: "Residential",
    location: "Vijayaraghava Road, T. Nagar, Chennai",
    Acres: "3.9 Acres",
    Units: "280 Units",
    BHK: "2 & 3 BHK",
    Price: "₹1500 Per Sq.ft",
    completion: "Q2 2026",
    img: vooraprakash,
  },
  {
    name: "Voora Villa 96",
    type: "Residential",
    location: "ECR – Sholinganallur, Chennai",
    Acres: "7.1 Acres",
    Units: "600 Units",
    BHK: "4BHK",
    Price: "₹11 CR Onwards",
    completion: "Q4 2025",
    img: vooravilla96,
  },
  {
    name: "Voora Vidyasagar Oswal Garden",
    type: "Residential",
    location: "Phase -I Korukkupet, Chennai",
    Acres: "7.1 Acres",
    Units: "600 Units",
    BHK: "4BHK",
    Price: "₹2.7 CR Onwards",
    completion: "Q4 2025",
    img: vooravidyasagar,
  },
  {
    name: "Voora Saraswathi",
    type: "Residential",
    location: "Hindi Prachar Sabha Road, T. Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorasaraswathi,
  },

  {
    name: "Voora Gitanjali",
    type: "Residential",
    location: "T.Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooragithanjali,
  },

  {
    name: "Voora Vijayasree",
    type: "Residential",
    location: "Dr.B.N. Road, T. Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooravijayasree,
  },

  {
    name: "Voora Pritvi",
    type: "Residential",
    location: "ECR, Kottivakkam, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorapritvi,
  },

  {
    name: "Voora Radha Homes",
    type: "Residential",
    location: "Harrington Road, Chetpet, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: vooraradhahomes,
  },

  {
    name: "Voora J K Tower",
    type: "Commercial",
    location: "T.Nagar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorajktower,
  },

  {
    name: "Voora Sreela Terrace",
    type: "Commercial",
    location: "Adyar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorasreela,
  },

  {
    name: "Voora Ocean27",
    type: "Residential",
    location: "Adyar, Chennai",
    Acres: "6.5 Acres",
    Units: "544 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    Price: "₹7199 Per Sq.ft",
    completion: "Q4 2025",
    img: voorasreela,
  },
];

const filters = ["All Projects", "Residential"];

const PAGE_TYPE = "Residential";




export default function CompletedProject() {
  const [filter, setFilter] = useState("All Projects");
  const trackRef = useRef(null);

  const residentialOnly = projectData.filter((p) => p.type === PAGE_TYPE);

  const visible = residentialOnly.filter(
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

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [showView, setShowView] = useState(false);
  const [viewProject, setViewProject] = useState(null);

  const openBrochure = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const openView = (project) => {
    setViewProject(project);
    setShowView(true);
  };

  const closeView = () => {
    setShowView(false);
    setViewProject(null);
  };

  return (
    <>

      {/* Navbar Area */}
      <div className="hero-navbar">
        {/* Navbar component already fixed here */}
      </div>

      {/* HERO SECTION */}
      <section className="upcoming-hero">
        {/* Real <img> so the full banner (with baked-in text) is visible
            at the image's natural aspect ratio without cropping */}
        <picture>
          <source media="(max-width: 768px)" srcSet={completedmobile} />
          <img
            src={residentialcompleted}
            alt="Residential Completed Projects"
            className="upcoming-hero-img"
          />
        </picture>
      </section>
      <CompletedProjects />
    </>
  )
}