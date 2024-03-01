import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  //   console.log(user.email);

  const axiosSecure = useAxiosSecure();

  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, "admin"],
    queryFn: async () => {
      const res = axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(res?.data);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
