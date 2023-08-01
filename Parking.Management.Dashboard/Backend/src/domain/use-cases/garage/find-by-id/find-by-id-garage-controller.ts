import { Request } from "express";
import { FindByIdGarageUseCase } from "./find-by-id-garage-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class FindByIdGarageController {
  constructor(private findByIdGarageUseCase: FindByIdGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse<GarageDto>> {
    try {
      const { id } = request.params;

      const result = await this.findByIdGarageUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
