import { useState, useEffect } from 'react'
import './Testimonials.css'
const user = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917335/user_z37p18.png";
import Marquee from './Marquee';



const videos = [
  { src: "https://www.youtube.com/embed/byoTnV_YaTM", title: "Voora One Sea" },
  {
    src: "https://www.youtube.com/embed/BCkP2JGxTJs?rel=0", title: "Voora Westside"
  },
  {
    src: "https://www.youtube.com/embed/FUOvesvTRRo?rel=0",
    title: "Voora Beckford"
  },
  { src: "https://www.youtube.com/embed/xY_07Q-94os", title: "Voora Highway Haven" },
];


const reviews = [
  {
    text: 'ARKHE transformed our vision into a breathtaking reality. Every detail was executed with craftsmanship we had never seen before.',
    name: 'Rajesh Sharma',
    role: 'Villa Owner',
    image: user,
  },
  {
    text: 'From blueprint to handover, the team was meticulous and transparent. Our office complex was delivered ahead of schedule.',
    name: 'Priya Nair',
    role: 'CEO, Novatech',
    image: user,
  },
  {
    text: 'The interiors exceeded our expectations. Beautiful, functional and finished to the highest standard imaginable.',
    name: 'Arjun Mehta',
    role: 'Homeowner',
    image: user,
  },
  {
    text: 'Professional, reliable and genuinely passionate about design. ARKHE is now our go-to construction partner.',
    name: 'Sneha Kapoor',
    role: 'Property Developer',
    image: user,
  },
  {
    text: 'They listened, advised and built exactly what we dreamed of — on budget and stress-free.',
    name: 'Vikram Reddy',
    role: 'Restaurant Owner',
    image: user,
  },
]


export default function Testimonials() {

  const [videoIndex, setVideoIndex] = useState(0);
  const [start, setStart] = useState(0);

  const perView = 3;
  const maxStart = reviews.length - perView;

  // TESTIMONIALS
  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  // VIDEO SLIDER — viewport-aware so it works on mobile and desktop
  const [isMobileSlider, setIsMobileSlider] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );
  useEffect(() => {
    const handleResize = () => setIsMobileSlider(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile = 1 video visible, Desktop = 2 visible
  const maxVideoIndex = isMobileSlider
    ? videos.length - 1
    : videos.length - 2;

  const nextVideo = () => {
    if (videoIndex < maxVideoIndex) {
      setVideoIndex((i) => i + 1);
    }
  };

  const prevVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex((i) => i - 1);
    }
  };

  return (
    <section className="customertestimonial" id="insights">

      {/* ===== Background only ===== */}
      <div className="ts-bg" aria-hidden="true">
        <div className="ts-bg-ambient" />
        <div className="ts-bg-glow" />
        <div className="ts-bg-grid" />
        <div className="ts-bg-scan" />
      </div>

      <div className="container">

        {/* VIDEO SECTION */}
        <div className="video-section">
          <div className="heading-main-center">
            <div data-reveal="true" className="active is-visible">
              <h2 className="section-title">
                Explore Our<br className="br-only" />
                <span className="accent"> Developments</span>
              </h2>
              <p>A collection of premium developments crafted to meet evolving lifestyle needs.</p>

            </div>
          </div>

          <button
            className="video-nav video-prev"
            onClick={prevVideo}
            disabled={videoIndex === 0}
          >
            ❮
          </button>

          <div className="video-slider">
            <div
              className="video-track"
              style={{
                transform: `translateX(-${isMobileSlider ? videoIndex * 100 : videoIndex * 50
                  }%)`,
              }}
            >
              {videos.map((video, index) => (
                <div className="video-item" key={index}>
                  <div className="video-card">

                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />



                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="video-nav video-next"
            onClick={nextVideo}
            disabled={videoIndex >= maxVideoIndex}
          >
            ❯
          </button>

        </div>



      </div>
      {/* <Marquee /> */}
    </section>
  );
}