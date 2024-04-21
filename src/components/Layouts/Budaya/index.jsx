import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Card from "../../Fragments/Card";
import cardsData from "./cardBudaya.json";

const BudayaSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 640;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const limitedData = isMobile ? cardsData.slice(0, 3) : cardsData.slice(0, 3);
  return (
    <>
      <div
        className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 items-center flex"
        id="budaya"
      >
        <div className="my-12 grid-cols-5 justify-center items-center">
          <div className="heading flex flex-col gap-4 col-span-5 lg:col-span-3 mb-6">
            <div className="flex flex-col gap-2 mb-6">
              <h1 className="text-3xl font-bold leading-snug max-w-screen-sm">
                Menjelajahi Budaya
              </h1>
              <p className="text-lg text-[#838383] max-w-screen-sm">
                Eksplor keindahan budaya kita yang memberi warna pada nilai
                kebhinekaan.
              </p>
            </div>
          </div>
          <div className="budaya-content">
            <div
              className={`lg:grid lg:grid-cols-3 block md:grid md:grid-cols-2 lg:grid ${
                isMobile ? "grid-cols-2" : "grid-cols-3"
              } gap-x-8`}
            >
              {limitedData.map((card, index) => (
                <Card
                  key={index} // or use a unique identifier from your card data
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.deskripsi}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudayaSection;
