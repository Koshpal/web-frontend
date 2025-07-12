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
        <button className="btn-primary">Coming Soon</button>
      </div>
    </section>
  );
}

export default Hero;
