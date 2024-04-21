import { useState } from "react";
import Navbar from "../Elements/Navbar";
import bgImage from "../../assets/img/hero-bali.jpg";
import Home from "../Layouts/Home";
import BudayaSection from "../Layouts/Budaya";
import CeritaLayout from "../Layouts/Cerita";
import VideoSection from "../Layouts/Video";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <BudayaSection />
      <VideoSection />
      <CeritaLayout />
    </>
  );
}

export default HomePage;
