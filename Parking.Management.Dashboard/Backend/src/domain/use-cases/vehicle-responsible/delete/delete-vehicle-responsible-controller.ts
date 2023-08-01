import { Request } from "express";
import { DeleteVehicleResponsibleUseCase } from "./delete-vehicle-responsible-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";

export class DeleteVehicleResponsibleController {
  constructor(
    private deleteVehicleResponsibleUseCase: DeleteVehicleResponsibleUseCase
  ) {}

  async handle(request: Request): Promise<HttpResponse<VehicleResponsibleDto>> {
    try {
      const { id } = request.params;

      const result = await this.deleteVehicleResponsibleUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
