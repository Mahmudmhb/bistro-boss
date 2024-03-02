const ShareBannar = ({ image, tilte, subTitle }) => {
  return (
    <div>
      <div
        className="hero h-[600px] mb-20"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className=" hero-overlay h-1/2 w-5/6 bg-slate-900 bg-opacity-50 text-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-8xl text-white font-bold uppercase ">
              {tilte}
            </h1>
            <p className="mb-5 text-whhite uppercase font-semibold">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareBannar;
