import BASE_URL from "../global/apiUrl";

export class UserApi {
  async getAll(token) {
    try {
      const response = await fetch(`${BASE_URL}/user/get-all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      return { success: false, message: "Erro ao executar funcionalidade." };
    }
  }

  async createUser(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      return { success: false, message: "Erro ao executar funcionalidade." };
    }
  }

  async deleteUser(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      return data;
    } catch (error) {
      return { success: false, message: "Erro ao executar funcionalidade." };
    }
  }
}
