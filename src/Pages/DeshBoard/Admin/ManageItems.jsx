import { FaEdit } from "react-icons/fa";
import UseManu from "../../../Hooks/UseMenu/UseManu";
import Heading from "../../../Sheard/Heading";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = UseManu();
  // // console.log(menu);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${item.name} this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menus/${item._id}`);
        // .then((res) => {
        //   console.log(res);
        // });
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your ${item.name} has been saved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log(res.data);
      }
    });
    // console.log(user);
  };

  return (
    <div className="w-full ">
      <Heading title={"Hurry Up"} heading={"MANAGE ALL ITEMS"}></Heading>
      <div className="p-10">
        <h1>Total items: {menu.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link to={`/deshboard/update/${item._id}`}>
                      <button className="btn btn-ghost">
                        <FaEdit className="text-2xl"></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost "
                    >
                      <FaTrash className="text-2xl"></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
