import BASE_URL from "../global/apiUrl";

export class CollegeApi {
  async getAll(token) {
    try {
      const response = await fetch(`${BASE_URL}/college/get-all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao validar token" };
    }
  }

  async getById(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/college/id/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao validar token" };
    }
  }

  async create(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/college`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao cadastrar universidade" };
    }
  }

  async update(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/college`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao executar funcionalidade." };
    }
  }

  async delete(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/college/id/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao executar funcionalidade." };
    }
  }
}
