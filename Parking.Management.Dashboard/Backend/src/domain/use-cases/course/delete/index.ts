import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { CourseMapper } from "../../../../application/mappers/course-mapper";
import { DeleteCourseController } from "./delete-course-controller";
import { DeleteCourseUseCase } from "./delete-course-usecase";

const repository = new PrismaCourseRepository();
const mapper = new CourseMapper();
const loader = new DeleteCourseUseCase(repository, mapper);

const deleteCourseController = new DeleteCourseController(loader);

export { deleteCourseController };
