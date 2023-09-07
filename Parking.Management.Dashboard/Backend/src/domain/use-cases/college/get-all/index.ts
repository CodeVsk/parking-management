import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { GetAllCollegeController } from "./get-all-college-controller";
import { GetAllCollegeUseCase } from "./get-all-college-usecase";

const repository = new PrismaCollegeRepository();
const loader = new GetAllCollegeUseCase(repository);

const getAllCollegeController = new GetAllCollegeController(loader);

export { getAllCollegeController };
