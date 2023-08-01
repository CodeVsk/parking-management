import { Request } from "express";
import { CreateVehicleUseCase } from "./create-vehicle-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";

export class CreateVehicleController {
  constructor(private createVehicleUseCase: CreateVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleDto>> {
    try {
      const data: VehicleDto = request.body;

      const result = await this.createVehicleUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
