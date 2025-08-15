import React from "react";
import "./Hero.css";

function Hero() {
  return React.createElement(
    "section",
    { className: "hero" },
    [
      // Background image
      React.createElement("img", {
        src: "/background.png",
        alt: "Background",
        className: "hero-video",
        key: "bg"
      }),

      // Content wrapper
      React.createElement(
        "div",
        { className: "hero-content", key: "content" },
        [
          // Badge
          React.createElement(
            "div",
            { className: "hero-badge", key: "badge" },
            [
              React.createElement("span", { className: "badge-icon", key: "icon" }, "✦"),
              " Personal Finance Done Right"
            ]
          ),

          // Title
          React.createElement(
            "h1",
            { key: "title" },
            "Track spends, Quick saving, and Smart breakdown"
          ),

          // Description
          React.createElement(
            "p",
            { key: "desc" },
            "One app for all your finances. Know your cashflows, analyze your habits, and hit your money goals."
          ),

          // Button
          React.createElement(
            "button",
            { className: "btn-primary", key: "button" },
            "Get Notified"
          )
        ]
      )
    ]
  );
}

export default Hero;
