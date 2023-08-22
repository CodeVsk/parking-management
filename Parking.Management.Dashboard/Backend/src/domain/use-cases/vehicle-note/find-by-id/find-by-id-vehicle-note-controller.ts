import { Request } from "express";
import { FindByIdVehicleNoteUseCase } from "./find-by-id-vehicle-note-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";

export class FindByIdVehicleNoteController {
  constructor(private findByIdVehicleNoteUseCase: FindByIdVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.findByIdVehicleNoteUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
