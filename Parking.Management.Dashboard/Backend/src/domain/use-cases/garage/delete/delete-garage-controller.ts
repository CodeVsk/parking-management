import { Request } from "express";
import { DeleteGarageUseCase } from "./delete-garage-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { GarageDto } from "../../../../application/dtos/garage-dto";

export class DeleteGarageController {
  constructor(private deleteGarageUseCase: DeleteGarageUseCase) {}

  async handle(request: Request): Promise<HttpResponse<GarageDto>> {
    try {
      const { id } = request.params;

      const result = await this.deleteGarageUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
