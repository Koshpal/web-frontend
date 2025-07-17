import React from "react";
import { Helmet } from "react-helmet-async";

import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Moneysense from "./components/Moneysense";
import Planer from "./components/Planer";
import Statistics from "./components/Statistics";
import Moneyimg from "./components/Moneyimg";
import Ios from "./components/Ios";
import Track from "./components/Track";
import GetInTouch from "./components/Getintouch";
import Notify from "./components/Notify";
import Faq from "./components/Faq";
import Artical from "./components/Artical";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Koshpal</title>
        <meta
          name="description"
          content="Personal finance management app for tracking expenses, budgeting, and financial planning"
        />
        <meta
          name="keywords"
          content="finance, money management, budgeting, expense tracking, financial planning"
        />
        <meta name="author" content="Koshpal" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Koshpal" />
        <meta
          property="og:description"
          content="Smart financial planning and expense tracking made simple"
        />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Koshpal" />
        <meta
          name="twitter:description"
          content="Smart financial planning and expense tracking made simple"
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />
      </Helmet>

      <Navbar />
      <Hero />
      <Moneysense />
      <Planer />
      <Statistics />
      <Moneyimg />
      <Ios />
      <Track />
      <GetInTouch />
      <Notify />
      <Faq />
      <Artical />
      <Footer />
    </>
  );
}

export default App;
