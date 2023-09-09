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
      return { success: false, message: "Erro ao validar token" };
    }
  }
}
