import { Request } from "express";
import { CreateVehicleResponsibleByTokenUseCase } from "./create-vehicle-responsible-by-token-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";
import { AuthProvider } from "@/infra/providers";
import { VehicleResponsibleUserDto } from "@/application/dtos/vehicle-responsible-user-dto";

export class CreateVehicleResponsibleByTokenController {
  constructor(
    private createVehicleResponsibleByTokenUseCase: CreateVehicleResponsibleByTokenUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const data: VehicleResponsibleUserDto = request.body;

      const result = await this.createVehicleResponsibleByTokenUseCase.execute(
        data,
        userId
      );

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
