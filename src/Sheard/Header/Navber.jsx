import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart/useCart";
import useAdmin from "../../Hooks/useAdmin/useAdmin";

const Navber = () => {
  const { user, handleLogOut } = useAuth();
  const [isAdmin] = useAdmin();
  // console.log(user);
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
        <Link to="/menu">our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salads">our Shop</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      {user && (
        <li>
          {user && isAdmin ? (
            <Link to="deshboard/admin">deshboard</Link>
          ) : (
            <Link to="deshboard/userhome">deshboard</Link>
          )}
        </li>
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
      <div className="navbar-end  uppercase">
        {user ? (
          <>
            <Link to="/deshboard/mycart">
              <button className="flex text-2xl">
                <FaShoppingCart />
                <div className="">{cart.length}</div>{" "}
              </button>
            </Link>
            <Link>
              <button className="uppercase mx-2" onClick={handleSignOut}>
                LogOut
              </button>
            </Link>
            <img
              src={user.photoURL}
              alt=""
              className=" mx-5 rounded-full w-12"
            />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
