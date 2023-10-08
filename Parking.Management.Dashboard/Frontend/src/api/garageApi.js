import BASE_URL from "../global/apiUrl";

export class GarageApi {
  async countInside(token) {
    try {
      const response = await fetch(`${BASE_URL}/garage/count-inside`, {
        method: "GET",
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

  async getLatestUpdated(token) {
    try {
      const response = await fetch(`${BASE_URL}/garage/latest-updated`, {
        method: "GET",
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
