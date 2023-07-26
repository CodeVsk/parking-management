import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { FindByIdCollegeController } from "./find-by-id-college-controller";
import { FindByIdCollegeUseCase } from "./find-by-id-college-usecase";

const repository = new PrismaCollegeRepository();
const mapper = new CollegeMapper();
const loader = new FindByIdCollegeUseCase(repository, mapper);

const findByIdCollegeController = new FindByIdCollegeController(loader);

export { findByIdCollegeController };
