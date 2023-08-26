import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import Mapper from "@/application/mappers";

import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto): Promise<Result<UserDto>> {
    const userModel = await Mapper.map(data, User);

    const result = await this.userRepository.create(userModel);

    const userDto = await Mapper.map(result, UserDto);

    return new Result<UserDto>(userDto, "Usuário criado com sucesso.");
  }
}
