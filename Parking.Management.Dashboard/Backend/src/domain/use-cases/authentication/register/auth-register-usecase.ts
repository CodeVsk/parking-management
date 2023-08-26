import { IUserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { UserDto } from "@/application/dtos";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ObjectValidation } from "@/shared/utils/object-validation";
import Mapper from "@/application/mappers";
import { User } from "@/domain/entities";

export class AuthRegisterUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto): Promise<Result<boolean | string[]>> {
    const { email, password } = data;

    const validation = await ObjectValidation(data, UserDto);

    if (validation) {
      return new Result(validation, "Preencha os campos corretamente.");
    }

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      return new Result("O email já está cadastrado.");
    }

    const password_hashed = await bcrypt.hashSync(password, 10);

    const userModel = await Mapper.map<User>(data, UserDto);

    userModel.password = password_hashed;

    await this.userRepository.create(userModel);

    return new Result("Usuário autenticado com sucesso.");
  }
}
