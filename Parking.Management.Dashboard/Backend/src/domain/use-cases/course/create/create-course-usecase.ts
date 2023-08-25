import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import Mapper from "@/application/mappers";
import { Result } from "../../../../core/domain/result";
import { Course } from "@/domain/entities";

export class CreateCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(data: CourseDto): Promise<Result<CourseDto>> {
    const courseModel = await Mapper.map(data, Course);

    const result = await this.courseRepository.create(courseModel);

    const courseDto = await Mapper.map(result, CourseDto);

    return new Result<CourseDto>(courseDto, "Universidade criada com sucesso.");
  }
}
