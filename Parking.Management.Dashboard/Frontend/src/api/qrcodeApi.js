import BASE_URL from "../global/apiUrl";

export class QRCodeApi {
  async generateQRCode(token) {
    try {
      const response = await fetch(`${BASE_URL}/qrcode`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      return await response.json();
    } catch (error) {
      return { type: "error", message: "Erro ao executar funcionalidade." };
    }
  }
}
