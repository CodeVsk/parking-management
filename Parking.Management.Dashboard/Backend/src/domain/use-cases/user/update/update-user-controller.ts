import { Request } from "express";
import { UpdateUserUseCase } from "./update-user-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse<UserDto>> {
    try {
      const data: UserDto = request.body;

      const result = await this.updateUserUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
