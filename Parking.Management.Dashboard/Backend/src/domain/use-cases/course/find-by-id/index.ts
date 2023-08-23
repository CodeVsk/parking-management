import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { FindByIdCourseController } from "./find-by-id-course-controller";
import { FindByIdCourseUseCase } from "./find-by-id-course-usecase";

const repository = new PrismaCourseRepository();
const mapper = new CourseMapper();
const loader = new FindByIdCourseUseCase(repository, mapper);

const findByIdCourseController = new FindByIdCourseController(loader);

export { findByIdCourseController };
