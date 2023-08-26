import { PrismaCourseRepository } from "../../../../infra/repositories/prisma/course-repository";
import Mapper from "@/application/mappers";
import { CreateCourseController } from "./create-course-controller";
import { CreateCourseUseCase } from "./create-course-usecase";

const repository = new PrismaCourseRepository();
const loader = new CreateCourseUseCase(repository);

const createCourseController = new CreateCourseController(loader);

export { createCourseController };
