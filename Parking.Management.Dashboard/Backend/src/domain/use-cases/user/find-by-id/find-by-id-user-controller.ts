import { Request } from "express";
import { FindByIdUserUseCase } from "./find-by-id-user-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class FindByIdUserController {
  constructor(private findByIdUserUseCase: FindByIdUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.findByIdUserUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
