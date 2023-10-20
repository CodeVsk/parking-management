import { Request } from "express";
import { HttpResponse } from "@/presentation/helpers/http";
import { CreateByUserIdUseCase } from "./create-by-userid-usecase";

export class CreateByUserIdController {
  constructor(private createByUserIdUseCase: CreateByUserIdUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const token = request.header("Authorization")?.replace("Bearer ", "");

      const result = await this.createByUserIdUseCase.execute(token);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
