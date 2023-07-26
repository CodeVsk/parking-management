import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { CollegeMapper } from "../../../../application/mappers/college-mapper";
import { DeleteCollegeController } from "./delete-college-controller";
import { DeleteCollegeUseCase } from "./delete-college-usecase";

const repository = new PrismaCollegeRepository();
const mapper = new CollegeMapper();
const loader = new DeleteCollegeUseCase(repository, mapper);

const deleteCollegeController = new DeleteCollegeController(loader);

export { deleteCollegeController };
