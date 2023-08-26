import { Request } from "express";
import { UpdateCourseUseCase } from "./update-course-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { CourseDto } from "../../../../application/dtos/course-dto";

export class UpdateCourseController {
  constructor(private updateCourseUseCase: UpdateCourseUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: CourseDto = request.body;

      const result = await this.updateCourseUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
