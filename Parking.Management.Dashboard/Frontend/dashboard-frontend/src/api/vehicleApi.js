import BASE_URL from "../global/apiUrl";

export class VehicleApi {
  async getAll(token) {
    try {
      const response = await fetch(`${BASE_URL}/vehicle/get-all`, {
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
      const response = await fetch(`${BASE_URL}/vehicle/id/${id}`, {
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

  async getByToken(token) {
    try {
      const response = await fetch(`${BASE_URL}/vehicle/get-by-token`, {
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

  async getStatistics(token) {
    try {
      const response = await fetch(`${BASE_URL}/vehicle/statistics`, {
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
      const response = await fetch(`${BASE_URL}/vehicle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao cadastrar curso" };
    }
  }

  async createByToken(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/vehicle/by-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao cadastrar curso" };
    }
  }

  async update(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/vehicle`, {
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
      const response = await fetch(`${BASE_URL}/vehicle/id/${id}`, {
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
