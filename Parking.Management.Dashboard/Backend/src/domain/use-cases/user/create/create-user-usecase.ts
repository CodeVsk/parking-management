import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto): Promise<Result<UserDto>> {
    const userModel = mapper.map(data, UserDto, User);

    console.table(userModel);

    const result = await this.userRepository.create(userModel);

    const userDto = mapper.map(result, User, UserDto);

    return new Result<UserDto>(userDto, "Usuário criado com sucesso.");
  }
}
