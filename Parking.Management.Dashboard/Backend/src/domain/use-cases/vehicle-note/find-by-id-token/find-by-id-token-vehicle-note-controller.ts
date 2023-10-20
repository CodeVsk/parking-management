import { Request } from "express";
import { FindByIdTokenVehicleNoteUseCase } from "./find-by-id-token-vehicle-note-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { AuthProvider } from "@/infra/providers";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";

export class FindByIdTokenVehicleNoteController {
  constructor(
    private findByIdTokenVehicleNoteUseCase: FindByIdTokenVehicleNoteUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const result = await this.findByIdTokenVehicleNoteUseCase.execute(
        id,
        userId
      );

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
