import { Request } from "express";
import { UpdateVehicleUseCase } from "./update-vehicle-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";

export class UpdateVehicleController {
  constructor(private updateVehicleUseCase: UpdateVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleDto>> {
    try {
      const data: VehicleDto = request.body;

      const result = await this.updateVehicleUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
