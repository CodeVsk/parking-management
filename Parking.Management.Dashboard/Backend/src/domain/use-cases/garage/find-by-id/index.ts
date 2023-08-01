import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { GarageMapper } from "../../../../application/mappers/garage-mapper";
import { FindByIdGarageController } from "./find-by-id-garage-controller";
import { FindByIdGarageUseCase } from "./find-by-id-garage-usecase";

const repository = new PrismaGarageRepository();
const mapper = new GarageMapper();
const loader = new FindByIdGarageUseCase(repository, mapper);

const findByIdGarageController = new FindByIdGarageController(loader);

export { findByIdGarageController };
