import { Request } from "express";
import { AuthLoginUseCase } from "./auth-login-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class AuthLoginController {
  constructor(private authUserUseCase: AuthLoginUseCase) {}

  async handle(request: Request): Promise<HttpResponse<UserDto>> {
    try {
      const data: UserDto = request.body;

      const result = await this.authUserUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
