import { IUserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { UserDto } from "@/application/dtos";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ObjectValidation } from "@/shared/utils/object-validation";
import { mapper } from "@/application/mappers/mapper-config";
import { User } from "@/domain/entities";

export class AuthRegisterUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto): Promise<Result<boolean | string[] | UserDto>> {
    const { email, password } = data;

    const validation = await ObjectValidation(data, UserDto);

    if (validation) {
      return new Result({
        content: validation,
        message: "Preencha os campos corretamente.",
      });
    }

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      return new Result({ message: "O email já está cadastrado." });
    }

    const password_hashed = await bcrypt.hashSync(password, 10);

    console.log(password_hashed);

    let userModel = mapper.map(data, UserDto, User);

    userModel.password = password_hashed;

    const userCreated = await this.userRepository.create(userModel);

    const userDto = mapper.map(userCreated, User, UserDto);

    return new Result({
      content: userDto,
      message: "Usuário criado com sucesso.",
    });
  }
}
