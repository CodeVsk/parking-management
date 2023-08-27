import { IUserRepository } from "../../../contracts";
import { Result } from "../../../../core/domain/result";
import bcrypt from "bcrypt";
import { AuthProvider } from "@/infra/providers";
import { AuthenticatedDto, UserLoginDto } from "@/application/dtos";

export class AuthLoginUseCase {
  constructor(
    private authProvider: AuthProvider,
    private userRepository: IUserRepository
  ) {}

  async execute(data: UserLoginDto): Promise<Result<AuthenticatedDto>> {
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

    const result: AuthenticatedDto = {
      token: token,
      role: user.permissions,
      userId: user.id,
    };

    return new Result<AuthenticatedDto>(
      result,
      "Usuário autenticado com sucesso."
    );
  }
}
