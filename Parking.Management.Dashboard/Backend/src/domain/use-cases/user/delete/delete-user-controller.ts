import { Request } from "express";
import { DeleteUserUseCase } from "./delete-user-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse<UserDto>> {
    try {
      const { id } = request.params;

      const result = await this.deleteUserUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
