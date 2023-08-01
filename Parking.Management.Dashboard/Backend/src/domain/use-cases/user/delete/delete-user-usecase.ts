import { UserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { Result } from "../../../../core/domain/result";

export class DeleteUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private userMapper: UserMapper
  ) {}

  async execute(id: string): Promise<Result<UserDto>> {
    const result = await this.userRepository.delete(id);

    const userDto = this.userMapper.mapper(result);

    return new Result<UserDto>(userDto, "Usuário removido com sucesso.");
  }
}
