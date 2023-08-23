import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { Result } from "../../../../core/domain/result";

export class CreateCourseUseCase {
  constructor(
    private courseRepository: ICourseRepository,
    private courseMapper: CourseMapper
  ) {}

  async execute(data: CourseDto): Promise<Result<CourseDto>> {
    const courseModel = this.courseMapper.mapper(data);

    const result = await this.courseRepository.create(courseModel);

    const courseDto = this.courseMapper.mapper(result);

    return new Result<CourseDto>(courseDto, "Universidade criada com sucesso.");
  }
}
