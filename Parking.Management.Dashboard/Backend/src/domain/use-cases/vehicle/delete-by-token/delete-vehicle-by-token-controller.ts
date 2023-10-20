import { Request } from "express";
import { DeleteVehicleByTokenUseCase } from "./delete-vehicle-by-token-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { AuthProvider } from "@/infra/providers";
import { UserPayload } from "@/infra/providers/auth/types/user-payload";

export class DeleteVehicleByTokenController {
  constructor(
    private deleteVehicleByTokenUseCase: DeleteVehicleByTokenUseCase,
    private authProvider: AuthProvider
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const token = request.header("Authorization")?.replace("Bearer ", "");

      const { userId }: UserPayload = this.authProvider.verifyToken(token);

      const result = await this.deleteVehicleByTokenUseCase.execute(id, userId);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
