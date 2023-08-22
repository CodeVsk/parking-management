import { Request } from "express";
import { CreateVehicleResponsibleUseCase } from "./create-vehicle-responsible-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class CreateVehicleResponsibleController {
  constructor(
    private createVehicleResponsibleUseCase: CreateVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: VehicleResponsibleDto = request.body;

      const result = await this.createVehicleResponsibleUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
