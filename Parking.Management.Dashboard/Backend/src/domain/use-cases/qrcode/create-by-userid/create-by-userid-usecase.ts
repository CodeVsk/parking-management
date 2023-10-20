import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { AuthProvider, QRCodeProvider } from "@/infra/providers";

export class CreateByUserIdUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authProvider: AuthProvider,
    private qrCodeProvider: QRCodeProvider
  ) {}

  async execute(token: string): Promise<Result<string>> {
    const { userId } = await this.authProvider.verifyToken(token);

    const { enrollment } = await this.userRepository.findById(userId);

    const qrcode = await this.qrCodeProvider.generateQRCode(enrollment);

    return new Result<string>({
      content: qrcode,
      message: "Código QR gerado com sucesso.",
    });
  }
}
