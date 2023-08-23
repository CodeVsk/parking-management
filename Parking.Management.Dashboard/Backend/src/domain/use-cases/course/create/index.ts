import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { CreateCourseController } from "./create-course-controller";
import { CreateCourseUseCase } from "./create-course-usecase";

const repository = new PrismaCourseRepository();
const mapper = new CourseMapper();
const loader = new CreateCourseUseCase(repository, mapper);

const createCourseController = new CreateCourseController(loader);

export { createCourseController };
