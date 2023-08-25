import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { DeleteCourseController } from "./delete-course-controller";
import { DeleteCourseUseCase } from "./delete-course-usecase";

const repository = new PrismaCourseRepository();
const loader = new DeleteCourseUseCase(repository);

const deleteCourseController = new DeleteCourseController(loader);

export { deleteCourseController };
