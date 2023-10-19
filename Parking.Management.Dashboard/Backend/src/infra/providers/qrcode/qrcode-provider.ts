import * as jwt from "jsonwebtoken";
import { env } from "@/infra/config";
import { IQRCodeProvider } from "@/domain/contracts";
import qr from "qrcode";

export class QRCodeProvider implements IQRCodeProvider {
  generateQRCode(
    data: string,
    callback: (err: Error | null, url?: string) => void
  ): any {
    try {
      qr.toDataURL(data, callback);
    } catch (err) {
      throw new Error("Ocorreu um erro na geração de seu qrcode");
    }
  }
}
