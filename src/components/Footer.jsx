import './Footer.css'
import { Link } from 'react-router-dom'
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
  FaFacebookF,
} from 'react-icons/fa6'
const footerlogo = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787728235/Voora_logo_png_pw2cvi.png"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ADDRESS */}
        <div className="footer-col">
          <h3>ADDRESS</h3>

          <p className="address-title">
            Voora Group Corporate Office
          </p>

          <p>
            139, Dr. Radha Krishnan Salai,
            <br />
            Mylapore, Chennai,
            <br />
            Tamil Nadu 600004
          </p>

          <div className="footer-contact">
            <h4>Email</h4>
            <a href="mailto:vpd@voora.co.in">
              vpd@voora.co.in
            </a>
          </div>

          <div className="footer-contact">
            <h4>Phone</h4>
            <a href="tel:+914440419999">
              +91 44 4041 9999
            </a>

            <a href="tel:+917299222115">
              +91 72 9922 2115
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>QUICK LINK</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            {/* <li><Link to="/about-us">NRI</Link></li> */}
            <li><Link to="/jointdevelopment">Joint Development</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/about-us">Awards</Link></li>
            {/* <li><a href="/">News & Media</a></li>
            <li><Link to="/#top">Contact Us</Link></li>
            <li><a href="/">Disclaimer</a></li>*/}
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* CENTER LOGO */}
        <div className="footer-center">

          <div className="footer-logo-box">
            <img
              src={footerlogo}
              alt="Voora Logo"
              className="footer-logo"
            />



            <h4>CREDAI</h4>
          </div>

          <div className="follow-section">
            <h3>FOLLOW US</h3>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61571667778831&ref=NONE_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/vooragroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/vooragroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/vooragroups/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@vooragroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.pinterest.com/vooragroup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>

          <p className="copyright">
            Copyright 2026 © Voora – All rights Reserved.
            <br />
            <span style={{ color: "#d4a646" }}>
              Designed & Developed By{" "}
              <a
                href="https://www.asterinfometrics.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d4a646", textDecoration: "none" }}
                title="Visit Designer"
              >
                ASTER INFOMETRICS
              </a>
            </span>
          </p>
        </div>

        {/* ONGOING PROJECTS */}
        <div className="footer-col">
          <h3>ONGOING PROJECTS</h3>

          <ul>
            <li><Link to="/voora-one-sea">Voora One Sea</Link></li>
            <li><Link to="/voora-westside">Voora Westside</Link></li>
            <li><Link to="/voora-beckford">Voora Beckford</Link></li>
            <li><Link to="/voora-highway-haven">Voora Highway Haven</Link></li>
            <li><Link to="/voora-tech-edge">Voora Techedge</Link></li>
          </ul>
        </div>

        {/* COMPLETED PROJECTS */}
        <div className="footer-col">
          <h3>COMPLETED PROJECTS</h3>

          <ul>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Narayana</Link></li>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Prakash</Link></li>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Villa 96</Link></li>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Vidyasagar Oswal</Link></li>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Saraswathi</Link></li>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Gitanjali</Link></li>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Vijayasree</Link></li>
            <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Pritvi</Link></li>
            {/* <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Radha Homes</Link></li> */}
            {/* <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Vidyasagar Oswal Gardens T-Block</Link></li> */}
            {/* <li><Link to="/completed" onClick={() => window.scrollTo(0, 0)}>Voora Ocean's27</Link></li> */}

            {/* <li><a href="/">Voora J.K. Tower</a></li>
            <li><a href="/">Voora Sreela Terrace</a></li>
            <li><a href="/">Voora Ashwin</a></li> */}
          </ul>
        </div>

      </div>
    </footer>

  )
}