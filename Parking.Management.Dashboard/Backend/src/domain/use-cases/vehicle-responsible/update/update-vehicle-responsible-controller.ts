import { Request } from "express";
import { UpdateVehicleResponsibleUseCase } from "./update-vehicle-responsible-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class UpdateVehicleResponsibleController {
  constructor(
    private updateVehicleResponsibleUseCase: UpdateVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: VehicleResponsibleDto = request.body;

      const result = await this.updateVehicleResponsibleUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
