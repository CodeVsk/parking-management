import { Request } from "express";
import { CreateVehicleResponsibleUseCase } from "./create-vehicle-responsible-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class CreateVehicleResponsibleController {
  constructor(
    private createVehicleResponsibleUseCase: CreateVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse<VehicleResponsibleDto>> {
    try {
      const data: VehicleResponsibleDto = request.body;

      const result = await this.createVehicleResponsibleUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
