import { Request } from "express";
import { AuthUserUseCase } from "./auth-user-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class AuthUserController {
  constructor(private authUserUseCase: AuthUserUseCase) {}

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
