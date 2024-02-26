const Heading = ({ title, heading }) => {
  return (
    <div className="w-1/3 mx-auto text-center my-5">
      <p className="text-[#d99904] text-2xl italic my-5">----{title}----</p>
      <h1 className="text-4xl uppercase py-5 border-y-4  ">{heading}</h1>
    </div>
  );
};

export default Heading;
