import { Request } from "express";
import { FindByIdVehicleUseCase } from "./find-by-id-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";

export class FindByIdVehicleController {
  constructor(private findByIdVehicleUseCase: FindByIdVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.findByIdVehicleUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
