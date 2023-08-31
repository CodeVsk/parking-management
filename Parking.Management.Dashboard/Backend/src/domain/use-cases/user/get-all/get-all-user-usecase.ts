import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";
import { mapper } from "@/application/mappers";

export class GetAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<Result<UserDto[]>> {
    const result = await this.userRepository.getAll();

    const userDto = await mapper.mapArrayAsync(result, User, UserDto);

    return new Result<UserDto[]>(userDto, "Usuário encontrado.");
  }
}
