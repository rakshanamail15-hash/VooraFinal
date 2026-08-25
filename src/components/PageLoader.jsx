import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
const favIcon = "https://res.cloudinary.com/wdfwbagg/image/upload/v1785917270/fav1_nlyrnx.png";
import "./PageLoader.css";

// Preload the image so it's instantly available from cache when a user navigates
const preloadedImg = new Image();
preloadedImg.src = favIcon;

export default function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the very first load / mounting of the app
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Do not show the new loader when navigating to the homepage (first page)
    if (location.pathname === "/") {
      return;
    }

    // Trigger the loading state
    setIsLoading(true);

    // Keep loading for 2 seconds (2000ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Lock body scroll while the page loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay" aria-hidden="true">
      <div className="page-loader-content">
        <img
          src={favIcon}
          alt="Loading..."
          className="page-loader-logo"
        />
        <div className="page-loader-spinner">
          <div className="spinner-ring"></div>
        </div>
      </div>
    </div>
  );
}
