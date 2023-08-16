import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { Result } from "../../../../core/domain/result";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private userMapper: UserMapper
  ) {}

  async execute(data: UserDto): Promise<Result<UserDto>> {
    const userModel = this.userMapper.mapper(data);

    const result = await this.userRepository.create(userModel);

    const userDto = this.userMapper.mapper(result);

    return new Result<UserDto>(userDto, "Usuário criado com sucesso.");
  }
}
