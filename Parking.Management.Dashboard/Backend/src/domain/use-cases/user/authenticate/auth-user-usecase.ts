import { UserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { UserLoginDto } from "@/application/dtos";

export class AuthUserUseCase {
  constructor(
    private authProvider: AuthProvider,
    private userRepository: UserRepository
  ) {}

  async execute(data: UserLoginDto): Promise<Result<string>> {
    const { email, password } = data;

    const user = await this.userRepository.findByEmail(email);

    if (user == null) {
      return new Result("Usuário não encontrado.");
    }

    const verifyPassword = await bcrypt.compareSync(user.password, password);

    if (!verifyPassword) {
      return new Result("A senha inserida está incorreta.");
    }

    const token = this.authProvider.generateToken(user.id);

    return new Result<string>(token, "Usuário autenticado com sucesso.");
  }
}
