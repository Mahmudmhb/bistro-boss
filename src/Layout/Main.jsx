import { Outlet } from "react-router-dom";
import Navber from "../Sheard/Header/Navber";
import Footer from "../Pages/Menu/Menu/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
