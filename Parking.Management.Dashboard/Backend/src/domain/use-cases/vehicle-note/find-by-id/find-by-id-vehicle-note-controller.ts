import { Request } from "express";
import { FindByIdVehicleNoteUseCase } from "./find-by-id-vehicle-note-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";

export class FindByIdVehicleNoteController {
  constructor(private findByIdVehicleNoteUseCase: FindByIdVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleNoteDto>> {
    try {
      const { id } = request.params;

      const result = await this.findByIdVehicleNoteUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
