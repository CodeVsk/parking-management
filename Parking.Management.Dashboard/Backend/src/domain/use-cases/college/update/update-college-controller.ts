import { Request } from "express";
import { UpdateCollegeUseCase } from "./update-college-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { CollegeDto } from "../../../../application/dtos/college-dto";

export class UpdateCollegeController {
  constructor(private updateCollegeUseCase: UpdateCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse<CollegeDto>> {
    try {
      const data: CollegeDto = request.body;

      const result = await this.updateCollegeUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
