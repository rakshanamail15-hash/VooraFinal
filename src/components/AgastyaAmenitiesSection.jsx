import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AmenitiesSection.css';
import Amenities_img1 from './assets/AgastyaAmenities1.png';
import Amenities_img2 from './assets/AgastyaAmenities2.png';
import Amenities_img3 from './assets/AgastyaAmenities3.png';
import Amenities_img4 from './assets/AgastyaAmenities4.png';
import Amenities_img6 from './assets/AgastyaAmenities5.png';
const Amenities_img8 = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787202459/AgastyaAmenities6_hu4gyv.png';
const AminitiesImage = 'https://res.cloudinary.com/wdfwbagg/image/upload/v1787222232/agastyaamenetiesrep_qaepfl.png';

const AMENITIES = [
    {
        id: 'Kids Play Zone',
        label: 'Kids Play Zone',
        img: Amenities_img1,
    },
    {
        id: 'Smart Home Automation',
        label: 'Smart Home Automation ',
        img: Amenities_img2,
    },
    {
        id: 'Fully Equipped Gym',
        label: 'Fully Equipped Gym',
        img: Amenities_img3,
    },
    {
        id: 'Landscaped Terrace & Party Lawn',
        label: 'Landscaped Terrace & Party Lawn',
        img: Amenities_img4,
    },
    {
        id: 'EV Charging Stations',
        label: 'EV Charging Stations',
        img: Amenities_img6,
    },
    {
        id: 'Visitor Parking',
        label: 'Visitor Parking',
        img: Amenities_img8,
    },
];

export default function AgastyaAmenitiesSection() {
    const pinRef = useRef < HTMLDivElement > (null);
    const trackRef = useRef < HTMLDivElement > (null);
    const progressRef = useRef < HTMLDivElement > (null);
    const navigate = useNavigate();

    useEffect(() => {
        const pin = pinRef.current;
        const track = trackRef.current;
        const progressBar = progressRef.current;
        if (!pin || !track || !progressBar) return;

        function updateGallery() {
            if (!pin || !track || !progressBar) return;

            const rect = pin.getBoundingClientRect();
            const pinHeight = pin.offsetHeight;
            const viewportH = window.innerHeight;

            const scrollableDistance = pinHeight - viewportH;

            let progress = -rect.top / scrollableDistance;
            progress = Math.max(0, Math.min(1, progress));

            const maxTranslate = Math.max(
                0,
                track.scrollWidth - track.parentElement!.clientWidth + 40,
            );
            track.style.transform = `translateX(-${progress * maxTranslate}px)`;
            progressBar.style.width = `${progress * 100}%`;
        }

        window.addEventListener('scroll', updateGallery, { passive: true });
        window.addEventListener('resize', updateGallery);

        updateGallery();

        return () => {
            window.removeEventListener('scroll', updateGallery);
            window.removeEventListener('resize', updateGallery);
        };
    }, []);

    return (
        <>
            <section id="amenities" className="amenities-intro">
                <div className="amenities-intro__image">
                    <img src={AminitiesImage} alt="One Sea Residences lobby" />
                </div>
                <div className="amenities-intro__copy">
                    <div className="amenities-intro__eyebrow">Luxury Amenities</div>
                    <h2 className="overview-heading">
                        Amenities <span className="highlight-text" style={{ color: 'rgb(181, 147, 88)' }}>Experiences</span>
                    </h2>
                    <p className="overview-description">
                        Step outside your door and into a world designed for how you
                        actually want to live. From sunrise yoga decks to sea-facing pools,
                        every amenity at One Sea Residences is built around wellness, play,
                        and connection. With 40+ curated spaces spread across landscaped
                        grounds, there's always somewhere new to unwind, gather, or move.
                    </p>
                    <button className="contact-btn-ne" onClick={() => document.querySelector('.onesea-book-section')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get Consultation
                        <span className="btn-icon">
                            <svg width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </span>
                    </button>
                </div>
            </section>

            <div className="gallery-pin" ref={pinRef}>
                <div className="gallery-sticky">
                    <div className="gallery-track" ref={trackRef}>
                        {AMENITIES.map((item) => (
                            <div className="amenity-card" key={item.id}>
                                <div className="amenity-card__img">
                                    <img src={item.img} alt={item.label} />
                                </div>
                                <div className="amenity-card__label">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="gallery-footer">
                        <button className="contact-btn-new" onClick={() => navigate('/agastyaallamenities')}>
                            View All Amenities
                            <span className="btn-icon">
                                <svg width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div className="gallery-progress">
                        <div className="gallery-progress__bar" ref={progressRef} />
                    </div>
                </div>
            </div>
        </>
    );
}
