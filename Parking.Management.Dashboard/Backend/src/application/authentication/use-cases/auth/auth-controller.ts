import { Request } from "express";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { AuthUseCase } from "@/application/authentication/use-cases/auth/auth-usecase";
import { UserDto, UserLoginDto } from "@/application/dtos";

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  async handle(request: Request): Promise<HttpResponse<UserDto>> {
    try {
      const data: UserLoginDto = request.body;

      const result = await this.authUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
