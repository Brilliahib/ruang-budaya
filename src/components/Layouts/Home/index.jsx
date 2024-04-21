import React from "react";
import Button from "../../Elements/Button";
import bgImage from "../../../assets/img/hero-bali.jpg";

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-center bg-cover background-container"
        style={{
          backgroundImage: `url(${bgImage})`,
          marginTop: "-7rem",
          height: "102vh",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 h-screen items-center flex">
          <div className="grid h-[calc(100vh-80px)] grid-cols-5 justify-center items-center container">
            <div className="text-white flex flex-col gap-4 col-span-5 lg:col-span-3 content">
              <div className="flex flex-col gap-6 mb-6">
                <h1 className="font-bold lg:text-6xl lg:leading-tight text-4xl md:text-4xl">
                  Telusuri Keindahan Budaya Indonesia
                </h1>
                <p className="text-subheading">
                  Exploring the diverse and enchanting landscapes, cultures, and
                  experiences that Indonesia has to offer.
                </p>
              </div>
              <Button type="filled" to="/about">
                Jelajahi Sekarang
              </Button>
            </div>
          </div>
          <div className="dark-overlay"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
