import axios from "axios";

const usePublic = axios.create({
  baseURL: "https://bistro-boss-server-one-flame.vercel.app/",
});
const useAxiosPublic = () => {
  return usePublic;
};

export default useAxiosPublic;
