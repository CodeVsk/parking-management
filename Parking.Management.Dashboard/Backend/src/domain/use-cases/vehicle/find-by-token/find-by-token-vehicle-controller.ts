import { Request } from "express";
import { FindByTokenVehicleUseCase } from "./find-by-token-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";
import { AuthProvider } from "@/infra/providers";

export class FindByTokenVehicleController {
  constructor(
    private findByTokenVehicleUseCase: FindByTokenVehicleUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const result = await this.findByTokenVehicleUseCase.execute(userId);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
