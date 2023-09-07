import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { FindByIdUserUseCase } from "../find-by-id/find-by-id-user-usecase";
import { AuthProvider } from "@/infra/providers";

export class FindByTokenUserUseCase {
  constructor(
    private findByIdUserUseCase: FindByIdUserUseCase,
    private authProvider: AuthProvider
  ) {}

  async execute(token: string): Promise<Result<UserDto>> {
    const { userId } = await this.authProvider.verifyToken(token);

    const result = await this.findByIdUserUseCase.execute(userId);

    if (!result.content) {
      return result;
    }

    return new Result<UserDto>({
      content: result.content,
      message: "Usuário encontrado.",
    });
  }
}
