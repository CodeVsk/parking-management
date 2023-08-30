import { loginApi, validateRoleApi } from "../api/authApi";

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

const validateRole = async (token) => {
  try {
    if (token == null) {
      return false;
    }

    const response = await validateRoleApi(token);

    return response;
  } catch (err) {
    throw err;
  }
};

export { login, logout, validateRole };
