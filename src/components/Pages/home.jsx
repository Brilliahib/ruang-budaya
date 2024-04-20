import { useState } from "react";
import Navbar from "../Elements/Navbar";
import bgImage from "../../assets/img/hero-bali.jpg";
import Home from "../Layouts/Home";
import BudayaSection from "../Layouts/Budaya";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <BudayaSection />
    </>
  );
}

export default HomePage;
