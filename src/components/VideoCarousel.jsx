import React, { useState, useEffect } from 'react';

export default function VideoCarousel({ videos = [], titles = [] }) {
    const [start, setStart] = useState(0);
    const [perView, setPerView] = useState(
        typeof window !== 'undefined' && window.innerWidth <= 768 ? 1 : 2
    );

    useEffect(() => {
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setPerView(window.innerWidth <= 768 ? 1 : 2);
            }, 150);
        };

        window.addEventListener("resize", handleResize, { passive: true });
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setStart((s) => {
                const currentMaxStart = Math.max(0, videos.length - perView);
                return s >= currentMaxStart ? 0 : s + 1;
            });
        }, 4000); // Transitions every 4 seconds

        return () => clearInterval(timer);
    }, [videos.length, perView]);

    const maxStart = Math.max(0, videos.length - perView);
    const prev = () => setStart((s) => Math.max(0, s - 1));
    const next = () => setStart((s) => Math.min(maxStart, s + 1));

    return (
        <div className="vs-carousel-wrapper" style={{ overflow: "hidden", width: "100%" }}>
            <div
                className="vs-track"
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    margin: 0,
                    padding: 0,
                    transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                    willChange: "transform",
                    transform: `translateX(-${start * (100 / perView)}%)`
                }}
            >
                {videos.map((id, index) => (
                    <div
                        className="vs-card"
                        key={index}
                        style={{ flex: `0 0 ${100 / perView}%`, boxSizing: "border-box", margin: 0, padding: "0 12px" }}
                    >
                        {id.includes('.mp4') || id.includes('assets') ? (
                            <video
                                src={id}
                                title={`Short ${index + 1}`}
                                controls
                                loop
                                style={{ width: "100%", height: "380px", borderRadius: "18px", objectFit: "fill", background: "#000" }}
                            />
                        ) : (
                            <iframe
                                src={`https://www.youtube.com/embed/${id}?rel=0`}
                                title={`Short ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ width: "100%", height: "380px", borderRadius: "18px", border: "none" }}
                            />
                        )}
                    </div>
                ))}
            </div>


        </div>
    );
}
