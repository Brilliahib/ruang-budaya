const BudayaLayout = () => {
  return (
    <>
      <section className="pt-4 lg:pt-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8 mb-24">
            <a href="/budaya" className="flex items-center gap-4 mt-4 mb-12">
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
                  <h1 className="text-xl md:text-3xl font-bold">
                    Candi Prambanan
                  </h1>
                </div>
              </div>
              <div className="lg:flex lg:grid lg:grid-cols-2 lg:gap-8 md:block">
                <div className="tour-content mb-6 lg:mb-0">
                  <div className="tour-hero mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="rounded-xl md:h-[450px] object-cover w-full"
                    />
                  </div>
                  <div className="tour-desc">
                    <p className="mb-8">
                      Candi Prambanan, sebuah kompleks candi Hindu yang memukau,
                      terletak di Jawa Tengah, Indonesia. Dibangun pada abad
                      ke-9 Masehi oleh Dinasti Sanjaya, kompleks ini adalah
                      salah satu contoh paling megah dari arsitektur Hindu
                      klasik di Asia Tenggara.
                    </p>
                    <p className="mb-8">
                      Kompleks ini terdiri dari beberapa bangunan, dengan candi
                      utama yang didedikasikan untuk Trimurti Hindu, yaitu
                      Brahma, Wisnu, dan Siwa. Struktur utama candi mencapai
                      ketinggian hingga 47 meter (155 kaki), menara tinggi di
                      langit dengan keanggunan dan keindahan arsitekturnya.
                    </p>
                    <p>
                      Salah satu hal yang paling menonjol dari Candi Prambanan
                      adalah ukiran batu yang memukau yang menghiasi
                      dinding-dindingnya. Patung-patung dewa dan dewi Hindu,
                      terutama Siwa, Wisnu, dan Brahma, menghiasi bagian dalam
                      dan luar candi, menambahkan nuansa sakral dan artistik.
                    </p>
                  </div>
                </div>
                <div className="tour-sidebars">
                  <div className="sidebars-content bg-white border rounded-xl p-4 md:p-6">
                    <div className="sidebars-title mb-4">
                      <p className="text-white text-xs font-bold bg-primary px-2 py-1 rounded-full inline-block mb-2">
                        Peninggalan Sejarah
                      </p>
                      <div className="location flex h-full gap-x-4">
                        <p className="flex items-start">Alamat</p>
                        <h1 className="text-base font-semibold mb-4">
                          Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo,
                          Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa
                          Yogyakarta 55571
                        </h1>
                      </div>
                      <div className="time flex h-full gap-x-4">
                        <p>Jam Buka</p>
                        <h1 className="text-base font-semibold">
                          06.30 - 17.30
                        </h1>
                      </div>
                    </div>
                    <div className="sidebars-content">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.355933754474!2d110.48889247532482!3d-7.752020592266828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sPrambanan%20Temple!5e0!3m2!1sen!2sid!4v1713798996349!5m2!1sen!2sid"
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

export default BudayaLayout;
