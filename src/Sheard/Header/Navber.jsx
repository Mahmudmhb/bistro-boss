import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navber = () => {
  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-screen-xl fixed z-10 opacity-60 text-white bg-[#191a1c]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">
          bistro boss restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu uppercase menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navber;
