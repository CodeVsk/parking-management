import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { Course } from "@/domain/entities";

export class GetAllCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(): Promise<Result<CourseDto[]>> {
    const result = await this.courseRepository.getAll();
    const coursesDto = await mapper.mapArrayAsync(result, Course, CourseDto);

    return new Result<CourseDto[]>({
      content: coursesDto,
      message: "Os cursos foram encontrados.",
    });
  }
}
