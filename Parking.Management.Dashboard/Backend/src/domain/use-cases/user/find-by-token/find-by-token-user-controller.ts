import { Request } from "express";
import { HttpResponse } from "@/presentation/helpers/http";
import { FindByTokenUserUseCase } from "./find-by-token-user-usecase";

export class FindByTokenUserController {
  constructor(private findByTokenUserUseCase: FindByTokenUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const token = request.header("Authorization")?.replace("Bearer ", "");

      const result = await this.findByTokenUserUseCase.execute(token);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
