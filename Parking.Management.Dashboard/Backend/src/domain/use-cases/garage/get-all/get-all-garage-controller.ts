import { Request } from "express";
import { GetAllGarageUseCase } from "./get-all-garage-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class GetAllGarageController {
  constructor(private getAllGarageUseCase: GetAllGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.getAllGarageUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
