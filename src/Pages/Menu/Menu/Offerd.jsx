import React, { useEffect, useState } from "react";
import Heading from "../../../Sheard/Heading";
import MenuItem from "../../../Sheard/MenuItem/MenuItem";
import UseManu from "../../../Hooks/UseMenu/UseManu";

const Offerd = () => {
  //   const [offered, setOfferd] = useState([]);
  //   useEffect(() => {
  //     fetch("/public/menu.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const newOfferd = data.filter((offer) => offer.category === "offered");
  //         setOfferd(newOfferd);
  //       });
  //   }, []);
  const [menus] = UseManu();
  const newOfferd = menus.filter((offer) => offer.category === "offered");
  return (
    <div className="my-20">
      <div className="grid md:grid-cols-2 my-20 gap-5">
        {newOfferd.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default Offerd;
