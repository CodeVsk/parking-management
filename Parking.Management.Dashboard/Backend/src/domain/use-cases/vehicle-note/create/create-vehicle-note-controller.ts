import { Request } from "express";
import { CreateVehicleNoteUseCase } from "./create-vehicle-note-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";

export class CreateVehicleNoteController {
  constructor(private createVehicleNoteUseCase: CreateVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: VehicleNoteDto = request.body;

      const result = await this.createVehicleNoteUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
