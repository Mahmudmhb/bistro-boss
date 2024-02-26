import { Helmet } from "react-helmet-async";
import bannar from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzabg from "../../../assets/menu/pizza-bg.jpg";
import saladbg from "../../../assets/menu/salad-bg.jpg";
import soupbd from "../../../assets/menu/soup-bg.jpg";
import ShareBannar from "../../../Sheard/ShareBannar";
// import Offerd from "./Offerd";
import MenuCategory from "../../../Sheard/MenuCategory/MenuCategory";
import UseManu from "../../../Hooks/UseMenu/UseManu";
import Heading from "../../../Sheard/Heading";
import ShearCover from "../../../Sheard/ShearCover";

const Menu = () => {
  const [menus] = UseManu();
  const newOfferd = menus.filter((offer) => offer.category === "offered");
  const dessert = menus.filter((offer) => offer.category === "dessert");
  const soup = menus.filter((offer) => offer.category === "soup");
  const salad = menus.filter((offer) => offer.category === "salad");
  const pizza = menus.filter((offer) => offer.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Menu || Bistro Boss</title>
      </Helmet>
      {/* <h1>this is our menu page</h1>
       */}

      <ShareBannar
        tilte={"our menu"}
        image={bannar}
        subTitle={"Would you like to try a dish?"}
      ></ShareBannar>
      {/* <Offerd></Offerd> */}
      <Heading title={"don't miss"} heading={"today's offer"}></Heading>
      <MenuCategory items={newOfferd}></MenuCategory>

      <ShearCover
        image={dessertBg}
        tilte={"dessert"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></ShearCover>

      <MenuCategory items={dessert}></MenuCategory>

      {/* pizza  */}
      <ShearCover
        image={pizzabg}
        tilte={"Pizza"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></ShearCover>
      <MenuCategory items={pizza}></MenuCategory>

      {/* salad  */}
      <ShearCover
        image={saladbg}
        tilte={"salads"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></ShearCover>
      <MenuCategory items={salad}></MenuCategory>
      {/* soup  */}
      <ShearCover
        image={soupbd}
        tilte={"soups"}
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></ShearCover>
      <MenuCategory items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
