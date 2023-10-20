import { Request } from "express";
import { GetAllCourseUseCase } from "./get-all-course-usecase";
import { HttpResponse } from "@/presentation/helpers/http";

export class GetAllCourseController {
  constructor(private getAllCourseUseCase: GetAllCourseUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const result = await this.getAllCourseUseCase.execute();

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
