import { Request } from "express";
import { HttpResponse } from "@/presentation/helpers/http";
import { StatisticsUserUseCase } from "./statistics-user-usecase";

export class StatisticsUserController {
  constructor(private statisticsUserUseCase: StatisticsUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.statisticsUserUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
