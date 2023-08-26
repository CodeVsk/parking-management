import { ICourseRepository } from "../../../contracts";
import { CourseDto } from "../../../../application/dtos/course-dto";
import Mapper from "@/application/mappers";
import { Result } from "../../../../core/domain/result";
import { Course } from "@/domain/entities";

export class FindByIdCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute(id: string): Promise<Result<CourseDto>> {
    const result = await this.courseRepository.findById(id);

    const courseDto = await Mapper.map(result, CourseDto);

    return new Result<CourseDto>(courseDto, "Universidade encontrada.");
  }
}