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
import { useState, useRef, useEffect } from 'react';

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
const commercialcompleted2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787317386/commercialcompleted_2_jwkjmp.webp";
// const commercialcompleted2 = ""
const trm = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/TRM_nltdhd.webp";
const ocean27 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786008732/ocea2_klyrjm.jpg"
// import tblock from "../assets/image/tblockheroabout.webp"
const tblock = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786598223/tblock_elevation_609x550px_ei7hzl.jpg";

// const projectData = [
//   {
//     name: "Voora Ashwin",
//     type: "Residential",
//     location: "T. Nagar, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: vooraashwin,
//   },

//   {
//     name: "Voora Narayana",
//     type: "Residential",
//     location: "Purasaiwakkam, Chennai",
//     Acres: "5.8 Acres",
//     Units: "410 Units",
//     BHK: "3 & 4 BHK SEA=Facing Apartments",
//     Price: "₹2.3 Onwards",
//     completion: "Q3 2025",
//     img: vooranarayana,
//   },
//   {
//     name: "Voora Prakash",
//     type: "Residential",
//     location: "Vijayaraghava Road, T. Nagar, Chennai",
//     Acres: "3.9 Acres",
//     Units: "280 Units",
//     BHK: "2 & 3 BHK",
//     Price: "₹1500 Per Sq.ft",
//     completion: "Q2 2026",
//     img: vooraprakash,
//   },
//   {
//     name: "Voora Villa 96",
//     type: "Residential",
//     location: "ECR – Sholinganallur, Chennai",
//     Acres: "7.1 Acres",
//     Units: "600 Units",
//     BHK: "4BHK",
//     Price: "₹11 CR Onwards",
//     completion: "Q4 2025",
//     img: vooravilla96,
//   },
//   {
//     name: "Voora Vidyasagar Oswal Garden",
//     type: "Residential",
//     location: "Phase -I Korukkupet, Chennai",
//     Acres: "7.1 Acres",
//     Units: "600 Units",
//     BHK: "4BHK",
//     Price: "₹2.7 CR Onwards",
//     completion: "Q4 2025",
//     img: vooravidyasagar,
//   },
//   {
//     name: "Voora Saraswathi",
//     type: "Residential",
//     location: "Hindi Prachar Sabha Road, T. Nagar, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "2, 3 & 4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: voorasaraswathi,
//   },

//   {
//     name: "Voora Gitanjali",
//     type: "Residential",
//     location: "T.Nagar, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "2, 3 & 4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: vooragithanjali,
//   },

//   {
//     name: "Voora Vijayasree",
//     type: "Residential",
//     location: "Dr.B.N. Road, T. Nagar, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "2, 3 & 4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: vooravijayasree,
//   },

//   {
//     name: "Voora Pritvi",
//     type: "Residential",
//     location: "ECR, Kottivakkam, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "2, 3 & 4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: voorapritvi,
//   },

//   {
//     name: "Voora Radha Homes",
//     type: "Residential",
//     location: "Harrington Road, Chetpet, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "2, 3 & 4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: vooraradhahomes,
//   },

//   {
//     name: "Voora J K Tower",
//     type: "Commercial",
//     location: "T.Nagar, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "2, 3 & 4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: voorajktower,
//   },

//   {
//     name: "Voora TRM Court",
//     type: "Residential",
//     location: "Mylapore, Chennai",
//     Acres: "4.2 Acres",
//     Units: "320 Units",
//     BHK: "2 & 3 BHK Apartments",
//     Price: "₹1 CR Onwards",
//     completion: "Q1 2026",
//     img: trm,
//   },

//   {
//     name: "Voora Sreela Terrace",
//     type: "Commercial",
//     location: "Adyar, Chennai",
//     Acres: "6.5 Acres",
//     Units: "544 Units",
//     BHK: "2, 3 & 4 BHK Apartments",
//     Price: "₹7199 Per Sq.ft",
//     completion: "Q4 2025",
//     img: voorasreela,
//   },
// ];

const projectData = [
  {
    name: "Voora Ocean27",
    type: "Residential",
    location: "Adyar, Chennai",
    Acres: "1.8 Acres",
    Units: "132 Units",
    BHK: "2 & 3 BHK Apartments",
    completion: "Feb 2024",
    img: ocean27,
  },

  {
    name: "Voora VidyasagarTblock",
    type: "Residential",
    location: "Korukkupet, Chennai",
    Acres: "0.48 Acres",
    Units: "38 Units",
    BHK: "2, 3 & 4 BHK Apartments",
    completion: "Mar 2024",
    img: tblock,
  },

  {
    name: "Voora Aswin",
    type: "Residential",
    location: "T. Nagar, Chennai",
    Acres: "0.11 Acres",
    Units: "5 Units",
    BHK: "4 BHK Apartments",
    completion: "Feb 2026",
    img: vooraashwin,
  },
  {
    name: "Voora TRM Court",
    type: "Residential",
    location: "Mylapore, Chennai",
    Acres: "0.11 Acres",
    Units: "5 Units",
    BHK: "3 BHK Apartments",
    completion: "Apr 2026",
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
    completion: "July 2000",
    img: vooraprakash,
  },
  {
    name: "Voora Villa 96",
    type: "Residential",
    location: "ECR – Sholinganallur, Chennai",
    Acres: "7.5 Acres",
    Units: "96 Units",
    BHK: "2 & 3 & 4BHK",
    completion: "Nov 2016",
    img: vooravilla96,
  },
  {
    name: "Voora Vidyasagar Oswal Garden",
    type: "Residential",
    location: "Phase -I Korukkupet, Chennai",
    Acres: "12.11 Acres",
    Units: "880 Units",
    BHK: "2 & 3 & 4 BHK",
    completion: "July 2018",
    img: vooravidyasagar,
  },
  {
    name: "Voora Saraswathi",
    type: "Residential",
    location: "Hindi Prachar Sabha Road, T. Nagar, Chennai",
    Acres: "0.27 Acres",
    Units: "14 Units",
    BHK: "3 BHK Apartments",
    completion: "May 2018",
    img: voorasaraswathi,
  },

  {
    name: "Voora Gitanjali",
    type: "Residential",
    location: "T.Nagar, Chennai",
    Acres: "0.22 Acres",
    Units: "16 Units",
    BHK: "2 & 3 BHK Apartments",
    completion: "Sep 2014",
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
    completion: "June 2000",
    img: vooraradhahomes,
  },

  {
    name: "Voora J K Tower",
    type: "Commercial",
    location: "T.Nagar, Chennai",
    Acres: "0.16 Acres",
    Units: "8 Units",
    // BHK: "2, 3 & 4 BHK Apartments",
    completion: "Dec 2010",
    img: voorajktower,
  },

  {
    name: "Voora Sreela Terrace",
    type: "Commercial",
    location: "Adyar, Chennai",
    Acres: "0.27 Acres",
    Units: "8 Units",
    // BHK: "2, 3 & 4 BHK Apartments",
    completion: "June 2003",
    img: voorasreela,
  },
];


const fullText = "Commercial Completed Projects";

// Mapping of project names to custom description paragraphs for the view modal
const descriptionMap = {
  "Voora J K Tower": `Located on Bazullah Road, T. Nagar, Voora J.K. Tower is a commercial complex offering 14,000 sq. ft. of functional business space. Spread over a stilt and four upper floors, this tower is strategically positioned in one of Chennai's most prominent business hubs, ensuring excellent connectivity and convenience. Its central location provides seamless access to public transport, key roads, and nearby amenities such as shopping, dining, and essential services. Designed to meet the demands of modern enterprises, Voora J.K. Tower offers a dependable and efficient workspace in the bustling heart of T. Nagar. As part of Chennai's thriving commercial ecosystem, Voora J.K. Tower remains a trusted address for businesses seeking a central and functional space in a vibrant neighbourhood.`,
  "Voora Sreela Terrace": `Voora Sreela Terrace, located in the bustling neighbourhood of Gandhi Nagar, Adyar, stands as a premier commercial destination celebrated for its functional design and strategic location. Spanning 30,000 sq. ft. across four levels, it seamlessly integrates vibrant retail spaces and modern office environments to meet diverse business requirements. The ground floor retail spaces boast high visibility and foot traffic, making them ideal for shops, boutiques, and service outlets. Above, the well-designed office spaces offer a professional and efficient setting, tailored to the needs of businesses in the dynamic heart of Adyar. Situated in a prime location, Voora Sreela Terrace ensures unparalleled convenience with easy access to public transport, vibrant shopping destinations, and a variety of dining options, making it the perfect address for enterprises seeking connectivity and growth.`
};

const filters = ["All Projects", "Commercial"];

const PAGE_TYPE = "Commercial";



export default function CommercialCompleted() {
  const [filter, setFilter] = useState("All Projects");
  const trackRef = useRef(null);

  const fullText = "Commercial Completed Projects";

  const commercialOnly = projectData.filter((p) => p.type === PAGE_TYPE);

  const visible = commercialOnly.filter(
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
      <section
        className="upcoming-hero"
        style={{ backgroundImage: `url(${commercialcompleted2})` }}
      >
        {/* Real <img> so the full banner displays at natural aspect ratio
            without any cropping on any device */}
        <img
          src={commercialcompleted2}
          alt="Commercial Completed Projects"
          className="upcoming-hero-img"
        />
      </section>


      {/* PROJECT SECTION */}
      <section className="section upcoming" id="projects">
        <div className="container">

          {/* <div className="up-head">
               <div>
                 <span className="eyebrow">Our Completed Projects</span>
                 <h2 className="section-title">Completed Projects</h2>
               </div>
     
               
             </div> */}

          <div data-reveal="true" className="active is-visible">


            <h2 className="section-title">
              Our Completed <br className="br-only" />
              <span className="accent">Projects</span>
            </h2>
          </div>

          <div className="up-controls">

            <div className="filter-tabs">
              {filters.map((f) => (
                <button
                  key={f}
                  className={filter === f ? "active" : ""}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="up-arrows">
              <button onClick={() => scroll(-1)} aria-label="Previous">
                <FaChevronLeft />
              </button>

              <button onClick={() => scroll(1)} aria-label="Next">
                <FaChevronRight />
              </button>
            </div>

          </div>

          <div className="up-track" ref={trackRef}>

            {visible.map((p) => (
              <article className="up-card" key={p.name}>

                <div
                  className="up-img"
                  style={{ backgroundImage: `url(${p.img})` }}
                >
                  <span className="up-type">
                    <FaBuilding /> {p.type}
                  </span>

                  <span className="up-price-badge">
                    <FaTag /> {p.Price}
                  </span>



                  <div className="up-img-bottom">
                    <h3>{p.name}</h3>
                    <p className="up-location">
                      <FaMapMarkerAlt /> {p.location}
                    </p>
                  </div>
                </div>

                <div className="up-body">

                  <div className="up-grid">

                    <div className="grid-item">
                      <span className="grid-icon"><FaBed /></span>
                      <div className="grid-text">
                        <span>Configuration</span>
                        <strong>{p.BHK}</strong>
                      </div>
                    </div>

                    <div className="grid-item">
                      <span className="grid-icon"><FaHome /></span>
                      <div className="grid-text">
                        <span>Units</span>
                        <strong>{p.Units}</strong>
                      </div>
                    </div>

                    <div className="grid-item">
                      <span className="grid-icon"><FaRulerCombined /></span>
                      <div className="grid-text">
                        <span>Land Area</span>
                        <strong>{p.Acres}</strong>
                      </div>
                    </div>

                    <div className="grid-item">
                      <span className="grid-icon"><FaCalendarAlt /></span>
                      <div className="grid-text">
                        <span>Completion</span>
                        <strong>{p.completion}</strong>
                      </div>
                    </div>

                  </div>

                  <div className="up-actions">

                    <button
                      className="know-more-btn"
                      onClick={() => openView(p)}
                    >
                      <FaRegEye /> View More
                    </button>

                    <button
                      className="brochure-btn"
                      onClick={() => openBrochure(p)}
                    >
                      <FaDownload /> Brochure
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {showView && viewProject && (
            <div className="view-overlay" onClick={closeView}>
              <div
                className="view-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-modal view-close"
                  onClick={closeView}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>

                <div
                  className="view-left"
                  style={{ backgroundImage: `url(${viewProject.img})` }}
                >
                  <span className="view-type-badge">
                    <FaBuilding /> {viewProject.type}
                  </span>
                  <span className="view-price-badge">
                    <FaTag /> {viewProject.Price}
                  </span>
                  <div className="view-left-bottom">
                    <h3>{viewProject.name}</h3>
                    <p>
                      <FaMapMarkerAlt /> {viewProject.location}
                    </p>
                  </div>
                </div>

                <div className="view-right">
                  <span className="view-tag">Project Overview</span>
                  <h2>{viewProject.name}</h2>
                  <p className="view-desc">
                    {viewProject.name && descriptionMap[viewProject.name] ? descriptionMap[viewProject.name] : `A premium ${viewProject.type.toLowerCase()} landmark by Voora at ${viewProject.location} - designed to host leading businesses with world-class infrastructure and lasting value.`}
                  </p>

                  <div className="view-points">
                    <div className="view-point">
                      <span className="view-point-icon">
                        <FaBed />
                      </span>
                      <div>
                        <span>Configuration</span>
                        <strong>{viewProject.BHK}</strong>
                      </div>
                    </div>

                    <div className="view-point">
                      <span className="view-point-icon">
                        <FaHome />
                      </span>
                      <div>
                        <span>Total Units</span>
                        <strong>{viewProject.Units}</strong>
                      </div>
                    </div>

                    <div className="view-point">
                      <span className="view-point-icon">
                        <FaRulerCombined />
                      </span>
                      <div>
                        <span>Land Area</span>
                        <strong>{viewProject.Acres}</strong>
                      </div>
                    </div>

                    <div className="view-point">
                      <span className="view-point-icon">
                        <FaCalendarAlt />
                      </span>
                      <div>
                        <span>Completion</span>
                        <strong>{viewProject.completion}</strong>
                      </div>
                    </div>
                  </div>



                  <div className="view-cta-row">
                    <button
                      className="view-cta-primary"
                      onClick={() => {
                        closeView();
                        openBrochure(viewProject);
                      }}
                    >
                      <FaDownload /> Download Brochure
                    </button>
                    <a href="#top" className="view-cta-ghost">
                      Enquire Now <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showModal && (
            <div className="brochure-overlay" onClick={closeModal}>

              <div
                className="brochure-modal"
                onClick={(e) => e.stopPropagation()}
              >

                <button className="close-modal" onClick={closeModal} aria-label="Close">
                  <FaTimes />
                </button>

                <div className="modal-header">
                  <span className="modal-tag">Premium Brochure</span>
                  <h3>{selectedProject?.name}</h3>
                  <p>Fill the details to download the brochure</p>
                </div>

                <form className="brochure-form" onSubmit={(e) => {
                  e.preventDefault();

                  // 1. Send the lead info to sales@voora.in
                  const subject = encodeURIComponent(`Brochure Request for ${selectedProject?.name}`);
                  const body = encodeURIComponent(
                    `Hello Sales Team,\n\nA new user has requested the brochure for ${selectedProject?.name}.\n\n` +
                    `Name: ${e.target.name.value}\n` +
                    `Phone: ${e.target.phone.value}\n` +
                    `Email: ${e.target.email.value}\n` +
                    `Message: ${e.target.message.value}\n\n` +
                    `Please follow up.`
                  );
                  window.location.href = `mailto:sales@voora.in?subject=${subject}&body=${body}`;

                  // 2. Trigger actual brochure download after a short delay
                  setTimeout(() => {
                    // Create a dummy PDF blob (placeholder until actual PDFs are provided)
                    const blob = new Blob(["This is a placeholder for the actual Voora Brochure PDF. Please replace with actual PDF files."], { type: "application/pdf" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${selectedProject?.name ? selectedProject.name.replace(/\s+/g, '_') : 'Voora'}_Brochure.pdf`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);

                    closeModal();
                  }, 500);
                }}>

                  <div className="input-wrap">
                    <FaUser />
                    <input name="name" type="text" placeholder="Full Name" required />
                  </div>

                  <div className="input-wrap">
                    <FaPhone />
                    <input name="phone" type="tel" placeholder="Phone Number" required />
                  </div>

                  <div className="input-wrap">
                    <FaEnvelope />
                    <input name="email" type="email" placeholder="Email Address" required />
                  </div>

                  <div className="input-wrap input-wrap--textarea">
                    <FaCommentDots />
                    <textarea name="message" rows="3" placeholder="Message (Optional)" />
                  </div>

                  <button type="submit" className="download-btn">
                    <FaDownload /> Download Brochure
                  </button>

                </form>

              </div>

            </div>
          )}

        </div>
      </section>
    </>
  )
}