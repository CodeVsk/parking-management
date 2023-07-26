import { Request } from "express";
import { FindByIdCollegeUseCase } from "./find-by-id-college-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { CollegeDto } from "../../../../application/dtos/college-dto";

export class FindByIdCollegeController {
  constructor(private findByIdCollegeUseCase: FindByIdCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse<CollegeDto>> {
    try {
      const { id } = request.params;

      const result = await this.findByIdCollegeUseCase.execute(id);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
