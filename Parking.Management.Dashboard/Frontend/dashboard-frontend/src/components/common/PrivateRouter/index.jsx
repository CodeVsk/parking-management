import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../../../redux/actions/actions";

const PrivateRoute = ({ children, roles }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //if (!user && user.id != "" && user.role != "") {
  //  navigate("/login");
  //}

  //if (roles && !roles.includes(user.role)) {
  //  dispatch(resetUser());
  //  navigate("/login");
  //}

  return <>{children}</>;
};

export default PrivateRoute;
