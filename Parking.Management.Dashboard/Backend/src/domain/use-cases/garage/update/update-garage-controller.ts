import { Request } from "express";
import { UpdateGarageUseCase } from "./update-garage-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class UpdateGarageController {
  constructor(private updateGarageUseCase: UpdateGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: GarageDto = request.body;

      const result = await this.updateGarageUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
