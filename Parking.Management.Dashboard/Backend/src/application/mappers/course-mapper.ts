import { Course } from "@/domain/entities/course";
import { CourseDto } from "../dtos";

export class CourseMapper {
  mapper(data: Course | CourseDto): Course | CourseDto {
    const entitie: Course | CourseDto = {
      ...data,
    };

    return entitie;
  }
}
