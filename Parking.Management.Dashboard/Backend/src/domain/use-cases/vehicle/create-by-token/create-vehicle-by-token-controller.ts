import { Request } from "express";
import { CreateVehicleByTokenUseCase } from "./create-vehicle-by-token-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";
import { AuthProvider } from "@/infra/providers";

export class CreateVehicleByTokenController {
  constructor(
    private createVehicleByTokenUseCase: CreateVehicleByTokenUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const data: VehicleDto = request.body;

      const result = await this.createVehicleByTokenUseCase.execute(
        data,
        userId
      );

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
