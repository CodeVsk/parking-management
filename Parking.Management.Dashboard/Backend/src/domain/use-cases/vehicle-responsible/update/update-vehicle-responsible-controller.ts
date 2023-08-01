import { Request } from "express";
import { UpdateVehicleResponsibleUseCase } from "./update-vehicle-responsible-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class UpdateVehicleResponsibleController {
  constructor(
    private updateVehicleResponsibleUseCase: UpdateVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse<VehicleResponsibleDto>> {
    try {
      const data: VehicleResponsibleDto = request.body;

      const result = await this.updateVehicleResponsibleUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
