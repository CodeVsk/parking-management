import { IUserRepository } from "../../../contracts";
import { UserDto } from "../../../../application/dtos/user-dto";
import { Result } from "../../../../core/domain/result";
import { User } from "@/domain/entities";
import { mapper } from "@/application/mappers";

export class FindByEnrollmentUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(enrollment: string): Promise<Result<UserDto>> {
    const result = await this.userRepository.findByEnrollment(enrollment);

    if (!result) {
      return new Result<UserDto>({ message: "Usuário não encontrado." });
    }

    const userDto = mapper.map(result, User, UserDto);

    return new Result<UserDto>({
      content: userDto,
      message: "Usuário encontrado.",
    });
  }
}
