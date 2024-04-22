const Footer = () => {
  return (
    <>
      <footer className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8">
          <div className="grid grid-cols-12 gap-y-8 text-white md:gap-x-12">
            <div className="col-span-12 flex flex-col gap-y-4 md:col-span-3">
              <h1 className="text-xl font-semibold">ruangbudaya</h1>
              <p className="text-sm font-medium">
                Explore Indonesia effortlessly with our expert guide, packed
                with curated recommendations and user-friendly features
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="grid grid-cols-3 gap-x-8">
                <div className="flex flex-col gap-y-4">
                  <h2 className="font-semibold">Company</h2>
                  <p className="text-sm font-medium">About</p>
                  <p className="text-sm font-medium">Help</p>
                  <p className="text-sm font-medium">FAQ</p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h2 className="font-semibold">Contact</h2>
                  <p className="text-sm font-medium">(+62) 822221</p>
                  <p className="text-sm font-medium">ruangbudaya@gmail.com</p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h2 className="font-semibold">Others</h2>
                  <p className="text-sm font-medium">News</p>
                  <p className="text-sm font-medium">Policy</p>
                  <p className="text-sm font-medium">Blog</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 flex flex-col gap-y-4 md:col-span-3">
              <h2 className="font-semibold">Socials</h2>
              <p className="text-sm font-medium">Instagram</p>
              <p className="text-sm font-medium">Twitter</p>
              <p className="text-sm font-medium">Whatsapp</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
