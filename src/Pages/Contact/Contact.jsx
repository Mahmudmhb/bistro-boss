// import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume, FaRegClock } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

import Heading from "../../Sheard/Heading";
import ShareBannar from "../../Sheard/ShareBannar";
import img from "../../assets/contact/banner.jpg";

const Contact = () => {
  return (
    <div>
      <ShareBannar
        tilte={"contact us"}
        subTitle={"Would you like to try a dish?"}
        image={img}
      ></ShareBannar>
      <Heading title={"visit us"} heading={"our location"}></Heading>

      <div className="md:flex justify-evenly my-20">
        <div className="text-center border">
          <div className=" bg-[#d1a054] p-3">
            <span className="">
              <FaPhoneVolume className="inline text-white text-3xl"></FaPhoneVolume>
            </span>
          </div>
          <div className="bg-[#f3f3f3] mx-10 mb-10 p-10">
            <h1 className="text-2xl my-3">ADDRESS</h1>
            <h5>+38 (012) 34 56 789</h5>
          </div>
        </div>
        <div className="text-center border">
          <div className=" bg-[#d1a054] p-3">
            <span className="">
              <FaLocationDot className="inline text-white text-3xl"></FaLocationDot>
            </span>
          </div>
          <div className="bg-[#f3f3f3] mx-10 mb-10 p-10">
            <h1 className="text-2xl my-3">PHONE</h1>
            <h5>+38 (012) 34 56 789</h5>
          </div>
        </div>
        <div className="text-center border">
          <div className=" bg-[#d1a054] p-3">
            <span className="">
              <FaRegClock className="inline text-white text-3xl"></FaRegClock>
            </span>
          </div>
          <div className="bg-[#f3f3f3] mx-10 mb-10 p-10">
            <h1 className="text-2xl my-3">WORKING HOURS</h1>
            <h5>
              Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </h5>
          </div>
        </div>
      </div>
      <Heading title={"Send Us a Message"} heading={"CONTACT FORM"}></Heading>

      <div className="bg-[#f3f3f3] justify-center p-20 my-20 space-y-4">
        <div className="flex gap-3 ">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text"> Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here your name"
              className="input  rounded-none  w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text"> Email</span>
            </div>
            <input
              type="email"
              placeholder="Type here your email"
              className="input rounded-none  w-full "
            />
          </label>
        </div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text"> Phone</span>
          </div>
          <input
            type="text"
            placeholder="Type here your number"
            className="input rounded-none  w-full "
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Your Message</span>
          </div>
          <textarea
            className="textarea rounded-none  h-24"
            placeholder="Your message"
          ></textarea>
        </label>
        <div className="text-center">
          <button className="flex justify-center mx-auto w-1/4  mt-10 gap-4 text-white p-3 items-center bg-[#d1a054]">
            {" "}
            Send Message <IoIosSend className="inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
