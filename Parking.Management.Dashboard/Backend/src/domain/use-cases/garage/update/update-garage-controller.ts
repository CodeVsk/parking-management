import { Request } from "express";
import { UpdateGarageUseCase } from "./update-garage-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class UpdateGarageController {
  constructor(private updateGarageUseCase: UpdateGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse<GarageDto>> {
    try {
      const data: GarageDto = request.body;

      const result = await this.updateGarageUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
