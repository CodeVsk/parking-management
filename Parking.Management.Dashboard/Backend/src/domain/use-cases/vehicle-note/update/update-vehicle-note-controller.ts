import { Request } from "express";
import { UpdateVehicleNoteUseCase } from "./update-vehicle-note-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";

export class UpdateVehicleNoteController {
  constructor(private updateVehicleNoteUseCase: UpdateVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleNoteDto>> {
    try {
      const data: VehicleNoteDto = request.body;

      const result = await this.updateVehicleNoteUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
