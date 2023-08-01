import { Request } from "express";
import { DeleteVehicleNoteUseCase } from "./delete-vehicle-note-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";

export class DeleteVehicleNoteController {
  constructor(private deleteVehicleNoteUseCase: DeleteVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleNoteDto>> {
    try {
      const { id } = request.params;

      const result = await this.deleteVehicleNoteUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
