import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { Course } from "@/domain/entities";

export class UpdateCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(data: CourseDto): Promise<Result<CourseDto>> {
    const course = await this.courseRepository.findById(data.id);

    if (!course) {
      return new Result<CourseDto>({
        message: "Curso não encontrado.",
      });
    }

    const courseModel = {
      ...course,
      ...data,
    };

    const result = await this.courseRepository.update(courseModel);

    const courseDto = mapper.map(result, Course, CourseDto);

    return new Result<CourseDto>({
      content: courseDto,
      message: "Curso atualizado com sucesso.",
    });
  }
}
