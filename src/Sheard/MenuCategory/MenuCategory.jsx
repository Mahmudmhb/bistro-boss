import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import ShearCover from "../ShearCover";

const MenuCategory = ({ items, tilte, image, subTitle }) => {
  console.log(tilte);
  return (
    <div>
      {tilte && (
        <ShearCover
          image={image}
          tilte={tilte}
          subTitle={subTitle}
        ></ShearCover>
      )}

      <div className="grid md:grid-cols-2 my-20 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-10 text-2xl">
        <Link to={`/shop/${tilte}`}>
          <button className="uppercase text-center rounded-xl border-[#1f2937]  border-b-4 py-2 px-5 ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
