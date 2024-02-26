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
    </div>
  );
};

export default MenuCategory;
