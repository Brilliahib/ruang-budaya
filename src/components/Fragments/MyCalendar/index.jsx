import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import budayaData from "./Events.json";

function CalendarView() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={budayaData}
    />
  );
}

function EventsView() {
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

  const [currentPage, setCurrentPage] = useState(1);
  const [budayaPerPage] = useState(9);

  // Hitung indeks item pertama dan terakhir di setiap halaman
  const indexOfLastBudaya = currentPage * budayaPerPage;
  const indexOfFirstBudaya = indexOfLastBudaya - budayaPerPage;

  // Ambil hanya item budaya yang sesuai dengan halaman yang sedang aktif
  const currentBudaya = filteredBudayaList.slice(
    indexOfFirstBudaya,
    indexOfLastBudaya
  );

  // Fungsi untuk mengganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section className="w-full">
        <div className="grid grid-cols-12 gap-y-4 md:gap-8 md:mb-8 mb-4">
          <div className="col-span-12 md:col-span-3">
            <h1 className="text-xl font-semibold">Daftar Acara</h1>
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
                <option value="Pawai Budaya">Pawai Budaya</option>
                <option value="Festival">Festival</option>
                <option value="Pentas Seni">Pentas Seni</option>
              </select>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 m-0">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-4 h-full">
              {currentBudaya.length === 0 ? (
                <div className="h-full min-h-[300px]">
                  <p>Tidak ada data</p>
                </div>
              ) : (
                currentBudaya.map((budaya, index) => (
                  <a href="/events/detail" key={index}>
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
                          <h3 className="text-white text-lg font-bold title">
                            {budaya.title}
                          </h3>
                          <p className="text-white text-body line-clamp-2 deskripsi">
                            {budaya.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>
            {/* Pagination */}
            <div className="flex justify-center my-8">
              <div className="pagination join">
                {/* Buat tombol untuk setiap halaman */}
                {Array.from(
                  {
                    length: Math.ceil(
                      filteredBudayaList.length / budayaPerPage
                    ),
                  },
                  (_, i) => (
                    <input
                      key={i}
                      className="join-item btn btn-square"
                      type="radio"
                      name="options"
                      aria-label={i + 1}
                      checked={currentPage === i + 1}
                      onChange={() => paginate(i + 1)}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MyCalendar() {
  const [view, setView] = useState("calendar");

  return (
    <>
      <div className="flex justify-center mb-8 md:mb-16">
        <div role="tablist" className="tabs tabs-boxed w-full md:w-[30%]">
          <a
            role="tab"
            className={`tab ${view === "calendar" ? "" : "tab-active"}`}
            onClick={() => setView("events")}
          >
            Acara
          </a>
          <a
            role="tab"
            className={`tab ${view === "events" ? "" : "tab-active"}`}
            onClick={() => setView("calendar")}
          >
            Calendar
          </a>
        </div>
      </div>
      {view === "calendar" ? <CalendarView /> : <EventsView />}
    </>
  );
}

export default MyCalendar;
