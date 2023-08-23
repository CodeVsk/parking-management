import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class FindByIdUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private userMapper: UserMapper
  ) {}

  async execute(id: string): Promise<Result<UserDto>> {
    const result = await this.userRepository.findById(id);

    const userDto = this.userMapper.mapper<User, UserDto>(result);

    console.log(userDto);

    return new Result<UserDto>(userDto, "Usuário encontrado.");
  }
}
