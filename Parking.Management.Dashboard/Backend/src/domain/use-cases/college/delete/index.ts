import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { DeleteCollegeController } from "./delete-college-controller";
import { DeleteCollegeUseCase } from "./delete-college-usecase";

const repository = new PrismaCollegeRepository();
const loader = new DeleteCollegeUseCase(repository);

const deleteCollegeController = new DeleteCollegeController(loader);

export { deleteCollegeController };
