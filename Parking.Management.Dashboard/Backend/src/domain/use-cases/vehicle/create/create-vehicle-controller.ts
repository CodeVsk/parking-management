import { Request } from "express";
import { CreateVehicleUseCase } from "./create-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";

export class CreateVehicleController {
  constructor(private createVehicleUseCase: CreateVehicleUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: VehicleDto = request.body;

      const result = await this.createVehicleUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
