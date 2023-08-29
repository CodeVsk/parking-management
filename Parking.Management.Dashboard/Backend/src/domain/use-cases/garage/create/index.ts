import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { mapper } from "@/application/mappers/mapper-config";

import { CreateGarageController } from "./create-garage-controller";
import { CreateGarageUseCase } from "./create-garage-usecase";

const repository = new PrismaGarageRepository();
const mapper = new GarageMapper();
const loader = new CreateGarageUseCase(repository, mapper);

const createGarageController = new CreateGarageController(loader);

export { createGarageController };
