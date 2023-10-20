import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { FindByIdGarageController } from "./find-by-id-garage-controller";
import { FindByIdGarageUseCase } from "./find-by-id-garage-usecase";

const repository = new PrismaGarageRepository();
const loader = new FindByIdGarageUseCase(repository);

const findByIdGarageController = new FindByIdGarageController(loader);

export { findByIdGarageController };
