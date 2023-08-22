import { Request } from "express";
import { CreateGarageUseCase } from "./create-garage-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class CreateGarageController {
  constructor(private createGarageUseCase: CreateGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: GarageDto = request.body;

      const result = await this.createGarageUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
