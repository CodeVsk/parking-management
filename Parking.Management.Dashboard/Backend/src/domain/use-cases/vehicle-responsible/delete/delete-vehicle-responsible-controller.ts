import { Request } from "express";
import { DeleteVehicleResponsibleUseCase } from "./delete-vehicle-responsible-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class DeleteVehicleResponsibleController {
  constructor(
    private deleteVehicleResponsibleUseCase: DeleteVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.deleteVehicleResponsibleUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
