import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Card from "../../Fragments/Card";
import cardsData from "./cardBudaya.json";

const BudayaSection = () => {
  return (
    <>
      <section id="budaya">
        <div className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 my-24">
          <div className="my-12">
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
                className={`lg:grid lg:grid-cols-4 md:gap-4 block md:grid md:grid-cols-2 lg:grid gap-4 grid grid-cols-2`}
              >
                <a
                  href="/budaya"
                  className="h-full lg:min-h-[450px] min-h-[250px] mb-4"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1576233475048-55f08b53a8bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded w-full h-full object-cover bg-cover"
                      sizes="100vw"
                      style={{
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                      <h3 className="text-white text-lg font-bold">
                        Peninggalan Sejarah
                      </h3>
                      <div className="location-text flex gap-x-2 items-center">
                        <div>
                          <p className="text-white text-body line-clamp-2">
                            Eksplor peninggalan sejarah di Indonesia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/budaya"
                  className="h-full lg:min-h-[450px] min-h-[250px] mb-4"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1675955999592-7399e3ce42ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded w-full h-full object-cover bg-cover"
                      sizes="100vw"
                      style={{
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                      <h3 className="text-white text-lg font-bold">
                        Tarian Daerah
                      </h3>
                      <div className="location-text flex gap-x-2 items-center">
                        <div>
                          <p className="text-white text-body line-clamp-2">
                            Tarian daerah dari penjuru yang ada di Indonesia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/budaya"
                  className="h-full lg:min-h-[450px] min-h-[250px] mb-4"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded w-full h-full object-cover bg-cover"
                      sizes="100vw"
                      style={{
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                      <h3 className="text-white text-lg font-bold">
                        Tempat Wisata
                      </h3>
                      <div className="location-text flex gap-x-2 items-center">
                        <div>
                          <p className="text-white text-body line-clamp-2">
                            Rekomendasi tempat wisata yang ada di Indonesia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/budaya"
                  className="h-full lg:min-h-[450px] min-h-[250px] mb-4"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1631002165161-24f5ee3672b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded w-full h-full object-cover bg-cover"
                      sizes="100vw"
                      style={{
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                      <h3 className="text-white text-lg font-bold">
                        Makanan Daerah
                      </h3>
                      <div className="location-text flex gap-x-2 items-center">
                        <div>
                          <p className="text-white text-body line-clamp-2">
                            Beragam makanan khas daerah di Indonesia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BudayaSection;
