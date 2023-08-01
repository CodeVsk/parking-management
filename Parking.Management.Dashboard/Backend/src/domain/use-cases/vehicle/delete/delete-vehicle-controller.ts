import { Request } from "express";
import { DeleteVehicleUseCase } from "./delete-vehicle-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";

export class DeleteVehicleController {
  constructor(private deleteVehicleUseCase: DeleteVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleDto>> {
    try {
      const { id } = request.params;

      const result = await this.deleteVehicleUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
