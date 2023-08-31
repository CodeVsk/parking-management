import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";
import { mapper } from "@/application/mappers";

export class FindByIdUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<Result<UserDto>> {
    const result = await this.userRepository.findById(id);

    if (!result) {
      return new Result<UserDto>("Usuário não encontrado.");
    }

    const userDto = mapper.map(result, User, UserDto);

    return new Result<UserDto>(userDto, "Usuário encontrado.");
  }
}
