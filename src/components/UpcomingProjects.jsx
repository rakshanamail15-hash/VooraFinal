import { useRef, useState, useEffect } from "react";
import "./UpcomingProjects.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  FaMapMarkerAlt,
  FaBuilding,
  FaRulerCombined,
  FaHome,
  FaThLarge,
  FaCalendarAlt,
  FaTag,
  FaDownload,
  FaArrowRight,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

const oneSea =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1787044239/ONE_SEA_CTA_POP-UP_534X415_px_km6hro.webp";

const westSide =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1787031544/WESTSIDE_CTA_POP-UP_534X415_PX_fni06m.webp";

const agasthya =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1787045486/HOME_PAGE_EXPLORE_-_AGASTYA_osze4j.webp";

const highwayHaven = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787634929/HOME_PAGE_-_HIGHWAY_HAVEN_378X433_jwyuhz.webp";
const beckford = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/herobeckford_yrmenj.webp";

const techedge =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1787034099/TECH_EDGE_OVERVIEW_609x550_px_h0pkcw.webp";

/*
=========================================================
VERIFIED BROCHURE URLS
=========================================================

Only verified PDF URLs are added here.

Westside:
https://voora.co.in/wp-content/uploads/2024/12/
Voora-Westside-E-Brochure.pdf

Highway Haven:
https://voora.co.in/wp-content/uploads/2025/01/
Voora-Highway-Haven-E-Brochure.pdf
=========================================================
*/

const brochureUrls = {
  "Voora WestSide": "https://drive.google.com/file/d/1pSfRiRk6P6Mi11qJ2I0UxRV6P3VqdAZe/view?usp=drive_link",

  "Voora Highway Haven": "https://drive.google.com/file/d/1fPQN69hQsZK-Sj5063RGvc6GQ6vPKcb0/view?usp=drive_link",
  "Voora One Sea": "https://drive.google.com/file/d/1IBlDUP_Sjf9u1jR5PAfvIDJF41DQXtuJ/view?usp=drive_link",
  "Voora Agasthya": "https://drive.google.com/file/d/1kDqGgcTrbz0HWCs-45awNvbTbHxQUnvr/view?usp=drive_link",
  "Voora Beckford": "https://voora.co.in/wp-content/uploads/2025/01/Voora-Beckford-E-Brochure.pdf",
  "Voora Tech Edge": "https://drive.google.com/file/d/1evG_hNS-fg1Qj9G_BMQmalKQcgGDnqCC/view?usp=drive_link",
};

const projects = [
  {
    name: "Voora One Sea",
    type: "Residential",
    location: "Next to Mayajaal, ECR",
    Acres: "11.06 Acres",
    Units: "1048 Units",
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
    Units: "110 Units",
    BHK: "2 & 3 BHK",
    Price: "₹13000/sqft",
    completion: "Dec 2025",
    img: westSide,
    route: "/voora-westside",
  },

  {
    name: "Voora Agasthya",
    type: "Residential",
    location: "Tondiarpet, Chennai",
    Acres: "0.55 Acres",
    Units: "52 Units",
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
    Price: "₹1700/sqft",
    completion: "Ready to build",
    img: highwayHaven,
    route: "/voora-highway-haven",
  },

  {
    name: "Voora Beckford",
    type: "Residential",
    location: "Nungambakkam, Chennai",
    Acres: "0.22 Acres",
    Units: "5 Units",
    BHK: "4BHK",
    Price: "₹30000/sqft",
    completion: "Ready to occupy",
    img: beckford,
    route: "/voora-beckford",
  },

  {
    name: "Voora Tech Edge",
    type: "Commercial",
    location: "Next to Mayajaal, ECR",
    Acres: "1 Acres",
    Units: "7 Units",
    Price: "₹8500/sqft",
    completion: "",
    img: techedge,
    route: "/voora-tech-edge",
  },
];

const filters = [
  "All Projects",
  "Residential",
  "Commercial",
];

export default function UpcomingProjects() {
  const [filter, setFilter] =
    useState("All Projects");

  const trackRef = useRef(null);

  const [isHovered, setIsHovered] =
    useState(false);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitStatus, setSubmitStatus] =
    useState(null);

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

          if (
            scrollLeft + clientWidth >=
            scrollWidth - 20
          ) {
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
      document.querySelectorAll(
        "[data-reveal]"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "active"
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

    return () =>
      observer.disconnect();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow =
        "hidden";
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
      // 1. Send form details through EmailJS
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

      // 2. Get brochure URL from brochureUrls
      const pdfUrl = brochureUrls[selectedProject?.name];

      if (!pdfUrl) {
        throw new Error(
          `Brochure URL is missing for ${selectedProject?.name}`
        );
      }

      // 3. Open brochure
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      link.download = `${selectedProject?.name || "Voora"
        }-Brochure.pdf`;

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
      console.error(
        "Brochure submission/download failed:",
        error
      );

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="section upcoming"
      id="projects"
    >
      <div
        className="up-bg"
        aria-hidden="true"
      >
        <div className="up-bg-mesh" />

        <div className="up-bg-orb up-bg-orb-1" />
        <div className="up-bg-orb up-bg-orb-2" />
        <div className="up-bg-orb up-bg-orb-3" />

        <div className="up-bg-shapes">
          <span className="up-shape up-shape-1" />
          <span className="up-shape up-shape-2" />
          <span className="up-shape up-shape-3" />
          <span className="up-shape up-shape-4" />
          <span className="up-shape up-shape-5" />
        </div>

        <div className="up-bg-lines">
          <span className="up-line up-line-1" />
          <span className="up-line up-line-2" />
        </div>
      </div>

      <div className="container">
        <div className="up-head">
          <div>
            <h2 className="section-title">
  Ongoing{" "}
  <br className="br-only" />

  <span className="accent">
    Projects
  </span>
</h2>

            <p>
              Discover our upcoming
              developments designed to shape
              the future of modern living.
            </p>
          </div>

          <Link
            to="/upcoming-section"
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
                  filter === f
                    ? "active"
                    : ""
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

                <span className="up-price-badge">
                  <FaTag />
                  {p.Price}
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
                      <FaThLarge />
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
                        {p.Acres}
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
                    to={p.route}
                    className="know-more-btn"
                  >
                    Know More
                    <FaArrowRight />
                  </Link>

                  <button
                    className="brochure-btn"
                    onClick={() =>
                      openBrochure(p)
                    }
                  >
                    <FaDownload />
                    Brochure
                  </button>
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