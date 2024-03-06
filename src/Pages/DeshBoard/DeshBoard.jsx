import {
  FaBook,
  FaBookOpen,
  FaCalendar,
  FaHamburger,
  FaHome,
  FaItunes,
  FaList,
  FaMoneyBill,
  // FaProductHunt,
  FaShoppingBag,
  FaShoppingCart,
  FaUserAlt,
  FaXbox,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
// import useAdmin from "../../Hooks/useAdmin/useAdmin";

const DeshBoard = () => {
  const [isAdmin] = useAdmin();
  // const isAdmin = false;
  return (
    <div className="flex ">
      <div className="w-72 bg-[#d1a054]  text-2xl h-screen uppercase">
        <ul className="menu p-5">
          {isAdmin ? (
            <>
              <li className="text-2xl">
                <NavLink to="/deshboard/admin">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/deshboard/additems">
                  <FaItunes></FaItunes> add items
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/deshboard/manageitems">
                  <FaList></FaList> manage items
                </NavLink>
              </li>

              <li className="text-2xl">
                <NavLink to="/deshboard/managebook">
                  <FaBook></FaBook> Manage bookings
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/deshboard/allusers">
                  <FaUserAlt></FaUserAlt> all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-2xl">
                <NavLink to="/deshboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/reservation">
                  <FaCalendar></FaCalendar> reservation
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/payment">
                  <FaMoneyBill></FaMoneyBill> payment history
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/deshboard/mycart">
                  <FaShoppingCart></FaShoppingCart> my cart
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/addreview">
                  <FaBook></FaBook> add review
                </NavLink>
              </li>
              <li className="text-2xl">
                <NavLink to="/mybooking">
                  <FaBookOpen></FaBookOpen> my booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className="text-2xl">
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/menu">
              <FaHamburger></FaHamburger> menu
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/shop/salads">
              <FaShoppingBag></FaShoppingBag> shop
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/shop/salads">
              <FaXbox></FaXbox> contact
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default DeshBoard;
