import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(resetUser());
    navigate("/login");
  });
  return <>Logout in progress...</>;
};

export default Logout;
