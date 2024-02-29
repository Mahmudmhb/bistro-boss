import { Button, Label, TextInput } from "flowbite-react";
import loginImg from "../../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import ShearLogin from "../../../Sheard/ShearLogin/ShearLogin";
const Register = () => {
  const { handleRegister, handleUpdate } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleRegister(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        handleUpdate(data.name, data.email)
          .then((res) => {
            const usersInfo = { name: data.name, email: data.email };
            axiosPublic.post("/users", usersInfo).then((res) => {
              console.log(res.data);
              if (res.data.insertedId > 0) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `Successfully Register`,
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="md:flex items-center justify-between  ">
      <div className=" w-5/6 mx-auto gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex  flex-col p-20">
          <h1 className="text-center text-2xl mt-20">Register</h1>
          <div>
            <div className="mb-2 block w-full">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full"
              {...register("name")}
            />
          </div>
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
              <Label htmlFor="photo" value="Your Photo URL" />
            </div>
            <TextInput
              id="photo"
              type="text"
              placeholder="Your Photo URL"
              required
              className="w-full"
              {...register("photo")}
            />
          </div>
          <div>
            <div className="mb-2 block w-full">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              {...register("password")}
              required
            />
          </div>

          <Button className="bg-[#d9b782] " type="submit">
            Register
          </Button>
          <h1 className="text-[#d9b782] ">
            Already registered? <Link to="/login"> Go to log in</Link>
          </h1>
        </form>
        <ShearLogin></ShearLogin>
      </div>
      <div className="w-1/2">
        <img src={loginImg} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Register;
