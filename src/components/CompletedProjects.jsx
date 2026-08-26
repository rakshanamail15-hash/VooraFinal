import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./CompletedProjects.css";

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
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

const vooraashwin = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/vooraaswin_rvhcu0.webp";
const vooranarayana = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/vooranarayana_ivmgrz.webp";
const vooraprakash = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/vooraprakash_kpm786.webp";
const vooravilla96 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/vooravilla96_axfzjk.webp";
const vooravidyasagar = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/vooravidhya_dnoqxz.webp";

const voorasaraswathi =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/voorasaraswathi_vi76qg.webp";

const vooragithanjali = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/vooragitanjali_lwl8xs.webp";
const vooravijayasree = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/vooravijayasree_bqqlud.webp";

const voorapritvi =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/voorapritvi_bxnjgk.webp";

const vooraradhahomes = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/vooraradhahomes_jv7ulf.webp";
const voorajktower = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917336/voorajktower_tqxxjl.webp";
const voorasreela = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917337/voorasreelaterraces_rf2cpb.webp";
const trm = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/TRM_nltdhd.webp";

const tblock =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1786598223/tblock_elevation_609x550px_ei7hzl.jpg";

const ocean27 =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044825/OCEAN_27_CTA_POP-UP_534X415_px_a3x5xq.webp";

/*
=========================================================
VERIFIED BROCHURE URLS
=========================================================

Only add a URL here when the PDF actually exists.

The Voora website currently exposes brochure functionality
for these projects, but the exact PDF URL is not publicly
verifiable for every project.

Westside is verified from the live Voora website.
Highway Haven is also a known Voora PDF URL.
=========================================================
*/

const brochureUrls = {
  "Voora WestSide":
    "https://voora.co.in/wp-content/uploads/2024/12/Voora-Westside-E-Brochure.pdf",

  "Voora Highway Haven":
    "https://voora.co.in/wp-content/uploads/2025/01/Voora-Highway-Haven-E-Brochure.pdf",

  "Voora Ocean27": "https://voora.co.in/wp-content/uploads/2025/01/Voora-Ocean_s27-Brochure.pdf",
  "Voora VidyasagarTblock": null,
  "Voora Aswin": null,
  "Voora TRM Court": null,
  "Voora Narayana": null,
  "Voora Prakash": null,
  "Voora Villa 96": null,
  "Voora Vidyasagar Oswal Garden": null,
  "Voora Saraswathi": null,
  "Voora Gitanjali": null,
  "Voora Vijayasree": null,
  "Voora Pritvi": null,
  "Voora Radha Homes": null,
  "Voora J K Tower": null,
  "Voora Sreela Terrace": null,
};

const projects = [
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
    BHK: "2,3,4 BHK Apartment",
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
    Acres: "",
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
    BHK: "2, 3, 4 BHK Apartment",
    completion: "Sep 2008",
    img: voorapritvi,
  },

  {
    name: "Voora Radha Homes",
    type: "Residential",
    location: "Harrington Road, Chetpet, Chennai",
    Acres: "",
    Units: "544 Units",
    BHK: "2, 3,4 BHK Apartment",
    completion: "June 2000",
    img: vooraradhahomes,
  },

  {
    name: "Voora J K Tower",
    type: "Commercial",
    location: "T.Nagar, Chennai",
    Acres: "0.16 Acres",
    Units: "8 Units",
    completion: "Dec 2010",
    img: voorajktower,
  },

  {
    name: "Voora Sreela Terrace",
    type: "Commercial",
    location: "Adyar, Chennai",
    Acres: "0.27 Acres",
    Units: "8 Units",
    completion: "June 2003",
    img: voorasreela,
  },
];

const filters = ["All Projects", "Residential", "Commercial"];

export default function CompletedProjects() {
  const [filter, setFilter] = useState("All Projects");
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        if (
          trackRef.current &&
          trackRef.current.children.length > 0
        ) {
          const {
            scrollLeft,
            scrollWidth,
            clientWidth,
          } = trackRef.current;

          if (scrollLeft + clientWidth >= scrollWidth - 20) {
            trackRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            const firstCard =
              trackRef.current.children[0];

            const gap = parseFloat(
              window.getComputedStyle(
                trackRef.current
              ).gap || "28"
            );

            const slideAmount =
              firstCard.offsetWidth + gap;

            trackRef.current.scrollBy({
              left: slideAmount,
              behavior: "smooth",
            });
          }
        }
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  const visible = projects.filter(
    (p) =>
      filter === "All Projects" ||
      p.type === filter
  );

  useEffect(() => {
    const elements =
      document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "is-visible"
            );
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const openBrochure = (project) => {
    setSelectedProject(project);
    setSubmitStatus(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setSubmitStatus(null);

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleBrochureSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send form details through EmailJS
      await emailjs.send(
        "service_vbp6svl",
        "template_8vbv1rx",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          project_name: selectedProject?.name || "",
        },
        "lWCNhV5nVElqHq5XE"
      );

      // Direct PDF URL
      const pdfUrl = selectedProject?.brochure;

      if (!pdfUrl) {
        throw new Error("Brochure URL is missing.");
      }

      // Direct browser download.
      // No fetch(), no blob(), no CORS issue.
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // This filename is suggested by the browser when possible.
      link.download = `${selectedProject?.name || "Voora"}-Brochure.pdf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitStatus("success");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        closeModal();
      }, 2500);
    } catch (error) {
      console.error("Brochure submission/download failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="section upcoming cp-section"
      id="projects"
    >
      <div
        className="cp-bg"
        aria-hidden="true"
      >
        <div className="cp-bg-mesh" />
        <div className="cp-bg-orb cp-bg-orb-1" />
        <div className="cp-bg-orb cp-bg-orb-2" />
        <div className="cp-bg-orb cp-bg-orb-3" />

        <div className="cp-bg-shapes">
          <span className="cp-shape cp-shape-1" />
          <span className="cp-shape cp-shape-2" />
          <span className="cp-shape cp-shape-3" />
          <span className="cp-shape cp-shape-4" />
          <span className="cp-shape cp-shape-5" />
        </div>

        <div className="cp-bg-lines">
          <span className="cp-line cp-line-1" />
          <span className="cp-line cp-line-2" />
        </div>
      </div>

      <div className="container">
        <div className="up-head">
          <div>
            <h2 className="section-title">
              Completed{" "}
              <span className="accent">Projects</span>
            </h2>

            <p>
              A showcase of successfully
              delivered projects built with
              quality, precision, and trust.
            </p>
          </div>

          <Link
            to="/completed"
            className="btn btn-outline"
          >
            View All Projects
            <FaArrowRight />
          </Link>
        </div>

        <div className="up-controls">
          <div className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f}
                className={
                  filter === f ? "active" : ""
                }
                onClick={() =>
                  setFilter(f)
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div
          className="up-track"
          ref={trackRef}
          onMouseEnter={() =>
            setIsHovered(true)
          }
          onMouseLeave={() =>
            setIsHovered(false)
          }
        >
          {visible.map((p) => (
            <article
              className="up-card"
              key={p.name}
            >
              <div
                className="up-img"
                style={{
                  backgroundImage:
                    `url(${p.img})`,
                }}
              >
                <span className="up-type">
                  <FaBuilding />
                  {p.type}
                </span>

                <div className="up-img-bottom">
                  <h3>{p.name}</h3>

                  <p className="up-location">
                    <FaMapMarkerAlt />
                    {p.location}
                  </p>
                </div>
              </div>

              <div className="up-body">
                <div className="up-grid">
                  <div className="grid-item">
                    <span className="grid-icon">
                      <FaBed />
                    </span>

                    <div className="grid-text">
                      <span>
                        Configuration
                      </span>

                      <strong>
                        {p.BHK || "—"}
                      </strong>
                    </div>
                  </div>

                  <div className="grid-item">
                    <span className="grid-icon">
                      <FaHome />
                    </span>

                    <div className="grid-text">
                      <span>Units</span>

                      <strong>
                        {p.Units}
                      </strong>
                    </div>
                  </div>

                  <div className="grid-item">
                    <span className="grid-icon">
                      <FaRulerCombined />
                    </span>

                    <div className="grid-text">
                      <span>
                        Land Area
                      </span>

                      <strong>
                        {p.Acres || "—"}
                      </strong>
                    </div>
                  </div>

                  <div className="grid-item">
                    <span className="grid-icon">
                      <FaCalendarAlt />
                    </span>

                    <div className="grid-text">
                      <span>
                        Completion
                      </span>

                      <strong>
                        {p.completion || "—"}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="up-actions">
                  <Link
                    to="/completed"
                    className="know-more-btn"
                  >
                    Know More
                    <FaArrowRight />
                  </Link>

                  <Link
                    to="/upcoming-section"
                    className="brochure-btn"
                  >
                    Ongoing Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showModal && (
          <div
            className="brochure-overlay"
            onClick={closeModal}
          >
            <div
              className="brochure-modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <button
                className="close-modal"
                onClick={closeModal}
                aria-label="Close"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <span className="modal-tag">
                  Premium Brochure
                </span>

                <h3>
                  {selectedProject?.name}
                </h3>

                <p>
                  Fill the details to download
                  the brochure
                </p>
              </div>

              <form
                className="brochure-form"
                onSubmit={
                  handleBrochureSubmit
                }
              >
                <div className="input-wrap">
                  <FaUser />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={
                      handleFormChange
                    }
                    required
                  />
                </div>

                <div className="input-wrap phone-wrap">
                  <PhoneInput
                    country={"in"}
                    value={formData.phone}
                    onChange={
                      handlePhoneChange
                    }
                    inputProps={{
                      name: "phone",
                      required: true,
                      placeholder:
                        "Phone Number",
                    }}
                    containerClass="brochure-phone-container"
                    buttonClass="brochure-phone-btn"
                    inputClass="brochure-phone-input"
                  />
                </div>

                <div className="input-wrap">
                  <FaEnvelope />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={
                      handleFormChange
                    }
                    required
                  />
                </div>

                <div className="input-wrap input-wrap--textarea">
                  <FaCommentDots />

                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={
                      handleFormChange
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="download-btn"
                  disabled={isSubmitting}
                >
                  <FaDownload />

                  {isSubmitting
                    ? "Submitting..."
                    : "Download Brochure"}
                </button>

                {submitStatus ===
                  "success" && (
                    <div
                      style={{
                        marginTop: "15px",
                        color: "#4bb543",
                        fontSize: "14px",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Thank you! Brochure
                      downloading...
                    </div>
                  )}

                {submitStatus ===
                  "error" && (
                    <div
                      style={{
                        marginTop: "15px",
                        color: "red",
                        fontSize: "14px",
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Oops! Something went
                      wrong. Please try again.
                    </div>
                  )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}





