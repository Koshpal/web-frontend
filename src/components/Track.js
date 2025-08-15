import React, { useState, useEffect } from "react";
import "./Track.css";

function Track() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="track-section">
      <div className="track-wrapper">
        <img
          src={isMobile ? "/phone-track.png" : "/trackfull.png"}
          alt="Track Smarter Spend Wiser"
          className="track-image"
        />

        {/* Button placement changes only for mobile */}
        {isMobile ? (
          <a href="#statistics" className="track-button mobile-button">
            Services
          </a>
        ) : (
          <a href="#statistics" className="track-button">
            Services
          </a>
        )}
      </div>
    </section>
  );
}

export default Track;
