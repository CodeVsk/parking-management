import { Request } from "express";
import { HttpResponse } from "@/presentation/helpers/http";
import { GetAllUserUseCase } from "./get-all-user-usecase";

export class GetAllUserController {
  constructor(private getAllUserUseCase: GetAllUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.getAllUserUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
