import { useState, useRef, useEffect } from 'react'
import './ClientStories.css'
import {
  IcPlay,
  IcStar,
  IcArrowRight,
  IcChevronLeft,
  IcChevronRight,
  IcClose,
} from './Icons'


const stories = [
  {
    id: 1,
    videoId: 'ESAD4lMGoow',
    name: 'Rajesh Sharma',
    label: 'Client Review',
  },
  {
    id: 2,
    videoId: 'Id3OAOGsPIk',
    name: 'Priya Nair',
    label: 'Client Review',
  },
  {
    id: 3,
    videoId: 'ocUX26KqlIQ',
    name: 'Arjun Mehta',
    label: 'Client Review',
  },
  {
    id: 4,
    videoId: 'RWd1JyTms6A',
    name: 'Sneha Kapoor',
    label: 'Client Review',
  },
  {
    id: 5,
    videoId: 'Im58BnXNUpY',
    name: 'Vikram Reddy',
    label: 'Client Review',
  },
  {
    id: 6,
    videoId: 'iy5gFvfzC90',
    name: 'Karthik Iyer',
    label: 'Client Review',
  },

];

export default function ClientStories() {
  const [active, setActive] = useState(2)
  const [playing, setPlaying] = useState(null)

  const trackRef = useRef(null)

  const goPrev = () => {
    setActive((i) =>
      i <= 0 ? stories.length - 1 : i - 1
    )
  }

  const goNext = () => {
    setActive((i) =>
      i >= stories.length - 1 ? 0 : i + 1
    )
  }

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    const activeCard =
      track.querySelector('.cs-card--active')

    if (activeCard) {
      activeCard.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [active])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setPlaying(null)
      }
    }

    window.addEventListener('keydown', onKey)

    return () =>
      window.removeEventListener('keydown', onKey)
  }, [])

  const openVideo = (story) => {
    setPlaying(story)
  }

  const closeVideo = () => {
    setPlaying(null)
  }

  // — Typewriter for "Project Showcase" eyebrow —
  const [typedShowcase, setTypedShowcase] = useState("");
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const text = "REAL CLIENT STORIES";
    let i = 0;
    let timeout;
    const type = () => {
      setTypedText(text.slice(0, i + 1));
      i++;
      if (i <= text.length) {
        timeout = setTimeout(type, 90);
      } else {
        timeout = setTimeout(() => { i = 0; setTypedText(""); type(); }, 2400);
      }
    };
    type();
    return () => clearTimeout(timeout);
  }, []);


  return (
    <section className="cs-section">

      <div className="container">

        {/* HEADER */}

        <div className="cs-head">

          <div class="heading-mains">
            <div data-reveal="true" class="active is-visible">
              <h2 class="section-title">Client Satisfaction
                <span class="accent"> Stories</span></h2>
            </div></div>

          <p className="text-dark">
            Hear directly from the people whose
            lives and businesses
            <br />
            we've had the privilege to impact.
          </p>

          {/* STATS */}

          <div className="cs-stats">

            <div className="cs-stat">
              <strong>20+</strong>
              <span>Stories Shared</span>
            </div>

            <div className="cs-stat-divider" />

            <div className="cs-stat">
              <strong>100%</strong>
              <span>Real Clients</span>
            </div>

            <div className="cs-stat-divider" />

            <div className="cs-stat">
              <strong>
                4.8
                <IcStar className="cs-stat-star" aria-hidden="true" />
              </strong>
              <span>Avg Rating</span>
            </div>

          </div>

        </div>

        {/* CAROUSEL */}

        <div className="cs-carousel">

          {/* TRACK */}

          <div
            className="cs-track"
            ref={trackRef}
          >

            {stories.map((s, i) => {

              const isActive = i === active

              return (

                <button
                  key={s.id}
                  className={`cs-card ${isActive
                    ? 'cs-card--active'
                    : ''
                    }`}
                  onClick={() =>
                    isActive
                      ? openVideo(s)
                      : setActive(i)
                  }
                  aria-label={`${isActive
                    ? 'Play'
                    : 'View'
                    } ${s.label}`}
                >

                  {/* THUMB */}

                  <div
                    className="cs-thumb"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/${s.videoId}/hqdefault.jpg)`,
                    }}
                  >

                    {/* OVERLAY */}
                    <div className="cs-overlay" />

                    {/* LABEL */}
                    <span className="cs-label">
                      {s.label}
                    </span>

                    {/* PLAY AREA */}

                    {isActive && (
                      <>

                        <span className="cs-play">
                          <IcPlay aria-hidden="true" />
                        </span>

                        <div className="cs-watch">

                          <span>
                            WATCH STORY
                          </span>

                        </div>

                      </>
                    )}

                  </div>

                </button>

              )
            })}

          </div>

        </div>

        {/* DOTS */}

        <div className="cs-dots">

          <button
            className="cs-dot-arrow"
            onClick={goPrev}
            aria-label="Previous story"
          >
            <IcChevronLeft aria-hidden="true" />
          </button>

          {stories.map((s, i) => (

            <button
              key={s.id}
              className={`cs-dot-btn ${i === active
                ? 'is-active'
                : ''
                }`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${s.label}`}
            />

          ))}

          <button
            className="cs-dot-arrow"
            onClick={goNext}
            aria-label="Next story"
          >
            <IcChevronRight aria-hidden="true" />
          </button>

        </div>

      </div>

      {/* VIDEO MODAL */}

      {playing && (

        <div
          className="cs-modal-overlay"
          onClick={closeVideo}
        >

          <div
            className="cs-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="cs-modal-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <IcClose aria-label="Close video" />
            </button>

            {/* MODAL HEAD */}

            <div className="cs-modal-head">

              <span className="cs-modal-label">
                {playing.label}
              </span>

              <h3>
                {playing.name}'s Story
              </h3>

            </div>

            {/* YOUTUBE VIDEO */}

            <div className="cs-modal-video">
              <iframe
                src={`https://www.youtube.com/embed/${playing.videoId}?si=99PzBPz2gkWVB3CS&autoplay=1`}
                title={playing.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>

        </div>

      )}

    </section>
  )
}