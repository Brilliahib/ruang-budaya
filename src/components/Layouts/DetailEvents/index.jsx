import React, { useState, useEffect } from "react";
import moment from "moment";

const DetailEvent = () => {
  const eventDate = moment("2024-05-10T16:00:00");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = moment();
    const difference = eventDate.diff(now);
    const duration = moment.duration(difference);
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <>
      <section className="pt-4 lg:pt-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 mb-24">
            <a href="/events" className="flex items-center gap-4 mt-4 mb-12">
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
            <div>
              <div className="budaya-head">
                <div className="budaya-title mb-8">
                  <h1 className="text-xl md:text-3xl font-bold mb-8">
                    Festival Wayang Kulit
                  </h1>
                  <div className="flex gap-x-3 md:h-full md:items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <div className="md:flex h-full items-center gap-x-4">
                      <p className="text-[#7a7a7a] waktu-events md:mb-0 mb-3">
                        {eventDate.format("MMMM D, YYYY HH:mm")}
                      </p>
                      {timeLeft.days > 0 && (
                        <p className="text-white waktu-events bg-[#f1416c] px-6 py-2 rounded-xl md:ml-0 ml-[-36px]">
                          {`${timeLeft.days} hari ${timeLeft.hours} jam ${timeLeft.minutes} menit ${timeLeft.seconds} detik`}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:grid lg:grid-cols-2 lg:gap-8 md:block">
                <div className="tour-content mb-6 lg:mb-0">
                  <div className="tour-hero mb-8">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Dalang_cilik_di_Pasar_Malam_Semawis%2C_Semarang.jpg/800px-Dalang_cilik_di_Pasar_Malam_Semawis%2C_Semarang.jpg"
                      alt=""
                      className="rounded-xl h-[450px] object-cover w-full"
                    />
                  </div>
                  <div className="tour-desc">
                    <p className="mb-8 leading-relaxed">
                      Festival wayang kulit adalah perayaan seni tradisional
                      Indonesia yang memadukan pertunjukan wayang kulit dengan
                      beragam kegiatan budaya, seperti pagelaran seni, pameran,
                      dan lokakarya. Biasanya diadakan untuk memperingati atau
                      merayakan momen-momen penting, seperti ulang tahun kota
                      atau perayaan keagamaan, dan menjadi wadah penting bagi
                      penggemar wayang dan masyarakat untuk merayakan serta
                      memperkuat warisan budaya yang kaya dan beragam.
                    </p>
                  </div>
                </div>
                <div className="tour-sidebars">
                  <div className="sidebars-content bg-white border rounded-xl p-4 md:p-6">
                    <div className="sidebars-title mb-4">
                      <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full inline-block mb-2">
                        Festival Budaya
                      </p>
                      <div className="description-events flex h-full gap-x-4">
                        <p className="flex items-start">Alamat</p>
                        <h1 className="text-base font-semibold mb-4">
                          Jl. Sriwedani No.1, Ngupasan, Kec. Gondomanan, Kota
                          Yogyakarta, Daerah Istimewa Yogyakarta 55122
                        </h1>
                      </div>
                    </div>
                    <div className="sidebars-content">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.902901011132!2d110.36508297532541!3d-7.800104092220101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578614472d91%3A0x13cb03c951e9b2f8!2sTaman%20Budaya%20Yogyakarta!5e0!3m2!1sen!2sid!4v1714719096924!5m2!1sen!2sid"
                        width="100%"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailEvent;
