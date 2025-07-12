import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Moneysense.css";

function MoneySense() {
  const phoneRef = useRef(null);

  useEffect(() => {
    // Scroll animation init
    AOS.init({ duration: 800 });

    // Tilt effect init
    if (phoneRef.current) {
      VanillaTilt.init(phoneRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <section className="money-sense">
      {/* Morphing blob background */}
      <div className="blob-bg">
        <div className="blob-shape" />
      </div>

      {/* Left Content */}
      <div className="left" data-aos="fade-right">
        <img src="/moneysense1.png" alt="Juggling Finance" className="Juggling" />

        <h1 data-aos="fade-up">
          Where Money
          <br />
          Makes <span>Sense</span>
        </h1>

        <p data-aos="fade-up" data-aos-delay="100">
          We redefine personal finance by helping you{" "}
          <span className="link with-icon">track</span>,{" "}
          <span className="link with-icon">plan</span>, and{" "}
          <span className="link with-icon">grow</span> their wealth effortlessly
        </p>

        <a href="#getintouch" data-aos="fade-up" data-aos-delay="200">
          <button className="notify-btn">Get notified</button>
        </a>
      </div>

      {/* Right Side Phone */}
      <div className="right" data-aos="fade-left">
        <img
          ref={phoneRef}
          src="/moneysense3.png"
          alt="Phone UI"
          className="phone-ui"
        />
      </div>
    </section>
  );
}

export default MoneySense;
