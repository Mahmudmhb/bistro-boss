import bg from "../../../assets/home/featured.jpg";
import Heading from "../../../Sheard/Heading";
import "./GetOne.css";

const GetOne = () => {
  return (
    <div className=" bg-container my-20 text-white flex bg-fixed   items-center justify-center ">
      <div className="  bg-slate-900 bg-opacity-30 py-20 w-full  mx-auto items-center justify-center">
        <div>
          <div className="mt-20">
            <Heading title={"Check it out"} heading={"from our menu"}></Heading>
          </div>
          <div className="flex items-center justify-center px-32 space-x-5 ">
            <img src={bg} alt="" className="h-[400px] w-[650px] " />
            <div>
              <h1 className="text-2xl text-white">March 20, 2023</h1>
              <h1 className="text-3xl text-white">WHERE CAN I GET SOME?</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                repellat labore voluptatum vel repudiandae. Recusandae
                accusantium quidem neque quam est?
              </p>
              <div className=" my-10 text-2xl ">
                <button className="uppercase text-center rounded-xl border-white text-white  border-b-4 py-2 px-5 ">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOne;
