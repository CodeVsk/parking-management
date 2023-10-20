import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import { mapper } from "@/application/mappers/mapper-config";
import { Result } from "../../../../core/domain/result";
import { Course } from "@/domain/entities";

export class DeleteCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(id: string): Promise<Result<CourseDto>> {
    const course = await this.courseRepository.findById(id);

    if (!course) {
      return new Result<CourseDto>({
        message: "Curso não encontrada.",
      });
    }

    const result = await this.courseRepository.delete(id);

    const courseDto = mapper.map(result, Course, CourseDto);

    return new Result<CourseDto>({
      content: courseDto,
      message: "Curso deletado com sucesso.",
    });
  }
}
