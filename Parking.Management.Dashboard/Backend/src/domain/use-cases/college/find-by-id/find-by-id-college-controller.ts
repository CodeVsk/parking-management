import { Request } from "express";
import { FindByIdCollegeUseCase } from "./find-by-id-college-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class FindByIdCollegeController {
  constructor(private findByIdCollegeUseCase: FindByIdCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.findByIdCollegeUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
