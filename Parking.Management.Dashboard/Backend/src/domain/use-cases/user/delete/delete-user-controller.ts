import { Request } from "express";
import { DeleteUserUseCase } from "./delete-user-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.deleteUserUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
