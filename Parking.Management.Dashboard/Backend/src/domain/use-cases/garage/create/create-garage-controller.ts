import { Request } from "express";
import { CreateGarageUseCase } from "./create-garage-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class CreateGarageController {
  constructor(private createGarageUseCase: CreateGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse<GarageDto>> {
    try {
      const data: GarageDto = request.body;

      const result = await this.createGarageUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
