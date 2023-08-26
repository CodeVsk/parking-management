import { Request } from "express";
import { DeleteGarageUseCase } from "./delete-garage-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class DeleteGarageController {
  constructor(private deleteGarageUseCase: DeleteGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.deleteGarageUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
