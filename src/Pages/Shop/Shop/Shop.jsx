import { useState } from "react";
import ShareBannar from "../../../Sheard/ShareBannar";
import bannar from "../../../assets/menu/salad-bg.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <ShareBannar
        tilte={"our shop"}
        subTitle={"Would you like to try a dish?"}
        image={bannar}
      ></ShareBannar>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
