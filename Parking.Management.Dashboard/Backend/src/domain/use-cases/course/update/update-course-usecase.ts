import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { Result } from "../../../../core/domain/result";

export class UpdateCourseUseCase {
  constructor(
    private courseRepository: ICourseRepository,
    private courseMapper: CourseMapper
  ) {}

  async execute(data: CourseDto): Promise<Result<CourseDto>> {
    const course = await this.courseRepository.findById(data.id);

    const courseModel = {
      ...course,
      ...data,
    };

    const result = await this.courseRepository.update(courseModel);

    const courseDto = this.courseMapper.mapper(result);

    return new Result<CourseDto>(
      courseDto,
      "Universidade atualizada com sucesso."
    );
  }
}
