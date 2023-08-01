import { UserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { Result } from "../../../../core/domain/result";

export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private userMapper: UserMapper
  ) {}

  async execute(data: UserDto): Promise<Result<UserDto>> {
    const user = await this.userRepository.findById(data.id);

    const userModel = {
      ...user,
      ...data,
    };

    const result = await this.userRepository.update(userModel);

    const userDto = this.userMapper.mapper(result);

    return new Result<UserDto>(userDto, "Usuário atualizado com sucesso.");
  }
}
