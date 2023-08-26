import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";

export class FindByIdUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<Result<UserDto>> {
    const result = await this.userRepository.findById(id);

    const userDto = autom;

    //console.log(userDto);

    return new Result<UserDto>(userDto, "Usuário encontrado.");
  }
}
