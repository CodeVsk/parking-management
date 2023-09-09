import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { CreateGarageController } from "./create-garage-controller";
import { CreateGarageUseCase } from "./create-garage-usecase";

const repository = new PrismaGarageRepository();
const loader = new CreateGarageUseCase(repository);

const createGarageController = new CreateGarageController(loader);

export { createGarageController };
