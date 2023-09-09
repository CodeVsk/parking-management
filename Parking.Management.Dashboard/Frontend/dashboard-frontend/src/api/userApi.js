import BASE_URL from "../global/apiUrl";

export class UserApi {
  async getById(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/user/id/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      return { success: false, message: "Erro ao executar funcionalidade." };
    }
  }

  async getAll(token) {
    try {
      const response = await fetch(`${BASE_URL}/user/get-all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      return { success: false, message: "Erro ao executar funcionalidade." };
    }
  }

  async registerUser(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
    } catch (error) {
      return { success: false, message: "Erro ao executar funcionalidade." };
    }
  }

  async updateUser(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
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

      return await response.json();
    } catch (error) {
      return { success: false, message: "Erro ao executar funcionalidade." };
    }
  }
}
