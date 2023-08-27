import { Request } from "express";
import { CreateCourseUseCase } from "./create-course-usecase";
import { HttpResponse } from "@/presentation/helpers/http";
import { CourseDto } from "../../../../application/dtos/course-dto";

export class CreateCourseController {
  constructor(private createCourseUseCase: CreateCourseUseCase) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const data: CourseDto = request.body;

      const result = await this.createCourseUseCase.execute(data);

      return HttpResponse.ok(result);
    } catch (err) {
      return HttpResponse.badRequest(err);
    }
  }
}
