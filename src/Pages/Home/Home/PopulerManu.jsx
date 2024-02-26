import UseManu from "../../../Hooks/UseMenu/UseManu";
import Heading from "../../../Sheard/Heading";
import MenuItem from "../../../Sheard/MenuItem/MenuItem";

const PopulerManu = () => {
  //   const [menus, setMenus] = useState([]);
  //   useEffect(() => {
  //     fetch("/public/menu.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const populerMenu = data.filter((menu) => menu.category === "popular");
  //         setMenus(populerMenu);
  //       });
  //   }, []);
  const [menus] = UseManu();
  const populerMenu = menus.filter((menu) => menu.category === "popular");
  return (
    <section>
      <div>
        <Heading title={"Check it out"} heading={"FROM OUR MENU"}></Heading>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 my-10">
        {populerMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-10 text-2xl">
        <button className="uppercase text-center rounded-xl border-[#1f2937]  border-b-4 py-2 px-5 ">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopulerManu;
