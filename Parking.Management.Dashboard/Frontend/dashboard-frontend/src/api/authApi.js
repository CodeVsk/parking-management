const BASE_URL = "http://localhost:3030/api";

const loginApi = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { success: false, message: "Erro ao fazer login" };
  }
};

const validateRoleApi = async (token, role) => {
  try {
    const response = await fetch(`${BASE_URL}/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, role }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { success: false, message: "Erro ao validar token" };
  }
};

export { loginApi, validateRoleApi };
