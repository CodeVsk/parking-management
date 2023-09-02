import { Request } from "express";
import { GetAllCollegeUseCase } from "./get-all-college-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class GetAllCollegeController {
  constructor(private getAllCollegeUseCase: GetAllCollegeUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.getAllCollegeUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
