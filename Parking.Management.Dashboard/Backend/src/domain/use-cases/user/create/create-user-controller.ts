import { Request } from "express";
import { CreateUserUseCase } from "./create-user-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: UserDto = request.body;

      const result = await this.createUserUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
