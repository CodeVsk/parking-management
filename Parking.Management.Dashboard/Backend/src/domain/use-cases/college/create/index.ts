import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { CreateCollegeController } from "./create-college-controller";
import { CreateCollegeUseCase } from "./create-college-usecase";

const repository = new PrismaCollegeRepository();
const mapper = new CollegeMapper();
const loader = new CreateCollegeUseCase(repository, mapper);

const createCollegeController = new CreateCollegeController(loader);

export { createCollegeController };
