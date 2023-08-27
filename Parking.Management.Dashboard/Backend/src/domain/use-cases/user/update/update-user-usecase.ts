import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto): Promise<Result<UserDto>> {
    const user = await this.userRepository.findById(data.id);

    const userModel = {
      ...user,
      ...data,
    };

    const result = await this.userRepository.update(userModel);

    const userDto = mapper.map(result, User, UserDto);

    return new Result<UserDto>(userDto, "Usuário atualizado com sucesso.");
  }
}
