import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./Navbar.css";

const defaultLogo = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917288/logo.png.bv_aj6mdd.webp";
const stickyLogo = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917287/logo_pbmhwi.png";

export default function Navbar() {
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [residentialSubOpen, setResidentialSubOpen] = useState(false);
  const [commercialSubOpen, setCommercialSubOpen] = useState(false);

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  checkMobile(); // initial check
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const closeMenu = () => {
    setOpen(false);
    setResidentialOpen(false);
    setCommercialOpen(false);
    setResidentialSubOpen(false);
    setCommercialSubOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="container nav-inner">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img
  src={isMobile ? stickyLogo : scrolled ? stickyLogo : defaultLogo}
    alt="VOORA Logo"
    className="logo-img"
          />
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about-us" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>

          <li className={`dropdown ${residentialOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="mobile-dropdown-btn"
              onClick={() => setResidentialOpen(!residentialOpen)}
              aria-expanded={residentialOpen}
            >
              <span>Residential</span>
              <FaChevronDown className={`dropdown-icon ${residentialOpen ? "rotated" : ""}`} />
            </button>

            <div className={`dropdown-menu ${residentialOpen ? "show" : ""}`}>
              <div className={`dropdown-submenu ${residentialSubOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="submenu-btn"
                  onClick={() => setResidentialSubOpen(!residentialSubOpen)}
                  aria-expanded={residentialSubOpen}
                >
                  <span>Ongoing Projects</span>
                  <FaChevronRight className={`submenu-icon ${residentialSubOpen ? "rotated" : ""}`} />
                </button>
                <div className={`submenu ${residentialSubOpen ? "show" : ""}`}>
                  <Link to="/voora-one-sea" onClick={closeMenu}>Voora One Sea</Link>
                  <Link to="/voora-agastya" onClick={closeMenu}>Voora Agastya</Link>
                  <Link to="/voora-westside" onClick={closeMenu}>Voora Westside</Link>
                  <Link to="/voora-beckford" onClick={closeMenu}>Voora Beckford</Link>
                  <Link to="/voora-highway-haven" onClick={closeMenu}>Voora Highway Haven</Link>
                  {/* <Link to="/voora-vidyasagar-t-block" onClick={closeMenu}>Voora Vidyasagar T_Block</Link> */}
                  {/* <Link to="/voora-oceans-27" onClick={closeMenu}>Voora Ocean's 27</Link> */}
                </div>
              </div>
              <Link to="/upcoming-section" onClick={closeMenu}>Upcoming Projects</Link>
              <Link to="/completed" onClick={closeMenu}>Completed Projects</Link>
            </div>
          </li>

          <li className={`dropdown ${commercialOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="mobile-dropdown-btn"
              onClick={() => setCommercialOpen(!commercialOpen)}
              aria-expanded={commercialOpen}
            >
              <span>Commercial</span>
              <FaChevronDown className={`dropdown-icon ${commercialOpen ? "rotated" : ""}`} />
            </button>

            <div className={`dropdown-menu ${commercialOpen ? "show" : ""}`}>
              <div className={`dropdown-submenu ${commercialSubOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="submenu-btn"
                  onClick={() => setCommercialSubOpen(!commercialSubOpen)}
                  aria-expanded={commercialSubOpen}
                >
                  <span>Ongoing Projects</span>
                  <FaChevronRight className={`submenu-icon ${commercialSubOpen ? "rotated" : ""}`} />
                </button>
                <div className={`submenu ${commercialSubOpen ? "show" : ""}`}>
                  <Link to="/voora-tech-edge" onClick={closeMenu}>Voora Tech Edge</Link>
                </div>
              </div>
              <Link to="/commercial-completed" onClick={closeMenu}>Completed Projects</Link>
            </div>
          </li>

          <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="/testimonial" onClick={closeMenu}>Testimonial</Link></li>
          <li><Link to="/blogs" onClick={closeMenu}>Blogs</Link></li>
          <li className="nav-cta-mobile">
            <Link to="/#top" onClick={closeMenu}>Get Consultation</Link>
          </li>
        </ul>

        <Link to="/#top" className="nav-cta" onClick={closeMenu}>
          Get Consultation
        </Link>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}