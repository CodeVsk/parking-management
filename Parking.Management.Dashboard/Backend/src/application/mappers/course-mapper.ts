import { createMap, forMember, mapFrom } from "@automapper/core";
import { mapper } from "./mapper-config";
import { Course } from "@/domain/entities";
import { CourseDto } from "../dtos";

export class CourseMapper {
  constructor() {
    createMap(
      mapper,
      Course,
      CourseDto,
      forMember(
        (d) => d.college,
        mapFrom((source) => source.college)
      )
    );
    createMap(mapper, CourseDto, Course);
  }
}
