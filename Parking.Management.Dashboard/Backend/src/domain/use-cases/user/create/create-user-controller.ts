import { Request } from "express";
import { CreateUserUseCase } from "./create-user-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse<UserDto>> {
    try {
      const data: UserDto = request.body;

      const result = await this.createUserUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
