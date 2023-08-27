import { Request } from "express";
import { AuthLoginUseCase } from "./auth-login-usecase";
import { UserDto } from "../../../../application/dtos/user-dto";
import { HttpResponse } from "@/presentation/helpers/http";

export class AuthLoginController {
  constructor(private authUserUseCase: AuthLoginUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: UserDto = request.body;

      const result = await this.authUserUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
