import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";

export class UpdateCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(data: CourseDto): Promise<Result<CourseDto>> {
    const course = await this.courseRepository.findById(data.id);

    const courseModel = {
      ...course,
      ...data,
    };

    const result = await this.courseRepository.update(courseModel);

    const courseDto = mapper.map(result, Course, CourseDto);

    return new Result<CourseDto>(
      courseDto,
      "Universidade atualizada com sucesso."
    );
  }
}
