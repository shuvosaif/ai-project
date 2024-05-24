import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AdvBanner from "./components/AdvBanner";
import Hero from "./components/Hero";
import VideoBanner from "./components/VideoBanner";
import CardBanner from "./components/CardBanner";
import SideBanner from "./components/SideBanner";
import SlidingBanner from "./components/SlidingBanner";
import SlidingCard from "./components/SlidingCard";
import BannerLast from "./components/BannerLast";
import Footer from "./components/Footer";
import MainSection from "./components/ui/MainSection";

const App = () => {
  return (
    <>
      <MainSection>
        <Navbar />
        <Banner />
        <AdvBanner />
        <Hero />
        <VideoBanner />
        <CardBanner />
        <SideBanner />
        <SlidingBanner />
        <SlidingCard />
        <BannerLast />
      </MainSection>
      <Footer />
    </>
  );
};

export default App;
