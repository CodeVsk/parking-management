import { Request } from "express";
import { AuthRegisterUseCase } from "./auth-register-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class AuthRegisterController {
  constructor(private authRegisterUseCase: AuthRegisterUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: UserDto = request.body;

      const result = await this.authRegisterUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
