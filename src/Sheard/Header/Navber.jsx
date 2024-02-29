import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart/useCart";

const Navber = () => {
  const { user, handleLogOut } = useAuth();
  const handleSignOut = () => {
    handleLogOut().then().catch();
  };
  const [cart] = useCart();
  // console.log(cart);

  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/shop/salads">Shop</Link>
      </li>
      <li>
        <Link to="deshboard/mycart">
          <button className="btn">
            <FaShoppingCart />
            <div className="badge badge-secondary">+0{cart.length}</div>{" "}
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link>
              <button onClick={handleSignOut}>LogOut</button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar max-w-screen-xl fixed z-10 opacity-70 text-white bg-[#191a1c]">
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
            className="menu menu-sm uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-bold rounded-box w-52"
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
