import { Request } from "express";
import { UpdateUserUseCase } from "./update-user-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: UserDto = request.body;

      const result = await this.updateUserUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
