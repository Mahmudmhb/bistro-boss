import { Button, Label, TextInput } from "flowbite-react";
import loginImg from "../../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useAuth from "../../../Hooks/useAuth/useAuth";
const Register = () => {
  const { handleRegister } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleRegister(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="md:flex items-center justify-between  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  flex-col p-20 w-5/6 mx-auto gap-4"
      >
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
      <div className="w-1/2">
        <img src={loginImg} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Register;
