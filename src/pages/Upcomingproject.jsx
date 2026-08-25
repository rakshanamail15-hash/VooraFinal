import React, { useState, useEffect } from "react";
import UpcomingProjects from "../components/UpcomingProjects";
// import upcomingbanner from "../assets/image/upcomingbanner.webp";
const upcomingbanner = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786598406/voora_upcoming_project_o0esev.jpg";

import "./Upcomingproject.css";

function CommercialCompleted() {
  const fullText =
    "Upcoming Residential Apartments\nin Poonamallee & Triplicane";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;

      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-navbar">
        {/* Navbar */}
      </div>

      <section className="upcoming-hero">
        <img
          src={upcomingbanner}
          alt="Voora Residential Upcoming Projects"
          className="upcoming-hero-img"
        />

        <div className="upcoming-hero-texts">
          {typedText.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx !== typedText.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
          <span className="typewriter-cursor">|</span>
        </div>
      </section>

      <UpcomingProjects />
    </>
  );
}

export default CommercialCompleted;