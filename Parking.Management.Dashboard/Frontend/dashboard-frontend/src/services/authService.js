import { loginApi, validateRoleApi } from "../api/authApi";

const login = async (username, password) => {
  const { token, userId, permission } = await loginApi(username, password);
  if (response.success) {
    // Armazenar o token no armazenamento (localStorage ou outro)
    localStorage.setItem("PM:TOKEN", token);

    return { userId, permission };
  }

  return false;
};

const logout = () => {
  localStorage.removeItem("PM:TOKEN");
  history.push("/login");
};

const validateRole = async (role) => {
  try {
    const token = localStorage.getItem("PM:TOKEN");

    if (token == null) {
      return false;
    }

    const response = await validateRoleApi(token, role);

    return response;
  } catch (err) {
    throw err;
  }
};

export { login, logout, validateRole };
