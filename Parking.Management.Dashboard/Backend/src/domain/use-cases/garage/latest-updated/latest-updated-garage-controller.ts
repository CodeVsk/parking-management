import { Request } from "express";
import { LatestUpdatedGarageUseCase } from "./latest-updated-garage-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class LatestUpdatedGarageController {
  constructor(private latestUpdatedGarageUseCase: LatestUpdatedGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.latestUpdatedGarageUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
