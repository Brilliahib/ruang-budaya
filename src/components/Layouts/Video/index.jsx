import { useState } from "react";

const VideoSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 my-24">
        <div className="relative">
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              loading="lazy"
              width={1200}
              height={800}
              decoding="async"
              data-nimg="1"
              className="w-full h-full object-cover rounded-lg aspect-auto md:aspect-[16/7]"
              style={{ color: "transparent" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-heading text-white font-bold mb-4">
              Jelajahi Indonesia
            </h2>
            <p className="text-white text-subheading max-w-screen-sm w-[85vw] text-center">
              Jelajahi budaya yang beragam dan mempesona serta pengalaman yang
              ditawarkan Indonesia.
            </p>
            <div className="mt-4 md:mt-8">
              <button
                className="flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-full group cursor-pointer bg-white p-6"
                onClick={togglePopup}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#5d9981"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#5d9981"
                  className="w-6 h-6 pointer-events-none scale-75 md:scale-100 group-hover:scale-90 md:group-hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-screen-lg mx-auto">
            <button
              className="absolute top-4 right-4 rounded-full p-2 bg-red-500"
              onClick={togglePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              width="1024"
              height="800"
              src="https://www.youtube.com/embed/rBoYIDWghZc?si=XJ9_dHAT6MwSv7DW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: "100%", maxHeight: "60vh" }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
