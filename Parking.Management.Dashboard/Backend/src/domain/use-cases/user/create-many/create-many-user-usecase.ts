import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import Mapper from "@/application/mappers";

import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class CreateManyUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto[]): Promise<Result<number>> {
    const userModel = await Mapper.mapArrayAsync(data, User);

    const result = await this.userRepository.createMany(userModel);

    return new Result<number>(result, "Usuários criados com sucesso.");
  }
}
