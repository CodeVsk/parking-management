import { Request } from "express";
import { FindByIdCourseUseCase } from "./find-by-id-course-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { CourseDto } from "../../../../application/dtos/course-dto";

export class FindByIdCourseController {
  constructor(private findByIdCourseUseCase: FindByIdCourseUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.findByIdCourseUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
