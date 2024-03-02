import { IoIosSend } from "react-icons/io";
import Heading from "../../../Sheard/Heading";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const image_api_key = import.meta.env.VITE_IMAGE_KEY;
// console.log(image_api_key);
const image_link = `https://api.imgbb.com/1/upload?key=${image_api_key}`;
// console.log(image_link);

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    console.log(imageFile);

    const res = await axiosPublic.post(image_link, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItems = {
        image: res.data.data.display_url,
        price: parseFloat(data.price),
        recipe: data.recipe,
        name: data.name,
        category: data.category,
      };
      const res = await axiosSecure.post("/menu", menuItems);
      console.log(res.data);
      if (res.data.insertedId) {
        console.log(data);
      }
    }

    console.log(res.data);
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
                Add Item <IoIosSend className="inline" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
