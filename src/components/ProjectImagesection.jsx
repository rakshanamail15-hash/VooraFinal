import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectImagesection.css";

const VooraOneSeaImage = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917320/oneseaRibbon_bxxrf3.png";
const VooraAgastya = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785923335/AgastyaRibbon_trwsxv.jpg";
const VooraWestside = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917400/westsideRibbon_pod2hf.jpg";
const voorabeckford = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787062984/BeckfordRibbon_2_th5lhv.jpg";
const VooraHighwayHaven = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917282/highwayheaven_amenities_hp3nk2.jpg";

const vooratechedge = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786011239/tech-edgeRibbon_ytnaqj.jpg"

const firstCardData = [
  {
    image: VooraOneSeaImage,
    title: "Voora One Sea",
    route: "/voora-one-sea",
  },
  // {
  //   image: VooraAgastya,
  //   title: "Voora Agastya",
  //   route: "/voora-agastya",
  // },
  // {
  //   image: VooraWestside,
  //   title: "Voora Westside",
  //   route: "/voora-westside",
  // },
  // {
  //   image: VooraBeckford,
  //   title: "Voora Beckford",
  //   route: "/voora-beckford",
  // },
];

const secondCardData = [
  {
    image: VooraHighwayHaven,
    title: "Voora Highway Haven",
    route: "/voora-highway-haven",
  },
  // {
  //   image: VooraTechEdge,
  //   title: "Voora Tech Edge",
  //   route: "/voora-tech-edge",
  // },
];

export default function ProjectImageSection() {
  const navigate = useNavigate();

  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);



  // Image Slider
  useEffect(() => {
    const firstTimer = setInterval(() => {
      setFirstIndex((prev) => (prev + 1) % firstCardData.length);
    }, 5000);

    const secondTimer = setInterval(() => {
      setSecondIndex((prev) => (prev + 1) % secondCardData.length);
    }, 5000);

    return () => {
      clearInterval(firstTimer);
      clearInterval(secondTimer);
    };
  }, []);

  return (
    <section className="explore-section">
      {/* ===== Background only ===== */}
      <div className="services-bg" aria-hidden="true">
        <div className="services-bg-ambient" />
        <div className="services-bg-glow" />
        <div className="services-bg-grid" />
        <div className="services-bg-scan" />
      </div>

      <div className="explore-heading">



        <h2 className="section-title">
          Our Landmark<br className="br-only" />
          <span className="accent">  Projects</span>
        </h2>
        <p>Explore premium developments designed with innovation, quality, and timeless appeal.</p>


      </div>

      <div className="explore-grid">

        {/* First Card */}
        <div
          className="explore-card"
          onClick={() => navigate(firstCardData[firstIndex].route)}
        >
          <img
            src={firstCardData[firstIndex].image}
            alt={firstCardData[firstIndex].title}
            className="explore-image"
          />

          <div className="explore-overlay"></div>

          <div className="explore-content">
            <h2>{firstCardData[firstIndex].title}</h2>
            <span>Explore →</span>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="explore-card"
          onClick={() => navigate(secondCardData[secondIndex].route)}
        >
          <img
            src={secondCardData[secondIndex].image}
            alt={secondCardData[secondIndex].title}
            className="explore-image"
          />

          <div className="explore-overlay"></div>

          <div className="explore-content">
            <h2>{secondCardData[secondIndex].title}</h2>
            <span>Explore →</span>
          </div>
        </div>

      </div>

    </section>
  );
}
