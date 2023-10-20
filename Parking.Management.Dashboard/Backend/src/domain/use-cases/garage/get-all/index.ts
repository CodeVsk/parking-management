import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { GetAllGarageController } from "./get-all-garage-controller";
import { GetAllGarageUseCase } from "./get-all-garage-usecase";

const repository = new PrismaGarageRepository();
const loader = new GetAllGarageUseCase(repository);

const getAllGarageController = new GetAllGarageController(loader);

export { getAllGarageController };
