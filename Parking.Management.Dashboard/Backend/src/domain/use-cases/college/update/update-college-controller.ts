import { Request } from "express";
import { UpdateCollegeUseCase } from "./update-college-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { CollegeDto } from "../../../../application/dtos/college-dto";

export class UpdateCollegeController {
  constructor(private updateCollegeUseCase: UpdateCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: CollegeDto = request.body;

      const result = await this.updateCollegeUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
