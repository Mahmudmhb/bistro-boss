import { useEffect, useState } from "react";
import Heading from "../../../Sheard/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
const Tesemonial = () => {
  const [reviws, setReviws] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-one-flame.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviws(data);
      });
  }, []);
  return (
    <div>
      <div>
        <Heading
          title={"What Our Clients Say"}
          heading={"TESTIMONIALS"}
        ></Heading>
      </div>
      <div className="my-20 text-center">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviws.map((reviw) => (
            <SwiperSlide key={reviw._id}>
              <div className="flex flex-col my-20 items-center w-5/6 mx-auto space-y-5 ">
                <div>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={reviw.rating}
                    readOnly
                  />
                </div>
                <span>
                  <FaQuoteLeft className="w-[86px] h-[100px] my-5" />
                </span>

                <h1>{reviw.details}</h1>
                <h1 className=" text-[#e4a604] text-4xl">{reviw.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tesemonial;
