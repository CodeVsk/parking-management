import { PrismaCollegeRepository } from "../../../../infra/repositories/prisma/college-repository";
import { UpdateCollegeController } from "./update-college-controller";
import { UpdateCollegeUseCase } from "./update-college-usecase";

const repository = new PrismaCollegeRepository();
const loader = new UpdateCollegeUseCase(repository);

const updateCollegeController = new UpdateCollegeController(loader);

export { updateCollegeController };
