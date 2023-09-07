import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import { GetAllCourseController } from "./get-all-course-controller";
import { GetAllCourseUseCase } from "./get-all-course-usecase";

const repository = new PrismaCourseRepository();
const loader = new GetAllCourseUseCase(repository);

const getAllCourseController = new GetAllCourseController(loader);

export { getAllCourseController };
