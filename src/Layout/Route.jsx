import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/LoginForm/Login/Login";
import Register from "../Pages/LoginForm/Login/Register";
import DeshBoard from "../Pages/DeshBoard/DeshBoard";
import UserHome from "../Pages/DeshBoard/UserHome";
import MyCart from "../Pages/DeshBoard/MyCart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminHome from "../Pages/DeshBoard/Admin/AdminHome";
import AddItems from "../Pages/DeshBoard/Admin/AddItems";
import AllUsers from "../Pages/DeshBoard/Admin/AllUsers";
import Managebook from "../Pages/DeshBoard/Admin/Managebook";
import ManageItems from "../Pages/DeshBoard/Admin/ManageItems";
import AdminRoute from "./AdminRoute/AdminRoute";
import Contact from "../Pages/Contact/Contact";
import UpdateItem from "../Pages/DeshBoard/Admin/UpdateItem";
import Payment from "../Pages/DeshBoard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "deshboard",
    element: (
      <PrivateRoute>
        <DeshBoard></DeshBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "update/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menus/${params.id}`),
      },
      {
        path: "managebook",
        element: (
          <AdminRoute>
            <Managebook></Managebook>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
