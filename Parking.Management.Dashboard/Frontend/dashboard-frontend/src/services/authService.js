import { useDispatch } from "react-redux";
import { loginApi, validateApi } from "../api/authApi";
import { setUser } from "../redux/actions/actions";

const login = async (email, password) => {
  const { data, message, statusCode } = await loginApi(email, password);
  const { role, userId, token } = data;

  if (token) {
    localStorage.setItem("PM:TOKEN", token);

    return { userId, role, message, statusCode };
  }

  return false;
};

const logout = () => {
  localStorage.removeItem("PM:TOKEN");
};

export { login, logout };
