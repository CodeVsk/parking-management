import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { Result } from "../../../../core/domain/result";

export class FindByIdCourseUseCase {
  constructor(
    private courseRepository: ICourseRepository,
    private courseMapper: CourseMapper
  ) {}

  async execute(id: string): Promise<Result<CourseDto>> {
    const result = await this.courseRepository.findById(id);

    const courseDto = this.courseMapper.mapper(result);

    return new Result<CourseDto>(courseDto, "Universidade encontrada.");
  }
}
