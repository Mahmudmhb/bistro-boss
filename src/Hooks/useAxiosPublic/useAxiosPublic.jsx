import axios from "axios";

const usePublic = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxiosPublic = () => {
  return usePublic;
};

export default useAxiosPublic;
