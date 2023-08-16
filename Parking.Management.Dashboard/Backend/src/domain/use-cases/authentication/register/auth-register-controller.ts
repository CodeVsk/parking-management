import { Request } from "express";
import { AuthRegisterUseCase } from "./auth-register-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class AuthRegisterController {
  constructor(private authRegisterUseCase: AuthRegisterUseCase) {}

  async handle(request: Request): Promise<HttpResponse<UserDto>> {
    try {
      const data: UserDto = request.body;

      const result = await this.authRegisterUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
