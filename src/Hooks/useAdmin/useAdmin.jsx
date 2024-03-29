import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {
  //   const useAdmin = () => {
  //     const { user, loading } = useAuth();
  //     const axiosSecure = useAxiosSecure();
  //     const { data: isAdmin, isPending: isAdminLoading } = useQuery({
  //         queryKey: [user?.email, 'isAdmin'],
  //         enabled: !loading,
  //         queryFn: async () => {
  //             console.log('asking or checking is admin', user)
  //             const res = await axiosSecure.get(`/users/admin/${user.email}`);
  //             // console.log(res.data);
  //             return res.data?.admin;
  //         }
  //     })
  //     return [isAdmin, isAdminLoading]
  // };

  const { user, isLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !isLoading,
    queryFn: async () => {
      // console.log("cant find token ", user);
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      // console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
