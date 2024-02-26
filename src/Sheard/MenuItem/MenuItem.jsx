const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-7 items-center  ">
      <img
        src={image}
        alt=""
        className="w-[104px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
      />
      <div>
        <h1 className="text-2xl uppercase">{name}--------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;
