import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { validateApi } from "../../../api";
import { setUser } from "../../../redux/actions/actions";
import { useEffect } from "react";

const PrivateRoute = ({ roles }) => {
  const user = useSelector((state) => state.user);

  return user.role && roles.includes(user.role) ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
