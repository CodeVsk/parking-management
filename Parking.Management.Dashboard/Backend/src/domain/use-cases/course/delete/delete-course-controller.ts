import { Request } from "express";
import { DeleteCourseUseCase } from "./delete-course-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { CourseDto } from "../../../../application/dtos/course-dto";

export class DeleteCourseController {
  constructor(private deleteCourseUseCase: DeleteCourseUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params;

      const result = await this.deleteCourseUseCase.execute(id);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
