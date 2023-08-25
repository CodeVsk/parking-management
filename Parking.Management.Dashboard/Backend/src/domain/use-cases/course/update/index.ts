import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { UpdateCourseController } from "./update-course-controller";
import { UpdateCourseUseCase } from "./update-course-usecase";

const repository = new PrismaCourseRepository();
const loader = new UpdateCourseUseCase(repository);

const updateCourseController = new UpdateCourseController(loader);

export { updateCourseController };
