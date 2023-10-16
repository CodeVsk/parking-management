import { Request } from "express";
import { FindByIdTokenVehicleUseCase } from "./find-by-id-token-vehicle-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";
import { AuthProvider } from "@/infra/providers";

export class FindByIdTokenVehicleController {
  constructor(
    private findByIdTokenVehicleUseCase: FindByIdTokenVehicleUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const result = await this.findByIdTokenVehicleUseCase.execute(id, userId);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
