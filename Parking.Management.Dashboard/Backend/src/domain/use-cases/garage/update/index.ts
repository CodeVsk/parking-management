import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { mapper } from "@/application/mappers/mapper-config";

import { UpdateGarageController } from "./update-garage-controller";
import { UpdateGarageUseCase } from "./update-garage-usecase";

const repository = new PrismaGarageRepository();
const mapper = new GarageMapper();
const loader = new UpdateGarageUseCase(repository, mapper);

const updateGarageController = new UpdateGarageController(loader);

export { updateGarageController };
