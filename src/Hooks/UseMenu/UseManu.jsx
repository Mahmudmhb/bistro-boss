import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const UseManu = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: menus = [],
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menus`);
      return res.data;
    },
  });

  // const [menus, setMenus] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //       setIsLoading(false);
  //     });
  // }, []);
  return [menus, isLoading, refetch];
};

export default UseManu;
