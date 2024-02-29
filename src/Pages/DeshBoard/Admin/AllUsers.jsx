import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Heading from "../../../Sheard/Heading";
import { FaTrash } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
    //   .then((res) => console.log(res.data)),
  });
  return (
    <div className="w-full p-10">
      {/* <h1>this is all user page</h1> */}
      <Heading title={"How many??"} heading={"MANAGE ALL USERS"}></Heading>

      <div>Total users:{users.length}</div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra text-2xl">
            {/* head */}
            <thead>
              <tr className="bg-[#d1a054] text-white text-2xl">
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-success text-white">
                      <PiUsersThreeFill />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-info text-white">
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
