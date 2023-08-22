import { Request } from "express";
import { CreateCollegeUseCase } from "./create-college-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { CollegeDto } from "../../../../application/dtos/college-dto";

export class CreateCollegeController {
  constructor(private createCollegeUseCase: CreateCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: CollegeDto = request.body;

      const result = await this.createCollegeUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
