const BASE_URL = "https://sua-api.com/auth";

const loginApi = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Erro ao fazer login" };
  }
};

const verifyPermissionApi = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/permission`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return { success: false, message: "Erro ao fazer login" };
  }
};

export { loginApi, verifyPermissionApi };
