const Footer = () => {
  return (
    <>
      <footer className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-24 lg:px-8">
          <div className="grid grid-cols-12 gap-y-8 text-white md:gap-x-12">
            <div className="col-span-12 flex flex-col gap-y-4 md:col-span-3">
              <h1 className="text-xl font-semibold">ruangbudaya</h1>
              <p className="text-sm font-medium">
                Menjelajahi bentang alam, budaya, dan pengalaman yang beragam
                dan mempesona yang ditawarkan Indonesia.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="grid grid-cols-3 gap-x-8">
                <div className="flex flex-col gap-y-4">
                  <h2 className="font-semibold">Links</h2>
                  <p className="text-sm font-medium">Budaya</p>
                  <p className="text-sm font-medium">Cerita</p>
                  <p className="text-sm font-medium">Events</p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h2 className="font-semibold">Contact</h2>
                  <p className="text-sm font-medium">+628167947</p>
                  <p className="text-sm font-medium">rb@gmail.com</p>
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
              <p className="text-sm font-medium">Tiktok</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
