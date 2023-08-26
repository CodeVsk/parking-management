import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { CreateCollegeController } from "./create-college-controller";
import { CreateCollegeUseCase } from "./create-college-usecase";

const repository = new PrismaCollegeRepository();
const loader = new CreateCollegeUseCase(repository);

const createCollegeController = new CreateCollegeController(loader);

export { createCollegeController };
