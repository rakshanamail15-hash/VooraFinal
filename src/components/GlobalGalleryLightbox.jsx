import React, { useState, useEffect } from 'react';
import './GlobalGalleryLightbox.css';

export default function GlobalGalleryLightbox() {
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleGlobalClick = (e) => {
            const target = e.target;
            if (target.tagName === 'IMG' && target.closest('.gallery-card')) {
                e.preventDefault();

                // Find all images within the same row/track to create a gallery array
                const track = target.closest('.gallery-marquee-track');
                if (track) {
                    const imgElements = Array.from(track.querySelectorAll('.gallery-card img'));
                    const srcs = imgElements.map(img => img.src);

                    if (srcs.length > 0) {
                        setImages(srcs);
                        setCurrentIndex(srcs.indexOf(target.src));
                        setIsOpen(true);
                    }
                }
            }
        };

        document.addEventListener('click', handleGlobalClick);
        return () => document.removeEventListener('click', handleGlobalClick);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || images.length === 0) return null;

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="global-lightbox-overlay" onClick={() => setIsOpen(false)}>
            <button className="global-lightbox-close" onClick={() => setIsOpen(false)}>×</button>
            <button className="global-lightbox-nav prev" onClick={handlePrev}>‹</button>
            <div className="global-lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={images[currentIndex]} alt="Gallery Preview" />
            </div>
            <button className="global-lightbox-nav next" onClick={handleNext}>›</button>
        </div>
    );
}
