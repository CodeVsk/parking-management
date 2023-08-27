import { Request } from "express";
import { UpdateVehicleUseCase } from "./update-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";

export class UpdateVehicleController {
  constructor(private updateVehicleUseCase: UpdateVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: VehicleDto = request.body;

      const result = await this.updateVehicleUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
