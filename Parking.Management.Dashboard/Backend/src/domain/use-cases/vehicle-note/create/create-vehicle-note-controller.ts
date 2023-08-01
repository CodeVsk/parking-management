import { Request } from "express";
import { CreateVehicleNoteUseCase } from "./create-vehicle-note-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";

export class CreateVehicleNoteController {
  constructor(private createVehicleNoteUseCase: CreateVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse<VehicleNoteDto>> {
    try {
      const data: VehicleNoteDto = request.body;

      const result = await this.createVehicleNoteUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
