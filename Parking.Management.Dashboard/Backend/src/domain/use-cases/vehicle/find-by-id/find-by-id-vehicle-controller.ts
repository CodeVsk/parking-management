import { Request } from "express";
import { FindByIdVehicleUseCase } from "./find-by-id-vehicle-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";

export class FindByIdVehicleController {
  constructor(private findByIdVehicleUseCase: FindByIdVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleDto>> {
    try {
      const { id } = request.params;

      const result = await this.findByIdVehicleUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
