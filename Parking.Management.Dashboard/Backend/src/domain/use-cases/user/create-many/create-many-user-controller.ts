import { Request } from "express";
import { CreateManyUserUseCase } from "./create-many-user-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { UserDto } from "../../../../application/dtos/user-dto";

export class CreateManyUserController {
  constructor(private createManyUserUseCase: CreateManyUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: UserDto[] = request.body;

      const result = await this.createManyUserUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
