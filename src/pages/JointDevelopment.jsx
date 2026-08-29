import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./JointDevelopment.css";
// import overviewImage from "../assets/image/jointabout.png";
const overviewImage = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786599958/Voora_colabration_image_vduis9.jpg";
import { ShieldCheck, TrendingUp, Handshake, FileText, CheckCircle, Home, MapPin, Key, Plus, Minus } from "lucide-react";
const upcomingbanner = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787634861/Joint_Development_Page_-_Hero_Banner_b00tvb.webp";
const upcomingbannermobile = "https://res.cloudinary.com/wdfwbagg/image/upload/v1788000153/Joint_development_of91zc.jpg";
// const upcomingbanner = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786598406/voora_upcoming_project_o0esev.jpg";
const join1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917283/join1_flfzfd.webp";
const join2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917284/join2_iw0kyq.jpg";
const join3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917284/join3_jufs33.jpg";
const join4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917285/join4_sixmn1.jpg";
const join5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917285/join5_mgjgxt.jpg";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`jd-faq-item ${isOpen ? 'open' : ''}`}>
      <div className="jd-faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <div className={`jd-faq-icon ${isOpen ? 'active' : ''}`}>
          {isOpen ? <Minus size={22} strokeWidth={1.5} /> : <Plus size={22} strokeWidth={1.5} />}
        </div>
      </div>
      <div className="jd-faq-answer" style={{ maxHeight: isOpen ? '800px' : '0' }}>
        <div className="jd-faq-answer-content">
          {answer}
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What are the Benefits of Partnering with Voora for Joint Development Projects?",
    answer: (
      <>
        <p>Partnering with Voora for joint development projects offers several key benefits, including:</p>
        <ul className="jd-faq-list">
          <li>Risk-sharing</li>
          <li>Enhanced ROI</li>
          <li>Expert management</li>
          <li>Access to financing</li>
          <li>Streamlined project execution</li>
        </ul>
      </>
    )
  },
  {
    question: "How Does Voora Ensure Risk Sharing in Joint Development Partnerships?",
    answer: <p>At Voora, we understand the importance of risk mitigation in joint development projects. By leveraging our extensive industry experience and best practices, we can share the responsibility and potential risks with our partners. This collaborative approach allows us to navigate the complexities of real estate development together, ensuring the long-term success of our joint ventures.</p>
  },
  {
    question: "What is Voora's Approach to Maximising Returns on Joint Development Projects?",
    answer: <p>Voora’s strategic approach to joint development projects is focused on identifying and capitalising on growth opportunities to maximise returns for all stakeholders. Our deep market insights, combined with our proven track record of successful projects, enable us to devise tailored strategies that optimise the financial outcomes of our joint ventures.</p>
  },
  {
    question: "How does Voora's expertise contribute to the efficient execution of joint development projects?",
    answer: <p>Voora’s team of seasoned professionals brings a wealth of industry knowledge and best practices to the table, ensuring the streamlined execution of joint development projects. From project management and design to construction and delivery, our integrated approach and robust systems allow us to identify and address challenges, enabling the timely and successful completion of our joint ventures.</p>
  }
];

export default function JointDevelopment() {
  const fullText = "Forging Powerful Partnerships for Unmatched Success";

  const [isOverviewPopupOpen, setIsOverviewPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message
      };

      await emailjs.send(
        "service_gab56or",
        "template_bppfavh",
        templateParams,
        "TQYn-xZzXZNoLUCac"
      );

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    let currentText = "";
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];

        currentIndex++;
        setTimeout(type, 50); // Adjust typing speed here
      }
    };

    setTimeout(type, 500); // Initial delay before typing starts
  }, []);

  const vooraCards = [
    {
      title: "Risk - Sharing",
      image: join1,
      description: "By joining forces with Voora, you can mitigate the inherent risks of real estate development, as we share responsibility for navigating industry complexities. Our experience and robust risk management strategies ensure your investment is safeguarded at every step."
    },
    {
      title: "Enhanced ROI",
      image: join2,
      description: "Leveraging our proven track record of successful projects and strong market presence, we help you maximise your returns on investment. Our strategic project planning and execution allow us to capitalise on growth opportunities, ensuring a profitable venture for all stakeholders."
    },
    {
      title: "Expert Management",
      image: join3,
      description: "Voora’s team of seasoned professionals brings a wealth of expertise in project management, design, and construction. By tapping into our extensive industry knowledge and best practices, you can streamline your development process and deliver exceptional results."
    },
    {
      title: "Access to Financing",
      image: join4,
      description: "As an established real estate group, Voora maintains strong relationships with financial institutions and can assist you in securing funds for your project. This access to capital provides a significant advantage in a competitive market."
    },
    {
      title: "Streamlined Project execution",
      image: join5,
      description: "Our integrated approach to development, combined with our robust systems and processes, ensures efficient and timely delivery of projects. By leveraging our resources and expertise, you can focus on the strategic aspects of your business while we handle the day-to-day operations."
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck />,
      title: "Zero Investment Risk",
      desc: "Partner with us without the financial burden of construction costs. We handle the entire development investment.",
    },
    {
      icon: <TrendingUp />,
      title: "Maximum ROI",
      desc: "Unlock the true potential of your land. Our premium brand value ensures maximum returns on the developed property.",
    },
    {
      icon: <Handshake />,
      title: "Transparent Partnership",
      desc: "We believe in 100% transparency. From legal agreements to construction quality, you are involved at every step.",
    },
    {
      icon: <CheckCircle />,
      title: "Premium Quality Construction",
      desc: "With decades of experience, we deliver unparalleled luxury, ensuring your land is transformed into a landmark.",
    },
    {
      icon: <FileText />,
      title: "Hassle-Free Legalities",
      desc: "Our expert legal team ensures smooth documentation, clear titles, and seamless approvals without any stress to you.",
    },
    {
      icon: <Home />,
      title: "Timely Delivery",
      desc: "We are committed to strict timelines. Your project will be designed, constructed, and handed over on schedule.",
    }
  ];

  const processes = [
    {
      number: "1",
      title: "Initial Consultation",
      desc: "We meet to understand your goals, evaluate the land, and discuss the joint development possibilities.",
    },
    {
      number: "2",
      title: "Feasibility Study and Land Assessment",
      desc: "Our team conducts a thorough title check and architectural feasibility study to ensure maximum viability.",
    },
    {
      number: "3",
      title: "Project Planning and Design",
      desc: "We sign a transparent Joint Development Agreement and our team secures all necessary government approvals.",
    },
    {
      number: "4",
      title: "Execution and Construction",
      desc: "We execute the project with premium quality and hand over your rightful share of the newly developed property.",
    },
    {
      number: "5",
      title: "Profit-Sharing and Handover",
      desc: "We execute the project with premium quality and hand over your rightful share of the newly developed property.",
    }
  ];

  return (
    <div className="jd-page">
      {/* ── 1. Hero Banner ── */}
      <section className="upcoming-hero">
        <picture>
          <source media="(max-width: 768px)" srcSet={upcomingbannermobile} />
          <img
            src={upcomingbanner}
            alt="Voora Residential Upcoming Projects"
            className="upcoming-hero-img"
          />
        </picture>
      </section>

      {/* ── 2. Overview Section ── */}
      <section className="jd-overview">
        <div className="jd-overview-container">
          <div className="jd-overview-image">
            <img src={overviewImage} alt="Joint Development" />
          </div>
          <div className="jd-overview-text">
            <h2 className="section-title">
              Joint <br className="br-only" />
              <span className="accent">Development</span>
            </h2>
            <p>
              At Voora, we believe the key to sustainable growth lies in the strength of our collaborations. As a well-established real estate group with over three decades of experience, we are proud to extend our expertise and resources to like-minded partners through our innovative joint development model.{" "}
              <button className="jd-readmore-inline" onClick={() => setIsOverviewPopupOpen(true)}>
                Read More...
              </button>
            </p>
          </div>
        </div>

        {/* ── Overview Popup ── */}
        {isOverviewPopupOpen && (
          <div className="jd-popup-overlay" onClick={() => setIsOverviewPopupOpen(false)}>
            <div className="jd-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="jd-popup-close" onClick={() => setIsOverviewPopupOpen(false)}>✕</button>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>
                Joint <span className="accent">Development</span>
              </h2>
              <p>
                Our joint development approach is founded on mutual trust, transparency, and a shared vision for excellence. By leveraging our extensive industry knowledge, proven track record, and robust financial capabilities, we empower our partners to unlock the true potential of their land assets and deliver exceptional value to their customers.
              </p>
              <p>
                Whether you’re a landowner seeking to maximise the returns on your property or a developer aspiring to expand your market footprint, our joint development program offers a strategic pathway to success. Through seamless integration of your land and our development expertise, we work hand-in-hand to conceptualise, design, and execute world-class residential, commercial, or mixed-use projects that cater to the evolving needs of the modern real estate landscape.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ── 3. Benefits Section ── */}
      <section className="jd-benefits">
        <h2 className="section-title">
          Benefits of Partnering <br className="br-only" />
          <span className="accent">With Us</span>
        </h2>
        <div className="voora-about-grid">
          {vooraCards.map((card, index) => (
            <div className="voora-about-card" key={index}>
              <div className="voora-about-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="voora-about-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Process Section ── */}
      <section className="jd-process">
        <h2 className="section-title">
          Our <br className="br-only" />
          <span className="accent">Process</span>
        </h2>        <div className="jd-process-timeline">
          {processes.map((step, index) => (
            <div className="jd-process-step" key={index}>
              <div className="jd-process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Contact Section ── */}
      <section className="jd-contact-section">
        <div className="jd-contact-container">
          <h2
            className="section-title"
            style={{
              textAlign: "center",
              color: "white"
            }}
          >
            Find your Perfect
            <br className="br-only" />
            <span
              className="accent"
            >
              Voora Property
            </span>
          </h2>
          <div className="jd-contact-form-wrapper">

            <form className="jd-contact-form" onSubmit={handleFormSubmit}>
              <div className="jd-form-row">
                <div className="jd-form-group">
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} required />
                </div>
                <div className="jd-form-group">
                  <PhoneInput
                    country={'in'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      placeholder: 'Phone Number'
                    }}
                  />
                </div>
              </div>
              <div className="jd-form-group">
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleFormChange} required />
              </div>
              <div className="jd-form-group">
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleFormChange} rows="3" required></textarea>
              </div>
              <button type="submit" className="jd-submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitStatus === "success" && (
                <div className="jd-form-success">
                  Thank you! Your inquiry has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="jd-form-error">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ Section ── */}
      <section className="jd-faq-section">
        <div className="jd-faq-header">
          <h2 className="section-title">
            Frequently Asked <br className="br-only" />
            <span className="accent">Questions</span>
          </h2>
        </div>
        <div className="jd-faq-container">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
}