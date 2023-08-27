import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import Mapper from "@/application/mappers";

import { Result } from "../../../../core/domain/result";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<Result<UserDto>> {
    const result = await this.userRepository.delete(id);

    const userDto = await Mapper.map(result, UserDto);

    return new Result<UserDto>(userDto, "Usuário removido com sucesso.");
  }
}
