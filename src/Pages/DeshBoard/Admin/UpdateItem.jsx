import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Heading from "../../../Sheard/Heading";
import { IoIosSend } from "react-icons/io";

const UpdateItem = () => {
  const loader = useLoaderData();
  console.log(loader);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <Heading title={"What`s new?"} heading={"add an item"}></Heading>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[#f3f3f3] justify-center p-20 my-20 space-y-4">
            <div className="flex gap-3 ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text"> Recipe name*</span>
                </div>
                <input
                  type="text"
                  placeholder="Recipe name*"
                  className="input  rounded-none  w-full "
                  {...register("name")}
                />
              </label>
            </div>

            <div className="flex gap-3 ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select
                  defaultValue={"default"}
                  {...register("category")}
                  className="select "
                >
                  <option disabled value={"default"}>
                    Category
                  </option>
                  <option d value={"salads"}>
                    salads
                  </option>
                  <option value={"soups"}>soups</option>
                  <option value={"pizza"}>pizza</option>
                  <option value={"desserts"}>desserts</option>
                  <option value={"dirnks"}>drinks</option>
                </select>
              </label>

              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text"> Price</span>
                </div>
                <input
                  type="number"
                  placeholder="Type here your Price"
                  className="input rounded-none  w-full "
                  {...register("price")}
                />
              </label>
            </div>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
                className="textarea rounded-none  h-24"
                placeholder="Recipe Details"
                {...register("recipe")}
              ></textarea>
            </label>

            <input
              type="file"
              className="file-input w-full max-w-xs"
              {...register("image")}
            />
            <div className="text-center">
              <button
                type="submit"
                className="flex justify-center mx-auto w-1/4  mt-10 gap-4 text-white p-3 items-center bg-[#d1a054]"
              >
                {" "}
                update Item <IoIosSend className="inline" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
