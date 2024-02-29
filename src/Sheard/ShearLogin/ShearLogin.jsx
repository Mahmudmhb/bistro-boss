import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const ShearLogin = () => {
  const { handleGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleWithPopUp = () => {
    handleGoogle()
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Register`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <h1>Or sign in with </h1>
      <button
        onClick={() => handleGoogleWithPopUp()}
        className="flex items-center gap-4 btn p-2 mx-auto my-3 text-3xl"
      >
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default ShearLogin;
