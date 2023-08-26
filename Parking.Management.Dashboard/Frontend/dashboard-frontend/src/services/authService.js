import { loginApi, verifyPermissionApi } from "../api/authApi";

const login = async (username, password) => {
  const response = await loginApi(username, password);
  if (response.success) {
    // Armazenar o token no armazenamento (localStorage ou outro)
    localStorage.setItem("PM:AUTHORIZATION", response);
  }
  return response;
};

const verifyPermission = async (username, password) => {
  const response = await verifyPermissionApi(username, password);

  return response;
};

export { login, verifyPermission };
