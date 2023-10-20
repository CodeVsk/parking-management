import { loginApi } from "../api/authApi";

const login = async (email, password) => {
  const { data, message, statusCode } = await loginApi(email, password);
  const { role, userId, token, expireIn } = data;

  if (token) {
    localStorage.setItem("PM:TOKEN", token);

    return { userId, role, message, statusCode, expireIn };
  }

  return false;
};

const logout = () => {
  localStorage.removeItem("PM:TOKEN");
};

export { login, logout };
