import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto): Promise<Result<UserDto>> {
    const user = await this.userRepository.findById(data.id);

    if (!user) {
      return new Result<UserDto>({
        message: "Usuário não encontrado.",
      });
    }

    const userModel = {
      ...user,
      ...data,
    };

    const result = await this.userRepository.update(userModel);

    const userDto = mapper.map(result, User, UserDto);

    return new Result<UserDto>({
      content: userDto,
      message: "Usuário atualizado com sucesso.",
    });
  }
}
