import { Request } from "express";
import { FindByIdTokenVehicleResponsibleUseCase } from "./find-by-id-token-vehicle-responsible-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";
import { AuthProvider } from "@/infra/providers";

export class FindByIdTokenVehicleResponsibleController {
  constructor(
    private findByIdTokenVehicleResponsibleUseCase: FindByIdTokenVehicleResponsibleUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const result = await this.findByIdTokenVehicleResponsibleUseCase.execute(
        id,
        userId
      );

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
