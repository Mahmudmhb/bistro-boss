import { FaTrash } from "react-icons/fa";
import useCart from "../../Hooks/useCart/useCart";
import Heading from "../../Sheard/Heading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, items) => total + items.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete this item !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Your ${item.name} has been Deleted`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <Heading title={"my cart"} heading={"WANNA ADD MORE?"}></Heading>

      <div className="flex justify-evenly p-20 uppercase font-bold text-2xl">
        <div>
          <h1>Total orders: {cart.length}</h1>
        </div>
        <div>
          {" "}
          <h1>total price: ${totalPrice}</h1>
        </div>
        <div>
          {cart.length ? (
            <>
              <Link to="/deshboard/payment">
                <button className="btn btn-primary">PAY</button>
              </Link>
            </>
          ) : (
            <button disabled className="btn btn-primary">
              PAY
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto px-10 mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" w-20 h-20">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-2xl"></FaTrash>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
