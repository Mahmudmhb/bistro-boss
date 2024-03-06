import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import loginImg from "../../../assets/others/authentication1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ShearLogin from "../../../Sheard/ShearLogin/ShearLogin";

const Login = () => {
  const { handleLogin } = useAuth();
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    handleLogin(data.email, data.password)
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Login`,
          showConfirmButton: false,
          timer: 2000,
        });
        // navigate(location?.state.pathname ? location?.pathname : "/");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="md:flex items-center justify-between  ">
      <div className="w-1/2">
        <img src={loginImg} alt="" />
      </div>
      <div className="w-full p-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex  flex-col py-20  gap-4"
        >
          <h1 className="text-center text-2xl mt-20">login</h1>
          <div>
            <div className="mb-2 block w-full">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
              className="w-full"
              {...register("email")}
            />
          </div>
          <div>
            <div className="mb-2 block w-full">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              {...register("password")}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className="bg-[#d9b782] " type="submit">
            Submit
          </Button>
          <h1 className="text-[#d9b782] ">
            New here? <Link to="/register">Create a New Account</Link>
          </h1>
        </form>
        <ShearLogin></ShearLogin>
      </div>
    </div>
  );
};

export default Login;
