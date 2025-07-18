import React from "react";
import { useDocumentHead } from "./hooks/useDocumentHead";

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
  useDocumentHead({
    title: "Koshpal",
    description:
      "Personal finance management app for tracking expenses, budgeting, and financial planning",
    keywords:
      "finance, money management, budgeting, expense tracking, financial planning",
    author: "Koshpal",
    ogTitle: "Koshpal",
    ogDescription: "Smart financial planning and expense tracking made simple",
    ogImage: "/logo.png",
    twitterTitle: "Koshpal",
    twitterDescription:
      "Smart financial planning and expense tracking made simple",
    twitterImage: "/logo.png",
    favicon: "/logo.png",
  });

  return (
    <>
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
