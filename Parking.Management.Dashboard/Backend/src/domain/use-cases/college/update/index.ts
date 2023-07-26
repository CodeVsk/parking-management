import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { UpdateCollegeController } from "./update-college-controller";
import { UpdateCollegeUseCase } from "./update-college-usecase";

const repository = new PrismaCollegeRepository();
const mapper = new CollegeMapper();
const loader = new UpdateCollegeUseCase(repository, mapper);

const updateCollegeController = new UpdateCollegeController(loader);

export { updateCollegeController };
