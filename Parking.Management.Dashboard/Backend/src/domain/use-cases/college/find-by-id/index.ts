import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { FindByIdCollegeController } from "./find-by-id-college-controller";
import { FindByIdCollegeUseCase } from "./find-by-id-college-usecase";

const repository = new PrismaCollegeRepository();
const loader = new FindByIdCollegeUseCase(repository);

const findByIdCollegeController = new FindByIdCollegeController(loader);

export { findByIdCollegeController };
