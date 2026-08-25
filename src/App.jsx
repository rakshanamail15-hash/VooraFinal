import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import {
  initTracker,
  captureLead,
  getLeadTrackerParams,
} from "./utils/tracker";
import useReveal from "./hooks/useReveal";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import UpcomingProjects from "./components/UpcomingProjects";
import CompletedProjects from "./components/CompletedProjects";
import TrustStats from "./components/TrustStats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CustomerTestimonials from "./components/CustomerTestimonials";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import HeroCarousel from "./components/HeroCarousel";
import CompanyRibbon from "./components/HeroRibbon";


import VooraTechEdge from "./pages/VooraTechEdge";
import VooraOneSea from "./pages/VooraOneSea";
import Upcomingprojects from "./pages/Upcomingproject";
import Completed from "./pages/Completed";
import VooraAgastya from "./pages/VooraAgastya";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import VooraWestside from "./pages/VooraWestside";
import VooraBeckford from "./pages/VooraBeckford";
import VooraHighwayHaven from "./pages/VooraHighwayHaven";
import VooraTblock from "./pages/VooraVidyasagarTblock";
import GlobalGalleryLightbox from "./components/GlobalGalleryLightbox";
import VooraOceans27 from "./pages/VooraOceans27";
import Abouts from "./pages/About-us";
import CommercialCompleted from "./pages/CommercialCompleted";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/About-us";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./pages/Testimonial";
import ProjectImageSection from "./components/ProjectImagesection";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import JointDevelopment from "./pages/JointDevelopment";
import HeroOneSea from "./components/HeroOneSea";
import HeroAgastya from "./components/HeroAgastya";
const HeroHighwayHaven = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917273/herohighwayhaven_f6cn4e.webp";
import OneSea from "./pages/onesea";

function HomePage() {
  return (

    <main>
      <Preloader />

      <section className="banner-section">
        <HeroCarousel />
      </section>
      <About />
      <UpcomingProjects />
      <ProjectImageSection />
      <CompletedProjects />
      <TrustStats />
      <CompanyRibbon />
      <CustomerTestimonials />
      <Testimonials />
      <Contact />
    </main>
  );
}

function AppContent() {
  useReveal();

  useEffect(() => {
    initTracker();

    const handleGlobalSubmit = (e) => {
      // If React onSubmit handler called preventDefault, skip to avoid double logging
      if (e.defaultPrevented) return;

      const form = e.target;
      if (!form) return;

      // Identify form type
      let formClass = form.className || '';
      let formName = 'Web Lead Form';
      if (formClass.includes('book-site-visit-form')) {
        formName = 'Project Page Site Visit Form';
      } else if (formClass.includes('download-brochure')) {
        formName = 'Project Page Brochure Form';
      } else if (formClass.includes('brochure-form')) {
        formName = 'Grid Card Brochure Form';
      } else if (form.id) {
        formName = form.id;
      }

      // Extract form fields
      const formData = {};
      const elements = form.elements;
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
          let key = el.name || el.id || '';
          if (!key && el.placeholder) {
            key = el.placeholder.toLowerCase().replace(/[^a-z0-9]/g, '_');
          }
          if (!key) continue;

          if (el.type === 'checkbox' || el.type === 'radio') {
            if (el.checked) formData[key] = el.value;
          } else {
            formData[key] = el.value;
          }
        }
      }

      // Deduce project name
      if (!formData.project && !formData.projectInterest) {
        const modalHeader = form.closest('.brochure-modal')?.querySelector('h3')?.textContent ||
          form.closest('.download-brochure-box')?.querySelector('h2')?.textContent ||
          form.closest('section')?.querySelector('h2')?.textContent ||
          '';

        const path = window.location.pathname.toLowerCase();
        let deducedProject = '';
        if (path.includes('one-sea')) deducedProject = 'Voora One Sea';
        else if (path.includes('agastya')) deducedProject = 'Voora Agastya Heights';
        else if (path.includes('westside')) deducedProject = 'Voora Westside';
        else if (path.includes('beckford')) deducedProject = 'Voora Beckford';
        else if (path.includes('highway-haven')) deducedProject = 'Voora Highway Haven';
        else if (path.includes('t-block') || path.includes('vidyasagar')) deducedProject = 'Voora Vidyasagar T-Block';
        else if (path.includes('oceans')) deducedProject = 'Voora Ocean\'s 27';
        else if (path.includes('tech-edge')) deducedProject = 'Voora Tech Edge';
        else if (modalHeader) deducedProject = modalHeader;

        // Fallback to mapped campaign project if available
        if (!deducedProject) {
          const trackerParams = getLeadTrackerParams();
          if (trackerParams.mappedProject) {
            deducedProject = trackerParams.mappedProject;
          }
        }

        formData.project = deducedProject;
      }


      if (formData.projectInterest && !formData.project) {
        formData.project = formData.projectInterest;
      }

      // Capture and save lead
      captureLead(formName, formData);

      e.preventDefault();
      const pName = formData.project || 'Project';
      const isSiteVisit = formClass.includes('book-site-visit-form');
      const successMsg = isSiteVisit
        ? `Thank you! Your site visit request for ${pName} has been received. Our team will reach out shortly.`
        : `Thank you! Your brochure download request for ${pName} has been received.`;
      alert(successMsg);
      form.reset();

      // Close open modals
      const closeBtn = form.closest('.brochure-overlay')?.querySelector('.close-modal');
      if (closeBtn) closeBtn.click();
    };

    document.addEventListener('submit', handleGlobalSubmit);
    return () => document.removeEventListener('submit', handleGlobalSubmit);
  }, []);

  return (
    <>
      <ScrollToTop />
      <PageLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/voora-tech-edge" element={<VooraTechEdge />} />
        <Route path="/voora-one-sea" element={<VooraOneSea />} />
        <Route path="/upcoming-section" element={<Upcomingprojects />} />
        <Route path="/voora-agastya" element={<VooraAgastya />} />
        <Route path="/voora-westside" element={<VooraWestside />} />
        <Route path="/voora-beckford" element={<VooraBeckford />} />
        <Route path="/voora-highway-haven" element={<VooraHighwayHaven />} />
        <Route path="/voora-vidyasagar-t-block" element={<VooraTblock />} />
        <Route path="/voora-oceans-27" element={<VooraOceans27 />} />
        <Route path="/completed" element={<Completed />} />
        {/* <Route path="/about-us" element={<Abouts />} /> */}
        <Route path="/commercial-completed" element={<CommercialCompleted />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/jointdevelopment" element={<JointDevelopment />} />

        {/* Temporary routes for previewing the new hero variants */}
        <Route path="/HeroOneSea" element={<HeroOneSea />} />
        <Route path="/HeroAgastya" element={<HeroAgastya />} />
        <Route path="/HeroHighwayHaven" element={<HeroHighwayHaven />} />
        <Route path="/OneSea" element={<OneSea />} />
      </Routes>
      <Footer />
      <ChatWidget />
      <GlobalGalleryLightbox />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}