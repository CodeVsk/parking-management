import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class CreateManyUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto[]): Promise<Result<number>> {
    const userModel = await mapper.mapArrayAsync(data, User);

    const result = await this.userRepository.createMany(userModel);

    return new Result<number>({
      content: result,
      message: "Usuários criados com sucesso.",
    });
  }
}
