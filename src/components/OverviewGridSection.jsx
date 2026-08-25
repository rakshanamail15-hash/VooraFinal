import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Built_img1 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787219033/Built-img1_nan12l.webp";
const Built_img2 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787224714/Built-img2_gtmiqx.webp";
const Built_img3 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787151314/Built-img3_azmwv0.webp";
const Built_img4 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787145271/Built-img4_fknned.webp";
const Built_img5 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1786088231/Built-img5_rywbnu.webp";
const Built_img6 = "https://res.cloudinary.com/wdfwbagg/image/upload/v1787313670/Built-img6_yzvck9.webp";

const overviewImages = [
    { src: Built_img1, caption: "Located on ECR at Kanathur" },
    { src: Built_img2, caption: "Grand Club spread across 60,000 sq. ft" },
    { src: Built_img3, caption: "1-acre natural lake inside the community" },
    { src: Built_img4, caption: "Tallest tower in ECR with 41 floors" },
    { src: Built_img5, caption: "100% eco-sensitive with 1,000+ trees" },
    { src: Built_img6, caption: "2 & 3 BHK - (1112 sq.ft to 1584 sq.ft)" },
];

function GridCard({ item, index }: { item: { src: string; caption: string }; index: number }) {
    const cardRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.15 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`overview-grid-card ${inView ? "in-view" : ""}`}
            style={{ transitionDelay: `${(index % 2) * 0.15}s` }}
        >
            <div className="overview-grid-img-wrapper">
                <img src={item.src} alt={item.caption} className="overview-grid-img" />
            </div>
            <p className="overview-grid-caption">{item.caption}</p>
        </div>
    );
}

function OverviewGridSection() {
    const navigate = useNavigate();

    return (
        <section id="highlights" className="overview-grid-section">
            <div className="overview-grid-sidebar">
                <h1 className="overview-heading built-vision-heading">
                    Built on Vision,<br></br> <span className="highlight-text">Raised by the Sea </span>
                </h1>
            </div>

            <div className="overview-grid-wrapper">
                <div className="overview-grid-layout">
                    {overviewImages.map((item, index) => (
                        <GridCard key={index} item={item} index={index} />
                    ))}
                </div>
                <div className="gallery-footer">
                    <button className="contact-btn-new" onClick={() => navigate('/view-all')}>
                        View All Highlights
                        <span className="btn-icon">
                            <svg width="25" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OverviewGridSection;
