import { Request } from "express";
import { UpdateByTokenVehicleUseCase } from "./update-by-token-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { AuthProvider } from "@/infra/providers";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";

export class UpdateByTokenVehicleController {
  constructor(
    private updateByTokenVehicleUseCase: UpdateByTokenVehicleUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: VehicleDto = request.body;

      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const result = await this.updateByTokenVehicleUseCase.execute(
        data,
        userId
      );

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
