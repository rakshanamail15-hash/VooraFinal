import { useState, useEffect } from "react";
import "./About.css";
// import aboutvoora from "../assets/image/highabout.webp";
const aboutvoora =
  "https://res.cloudinary.com/wdfwbagg/image/upload/v1787635171/Home_Page_-_About_Us_ii5o2p.jpg";
  import { motion } from "framer-motion";
import {
  IcLandmark,
  IcResidential,
  IcLocation,
  IcDesign,
} from "./Icons";

const features = [
  { icon: <IcLandmark aria-hidden="true" />, title: "Established Legacy" },
  { icon: <IcResidential aria-hidden="true" />, title: "Modern Living Spaces" },
  { icon: <IcLocation aria-hidden="true" />, title: "Prime Locations" },
  { icon: <IcDesign aria-hidden="true" />, title: "Functional Design" },
];


// Framer Motion Variants
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

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const [typedText, setTypedText] = useState("");

  const text = "Trusted Builders";
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const startTyping = () => {
      timeoutId = setInterval(() => {
        currentIndex++;

        if (currentIndex <= text.length) {
          setTypedText(text.slice(0, currentIndex));
        } else {
          clearInterval(timeoutId);

          setTimeout(() => {
            currentIndex = 0;
            setTypedText("");
            startTyping();
          }, 2000);
        }
      }, 80);
    };

    startTyping();

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <section className="section about" id="about">
      {/* <div className="corner-wave corner-wave-top-right"></div>
      <div className="corner-wave corner-wave-bottom-left"></div> */}

      <div className="about-content">
        <div className="container about-grid">

          {/* IMAGE */}
          <div className="about-media">
            <img src={aboutvoora} alt="About Voora" />

            <div className="about-exp">
              <strong>30</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="active is-visible">
            <div data-reveal="true" className="active is-visible">

              <h2 className="section-title">
                About <br className="br-only" />
                <span className="accent">Voora</span>
              </h2>

              <p>
                Welcome to Voora, a leading real estate company in Chennai with a
                legacy spanning over 30 years Renowned for creating
                remarkable residential and commercial landmarks Voora has left
                an indelible mark...
                <span
                  className="read-more-link"
                  onClick={() => setShowModal(true)}
                >
                  Read More
                </span>
              </p>
            </div>

            {/* FEATURES */}
            <motion.div
              className="feature-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="feature-box"
                >
                  <span className="feature-icon" aria-hidden="true">{item.icon}</span>
                  <p>{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="about-modal-overlay">
            <div className="about-modal">
              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              <h3>About Voora</h3>

              <p>
                Welcome to Voora, a leading Chennai-based real estate company
                with a legacy spanning over 30 years. Renowned for creating
                remarkable residential and commercial landmarks, Voora has left
                an indelible mark on Chennai’s skyline.
              </p>

              <p>
                Voora’s portfolio features various properties, from towering
                high-rise apartments and opulent villas to contemporary
                commercial complexes. Every unit is meticulously crafted,
                offering exceptional value through prime locations, superior
                craftsmanship, and thoughtful design.
              </p>

              <p>
                With an unwavering focus on quality, Voora has earned a
                reputation for delivering projects that exemplify precision,
                sustainability, and timely completion.
              </p>

              <p>
                Today, the name “Voora” is synonymous with trust, excellence,
                and customer satisfaction.
              </p>

              <p>
                Founded by the visionary Shri Voora Lakshminarasimha Rao, the
                company is now helmed by his sons, Pavan Voora and Suman Voora,
                whose leadership continues to uphold the tradition of excellence
                and progress.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}