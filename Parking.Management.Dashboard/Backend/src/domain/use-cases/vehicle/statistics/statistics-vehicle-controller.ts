import { Request } from "express";
import { StatisticsVehicleUseCase } from "./statistics-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class StatisticsVehicleController {
  constructor(private statisticsVehicleUseCase: StatisticsVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.statisticsVehicleUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
