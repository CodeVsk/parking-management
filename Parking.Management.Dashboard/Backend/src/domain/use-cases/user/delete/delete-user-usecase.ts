import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<Result<UserDto>> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      new Result<UserDto>({
        message: "Usuário não encotrado.",
      });
    }

    const result = await this.userRepository.delete(id);

    const userDto = mapper.map(result, User, UserDto);

    return new Result<UserDto>({
      content: userDto,
      message: "Usuário removido com sucesso.",
    });
  }
}
