import { Request } from "express";
import { CreateCollegeUseCase } from "./create-college-usecase";
import {
  HttpResponse,
  error,
  ok,
} from "../../../../application/protocols/http";
import { CollegeDto } from "../../../../application/dtos/college-dto";

export class CreateCollegeController {
  constructor(private createCollegeUseCase: CreateCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse<CollegeDto>> {
    try {
      const data: CollegeDto = request.body;

      const result = await this.createCollegeUseCase.execute(data);

      return ok(result);
    } catch (err) {
      return error(err);
    }
  }
}
