import React from "react";
import "./Track.css";

function Track() {
  return (
    <section className="track-section">
      <div className="track-wrapper">
        <img
          src="/trackfull.png"
          alt="Track Smarter Spend Wiser"
          className="track-image"
        />
        <a href="#statistics" className="track-button">Services</a>
      </div>
    </section>
  );
}

export default Track;
