import { Request } from "express";
import { DeleteCollegeUseCase } from "./delete-college-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { CollegeDto } from "../../../../application/dtos/college-dto";

export class DeleteCollegeController {
  constructor(private deleteCollegeUseCase: DeleteCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse<CollegeDto>> {
    try {
      const { id } = request.params;

      const result = await this.deleteCollegeUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
