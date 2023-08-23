import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { UpdateCourseController } from "./update-course-controller";
import { UpdateCourseUseCase } from "./update-course-usecase";

const repository = new PrismaCourseRepository();
const mapper = new CourseMapper();
const loader = new UpdateCourseUseCase(repository, mapper);

const updateCourseController = new UpdateCourseController(loader);

export { updateCourseController };
