import { IUserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { UserLoginDto } from "@/application/dtos";

export class AuthLoginUseCase {
  constructor(
    private authProvider: AuthProvider,
    private userRepository: IUserRepository
  ) {}

  async execute(data: UserLoginDto): Promise<Result<string>> {
    const { email, password } = data;

    const user = await this.userRepository.findByEmail(email);

    if (user == null) {
      return new Result("Usuário não encontrado.");
    }

    const verifyPassword = await bcrypt.compareSync(password, user.password);

    if (!verifyPassword) {
      return new Result("A senha inserida está incorreta.");
    }

    const isAdmin: boolean = user.permissions == "ADMIN";

    const token = this.authProvider.generateToken(user.id, isAdmin);

    return new Result<string>(token, "Usuário autenticado com sucesso.");
  }
}
