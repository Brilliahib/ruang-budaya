import MyCalendar from "../../Fragments/MyCalendar";

const CalendarLayout = () => {
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
        <div className="">
          <MyCalendar />
        </div>
      </section>
    </>
  );
};

export default CalendarLayout;
