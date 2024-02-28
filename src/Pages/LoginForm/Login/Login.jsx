import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import loginImg from "../../../assets/others/authentication1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="md:flex items-center justify-between  ">
      <div className="w-1/2">
        <img src={loginImg} alt="" />
      </div>
      <form className="flex  flex-col py-20 w-full p-20 gap-4">
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
          />
        </div>
        <div>
          <div className="mb-2 block w-full">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
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
    </div>
  );
};

export default Login;
