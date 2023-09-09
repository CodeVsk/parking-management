import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/authService";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    dispatch(resetUser());
    navigate("/login");
  });
  return <>Logout in progress...</>;
};

export default Logout;
