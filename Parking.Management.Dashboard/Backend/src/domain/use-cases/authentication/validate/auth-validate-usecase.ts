import { IUserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { AuthenticatedDto } from "@/application/dtos";

export class AuthValidateUseCase {
  constructor(
    private authProvider: AuthProvider,
    private userRepository: IUserRepository
  ) {}

  async execute(data: AuthenticatedDto): Promise<Result<boolean>> {
    try {
      const { token, role, userId } = data;

      const user = await this.userRepository.findById(userId);

      if (user == null) {
        return new Result(false, "Usuário não encontrado");
      }

      const decoded = this.authProvider.verifyToken(token);

      const permission = decoded.isAdmin ? "ADMIN" : "DEFAULT";

      if (decoded.userId == user.id && permission == role) {
        return new Result(true);
      }

      return new Result(false);
    } catch (err) {
      throw err;
    }
  }
}
