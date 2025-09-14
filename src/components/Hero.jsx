// src/components/Hero.js
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/*<video autoPlay loop muted playsInline className="hero-video">
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}
      <img src="/Background.png" alt="Background" className="hero-video" />

      <div className="hero-content">
        <h1>
          Personal finance, done right
          <br />
          Track spends, Quick saving,
          <br />
          and Smart breakdown
        </h1>
        <p>
          One app for all your finances. Know your cashflows, analyze your
          habits, and hit your money goals.
        </p>
        <a href="#getintouch" className="hero-cta" aria-label="Get notified">
          <span className="cta-icon" aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="17"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M3 9H21" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 3V7" stroke="currentColor" strokeWidth="1.6" />
              <path d="M16 3V7" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          Get notified
        </a>
      </div>
    </section>
  );
}

export default Hero;
