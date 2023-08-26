import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { FindByIdCourseController } from "./find-by-id-course-controller";
import { FindByIdCourseUseCase } from "./find-by-id-course-usecase";

const repository = new PrismaCourseRepository();
const loader = new FindByIdCourseUseCase(repository);

const findByIdCourseController = new FindByIdCourseController(loader);

export { findByIdCourseController };
