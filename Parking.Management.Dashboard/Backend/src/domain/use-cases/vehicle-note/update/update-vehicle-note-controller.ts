import { Request } from "express";
import { UpdateVehicleNoteUseCase } from "./update-vehicle-note-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";

export class UpdateVehicleNoteController {
  constructor(private updateVehicleNoteUseCase: UpdateVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: VehicleNoteDto = request.body;

      const result = await this.updateVehicleNoteUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
