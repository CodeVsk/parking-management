import BASE_URL from "../global/apiUrl";

export class VehicleResponsibleApi {
  async getById(id, token) {
    try {
      const response = await fetch(`${BASE_URL}/vehicle-responsible/id/${id}`, {
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

  async getByIdToken(id, token) {
    try {
      const response = await fetch(
        `${BASE_URL}/vehicle-responsible/user/id/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao validar token" };
    }
  }

  async create(payload, token) {
    try {
      const response = await fetch(`${BASE_URL}/vehicle-responsible`, {
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
      const response = await fetch(`${BASE_URL}/vehicle-responsible/user`, {
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
      const response = await fetch(`${BASE_URL}/-responsible`, {
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
      const response = await fetch(`${BASE_URL}/vehicle-responsible/id/${id}`, {
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

  async deleteByToken(id, token) {
    try {
      const response = await fetch(
        `${BASE_URL}/vehicle-responsible/user/id/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao executar funcionalidade." };
    }
  }
}
