import { Request } from "express";
import { CountInsideGarageUseCase } from "./count-inside-garage-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class CountInsideGarageController {
  constructor(private countInsideGarageUseCase: CountInsideGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.countInsideGarageUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
