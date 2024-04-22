const BlogLayout = () => {
  return (
    <>
      <main className="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="mx-auto w-full max-w-2xl format format-sm mb-12">
            <a href="/" className="flex items-center gap-4 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <span className="text-sm">Kembali</span>
            </a>
          </div>
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg">
            <header className="mb-8 lg:mb-12 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl text-center">
                3 Alasan Anda Wajib Mengenal Kebudayaan Yang Ada Di Indonesia!
              </h1>
            </header>
            <div className="prose">
              <img
                src="https://tourism.surabaya.go.id/api/helper/show-file/article-files/99947579-f5bb-4cda-8e64-4ff1ad84a717?token=null&preview=1"
                alt=""
                className="mb-8 rounded"
              />
              <p className="mb-8">
                Indonesia, negara kepulauan yang kaya akan keindahan alam,
                budaya, dan sejarah. Di tengah pesatnya perkembangan zaman,
                mengenal kebudayaan yang ada di Indonesia menjadi suatu
                keharusan. Tidak hanya sebagai warga negara Indonesia, tetapi
                juga sebagai manusia yang ingin memahami keberagaman dan
                kekayaan budaya di dunia ini. Berikut ini adalah lima alasan
                mengapa Anda wajib mengenal kebudayaan yang ada di Indonesia:
              </p>
              <p className="mb-8">
                Indonesia memiliki lebih dari 300 etnis dan lebih dari 700
                bahasa daerah. Setiap etnis memiliki kebudayaan yang khas mulai
                dari tarian, musik, pakaian adat, hingga kepercayaan dan
                tradisi. Mengenal keberagaman budaya ini akan membuka mata Anda
                terhadap kekayaan yang luar biasa di Indonesia.
              </p>
              <p className="mb-8">
                Mengenal kebudayaan Indonesia juga berarti turut menjaga dan
                melestarikan warisan budaya bangsa. Dengan memahami nilai-nilai
                budaya, kita dapat berperan aktif dalam melestarikan
                tradisi-tradisi yang telah diwariskan oleh nenek moyang kita.
              </p>
              <p>
                Kebudayaan Indonesia mengajarkan nilai-nilai persaudaraan,
                gotong royong, dan toleransi antar etnis dan agama. Dengan
                mengenal kebudayaan Indonesia, kita dapat lebih memahami satu
                sama lain dan memperkuat persaudaraan serta toleransi di tengah
                masyarakat yang beragam.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default BlogLayout;
