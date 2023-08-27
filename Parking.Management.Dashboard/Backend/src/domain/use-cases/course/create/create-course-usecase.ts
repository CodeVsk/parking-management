import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { Course } from "@/domain/entities";

export class CreateCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(data: CourseDto): Promise<Result<CourseDto>> {
    const courseModel = mapper.map(data, CourseDto, Course);

    const result = await this.courseRepository.create(courseModel);

    const courseDto = mapper.map(result, Course, CourseDto);

    return new Result<CourseDto>(courseDto, "Universidade criada com sucesso.");
  }
}
