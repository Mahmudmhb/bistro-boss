// import ShearCover from "../../../Sheard/ShearCover";
import { Helmet } from "react-helmet-async";
import Slider from "../../../Sheard/Slider";
import Category from "../Category";
import BestoBoss from "./BestoBoss";
import Call from "./Call";
import GetOne from "./GetOne";
import PopulerManu from "./PopulerManu";
import Tesemonial from "./Tesemonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss || home</title>
      </Helmet>

      <Slider></Slider>
      <Category></Category>
      <BestoBoss></BestoBoss>
      <PopulerManu></PopulerManu>
      <Call></Call>
      <GetOne></GetOne>
      <Tesemonial></Tesemonial>
    </div>
  );
};

export default Home;
