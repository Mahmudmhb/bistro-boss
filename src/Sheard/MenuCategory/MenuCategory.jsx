import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  //   console.log(bannar);
  return (
    <div>
      <div className="grid md:grid-cols-2 my-20 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-10 text-2xl">
        <button className="uppercase text-center rounded-xl border-[#1f2937]  border-b-4 py-2 px-5 ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
