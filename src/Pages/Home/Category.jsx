import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Heading from "../../Sheard/Heading";

// import slide6 from "../../assets/home/slide6.jpg";
const Category = () => {
  return (
    <div>
      {/* <img src={slide1} alt="" /> */}
      <Heading
        title={"From 11:00am to 10:00pm"}
        heading={"order online"}
      ></Heading>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1}></img>
          <h1 className=" text-center text-white uppercase text-3xl -mt-20 pb-5">
            salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2}></img>
          <h1 className=" text-center text-white uppercase text-3xl -mt-20">
            pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3}></img>
          <h1 className=" text-center text-white uppercase text-3xl -mt-20">
            soups{" "}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4}></img>
          <h1 className=" text-center text-white uppercase text-3xl -mt-20">
            desserts{" "}
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5}></img>
          <h1 className=" text-center text-white uppercase text-3xl -mt-20">
            salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
