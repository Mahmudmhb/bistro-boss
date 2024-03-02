import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../../Hooks/useCart/useCart";

const FootCard = ({ item }) => {
  const [, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const axiosSecure = useAxiosSecure();
  const { image, price, recipe, name, _id } = item;
  const handleAddToCard = () => {
    if (user && user.email) {
      // console.log(food, user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        image,
        name,
        price,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          console.log(res.data);
        })
        .catch((res) => {
          console.log(res.data);
        });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Food Add To Cart",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } else {
      Swal.fire({
        title: "Please Login?",
        text: "if you want to add to cart please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // <Navigate to={"/login"} ></Navigate>;
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="" />
        </figure>
        <div className="absolute bg-black mt-5  right-4">
          <p className="text-white p-2 px-3 ">{price}</p>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <div className="text-center my-10 text-2xl">
              <button
                onClick={handleAddToCard}
                className="uppercase text-center rounded-xl border-[#1f2937]  border-b-4 py-2 px-5 "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootCard;
