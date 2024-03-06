import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

export const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-one-flame.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { handleLogOut } = useAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("inside token", token);
      // Do something before request is sent
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("inside the interceptors", status);
      if (status === 401 || status === 403) {
        await handleLogOut();

        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
