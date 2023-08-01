import { Request } from "express";
import { FindByIdVehicleResponsibleUseCase } from "./find-by-id-vehicle-responsible-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class FindByIdVehicleResponsibleController {
  constructor(
    private findByIdVehicleResponsibleUseCase: FindByIdVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse<VehicleResponsibleDto>> {
    try {
      const { id } = request.params;

      const result = await this.findByIdVehicleResponsibleUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
