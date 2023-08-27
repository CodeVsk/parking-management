import { Request } from "express";
import { FindByIdVehicleResponsibleUseCase } from "./find-by-id-vehicle-responsible-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class FindByIdVehicleResponsibleController {
  constructor(
    private findByIdVehicleResponsibleUseCase: FindByIdVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.findByIdVehicleResponsibleUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
