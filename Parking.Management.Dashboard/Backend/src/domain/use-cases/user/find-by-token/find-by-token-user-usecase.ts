import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";
import { mapper } from "@/application/mappers";
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

    return new Result<UserDto>(result.content, "Usuário encontrado.");
  }
}
