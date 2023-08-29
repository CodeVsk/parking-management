import { Request } from "express";
import { FindByIdGarageUseCase } from "./find-by-id-garage-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class FindByIdGarageController {
  constructor(private findByIdGarageUseCase: FindByIdGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.findByIdGarageUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
