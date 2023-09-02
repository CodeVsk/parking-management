import { Request } from "express";
import { GetAllVehicleUseCase } from "./get-all-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class GetAllVehicleController {
  constructor(private getAllVehicleUseCase: GetAllVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.getAllVehicleUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
