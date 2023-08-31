import { Result } from "../../../../core/domain/result";
import { AuthProvider } from "@/infra/providers";
import { AuthenticatedDto } from "@/application/dtos";

export class AuthValidateUseCase {
  constructor(private authProvider: AuthProvider) {}

  async execute(data: AuthenticatedDto): Promise<Result<AuthenticatedDto>> {
    try {
      const { token } = data;

      const decoded = this.authProvider.verifyToken(token);

      const result: AuthenticatedDto = {
        role: decoded.isAdmin ? "ADMIN" : "DEFAULT",
        userId: decoded.userId,
        token: token,
      };

      return new Result(result);
    } catch (err) {
      throw err;
    }
  }
}
