import * as jwt from "jsonwebtoken";
import { env } from "@/infra/config";
import { IQRCodeProvider } from "@/domain/contracts";
import qr from "qrcode";

export class QRCodeProvider implements IQRCodeProvider {
  async generateQRCode(data: string): Promise<string> {
    try {
      var opts = {
        width: 300,
      };

      const qrcode = await qr.toDataURL(data, opts);

      return qrcode;
    } catch (err) {
      throw new Error("Ocorreu um erro na geração de seu qrcode");
    }
  }
}
