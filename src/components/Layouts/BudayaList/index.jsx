import React, { useState, useEffect } from "react";
import budayaData from "./budayaData.json";

const BudayaList = () => {
  const [budayaList, setBudayaList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

  useEffect(() => {
    setBudayaList(budayaData);
  }, []);

  // Filter budayaList based on search term and selected category
  const filteredBudayaList = budayaList.filter((budaya) => {
    const titleMatch = budaya.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch =
      selectedCategory === "Semua Kategori" ||
      budaya.kategori === selectedCategory;
    return titleMatch && categoryMatch;
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category select change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 mb-24">
        <div className="md:pt-6 pt-4">
          <a href="/" className="flex items-center gap-4 mt-4 mb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5} // changed stroke-width to strokeWidth
              stroke="currentColor"
              className="w-4 h-4" // added className
            >
              <path
                strokeLinecap="round" // changed stroke-linecap to strokeLinecap
                strokeLinejoin="round" // changed stroke-linejoin to strokeLinejoin
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span className="text-sm">Kembali</span>
          </a>
        </div>
        <div className="grid grid-cols-12 gap-y-4 md:gap-8 md:mb-8 mb-4">
          <div className="col-span-12 md:col-span-3">
            <h1 className="text-xl font-semibold">Jelajahi Budaya</h1>
          </div>
          <div className="col-span-12 md:col-span-9 m-0">
            <div className="flex justify-end">
              <label className="input input-bordered flex items-center gap-2 md:w-[300px] w-full">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-4 md:gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="card p-4 border bg-white rounded-xl sticky top-10">
              <h1 className="text-sm mb-4">Pilih Kategori</h1>
              <select
                className="select select-bordered w-full"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="Semua Kategori">Semua Kategori</option>
                <option value="Peninggalan Sejarah">Peninggalan Sejarah</option>
                <option value="Tarian Daerah">Tarian Daerah</option>
                <option value="Tempat Wisata">Tempat Wisata</option>
                <option value="Makanan Daerah">Makanan Daerah</option>
              </select>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 m-0">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-4 h-full">
              {filteredBudayaList.length === 0 ? (
                <div className="h-full min-h-[300px]">
                  <p>Tidak ada data</p>
                </div>
              ) : (
                filteredBudayaList.map((budaya, index) => (
                  <a href="/budaya/detail" key={index}>
                    <div className="h-full min-h-[300px]">
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <img
                          src={budaya.imageUrl}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="rounded w-full h-full object-cover bg-cover"
                          sizes="100vw"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-6 gap-2">
                          <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full">
                            {budaya.kategori}
                          </p>
                          <h3 className="text-white text-lg font-bold title">
                            {budaya.title}
                          </h3>
                          <p className="text-white text-body line-clamp-2 deskripsi">
                            {budaya.deskripsi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>
            {/* <div className="flex justify-center my-8">
              <div className="join">
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="1"
                  checked
                />
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BudayaList;
