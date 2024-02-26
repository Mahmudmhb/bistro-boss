const ShearCover = ({ image, tilte, subTitle }) => {
  return (
    <div>
      <div
        className="hero h-[600px]  my-20"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className=" hero-overlay h-1/2  w-5/6 bg-slate-900 bg-opacity-50 text-white "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl  uppercase font-bold ">{tilte}</h1>
            <p className="mb-5 font-bold ">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShearCover;
