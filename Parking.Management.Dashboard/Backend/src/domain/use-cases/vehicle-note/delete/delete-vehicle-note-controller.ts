import { Request } from "express";
import { HttpResponse } from "@/presentation/helpers/http";
import { DeleteVehicleNoteUseCase } from "./delete-vehicle-note-usecase";

export class DeleteVehicleNoteController {
  constructor(private deleteVehicleNoteUseCase: DeleteVehicleNoteUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.deleteVehicleNoteUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
