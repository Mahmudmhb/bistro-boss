import { useState } from "react";
import ShareBannar from "../../../Sheard/ShareBannar";
import bannar from "../../../assets/menu/salad-bg.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseManu from "../../../Hooks/UseMenu/UseManu";
import FootCard from "./FootCard";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categorise = ["salads", "pizza", "soups", "desserts", "drinks"];
  console.log(categorise);
  const { category } = useParams();
  console.log(category);
  const initialIndex = categorise.indexOf(category);
  console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = UseManu();
  const drinks = menus.filter((offer) => offer.category === "drinks");
  const dessert = menus.filter((offer) => offer.category === "dessert");
  const soup = menus.filter((offer) => offer.category === "soup");
  const salad = menus.filter((offer) => offer.category === "salad");
  const pizza = menus.filter((offer) => offer.category === "pizza");
  return (
    <div>
      <ShareBannar
        tilte={"our shop"}
        subTitle={"Would you like to try a dish?"}
        image={bannar}
      ></ShareBannar>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salads</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <div
            className="grid grid-cols-3
          gap-5"
          >
            {salad.map((item) => (
              <FootCard item={item} key={item._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-3
          gap-5"
          >
            {pizza.map((item) => (
              <FootCard item={item} key={item._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-3
          gap-5"
          >
            {soup.map((item) => (
              <FootCard item={item} key={item._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-3
          gap-5"
          >
            {dessert.map((item) => (
              <FootCard item={item} key={item._id}></FootCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-3
          gap-5"
          >
            {drinks.map((item) => (
              <FootCard item={item} key={item._id}></FootCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
