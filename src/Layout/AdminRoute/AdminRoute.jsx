import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAdmin from "../../Hooks/useAdmin/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (isLoading || isAdminLoading) {
    return (
      <div className="flex flex-col gap-4 w-52">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;

  //   return <Navigate state={location.pathname} to="/login"></Navigate>;

  //   return <div></div>;
};

export default AdminRoute;
