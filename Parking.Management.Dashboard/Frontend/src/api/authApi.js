import BASE_URL from "../global/apiUrl";

const loginApi = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    console.log(await response.data);

    return await response.json();
  } catch (error) {
    return { type: "error", message: "Erro ao fazer login" };
  }
};

const validateApi = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    return await response.json();
  } catch (error) {
    return { type: "error", message: "Erro ao validar token" };
  }
};

export { loginApi, validateApi };
