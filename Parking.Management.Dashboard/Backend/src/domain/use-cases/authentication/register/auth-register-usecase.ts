import { IUserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { UserDto } from "@/application/dtos";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { objectValidation } from "@/shared/utils/object-validation";
import { mapper } from "@/application/mappers/mapper-config";
import { User } from "@/domain/entities";
import { enrollmentGenerator } from "@/shared/utils/enrollment-generator";

export class AuthRegisterUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserDto): Promise<Result<boolean | string[] | UserDto>> {
    const { email, password } = data;

    const validation = await objectValidation(data, UserDto);

    if (validation) {
      return new Result({
        content: validation,
        message: "Preencha os campos corretamente.",
        type: "error",
      });
    }

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      return new Result({
        message: "O email já está cadastrado.",
        type: "error",
      });
    }

    const password_hashed = await bcrypt.hashSync(password, 10);

    let userModel = mapper.map(data, UserDto, User);

    userModel.password = password_hashed;
    userModel.birthdate = new Date(userModel.birthdate);
    userModel.enrollment = enrollmentGenerator();

    const userCreated = await this.userRepository.create(userModel);

    const userDto = mapper.map(userCreated, User, UserDto);

    return new Result({
      content: userDto,
      message: "Usuário criado com sucesso.",
    });
  }
}
