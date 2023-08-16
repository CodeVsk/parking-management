import { IUserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { UserDto } from "@/application/dtos";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

export class AuthRegisterUseCase {
  constructor(
    private authProvider: AuthProvider,
    private userRepository: IUserRepository
  ) {}

  async execute(data: UserDto): Promise<Result<string>> {
    const {
      name,
      email,
      password,
      phone,
      address,
      rg,
      cpf,
      gender,
      course,
      enrollment,
      status,
      collegeId,
      birthdate,
      role,
      permissions,
    } = data;

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      return new Result("O email já está cadastrado.");
    }

    const password_hashed = await bcrypt.hashSync(password, 10);

    console.log(password_hashed);

    return new Result<string>("Usuário autenticado com sucesso.");
  }
}
