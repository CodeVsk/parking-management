import { Request } from "express";
import { FindByIdUserUseCase } from "./find-by-id-user-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class FindByIdUserController {
  constructor(private findByIdUserUseCase: FindByIdUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse<UserDto>> {
    try {
      const { id } = request.params;

      const result = await this.findByIdUserUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
