import { Request } from "express";
import { AuthValidateUseCase } from "./auth-validate-usecase";
import { UserDto } from "../../../../application/dtos/user-dto";
import { HttpResponse } from "@/presentation/helpers/http";
import { AuthenticatedDto } from "@/application/dtos";

export class AuthValidateController {
  constructor(private authValidateUseCase: AuthValidateUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: AuthenticatedDto = request.body;

      const result = await this.authValidateUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
