import { createMap } from "@automapper/core";
import { mapper } from "./mapper-config";
import { Course } from "@/domain/entities";
import { CourseDto } from "../dtos";

export class CourseMapper {
  constructor() {
    createMap(mapper, Course, CourseDto);
    createMap(mapper, CourseDto, Course);
  }
}
