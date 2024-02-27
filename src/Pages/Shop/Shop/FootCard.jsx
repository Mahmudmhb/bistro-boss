const FootCard = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="" />
        </figure>
        <p>{price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <div className="text-center my-10 text-2xl">
              <button className="uppercase text-center rounded-xl border-[#1f2937]  border-b-4 py-2 px-5 ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootCard;
