import { UserDto, UserLoginDto } from "@/application/dtos";
import { UserMapper } from "@/application/mappers";
import { Result } from "@/core/domain/result";
import { AuthProvider } from "@/infra/providers";

export class AuthUseCase {
  constructor(
    private userMapper: UserMapper,
    private authProvider: AuthProvider
  ) {}

  async execute(data: UserLoginDto): Promise<Result<UserDto>> {
    return null;
  }
}
