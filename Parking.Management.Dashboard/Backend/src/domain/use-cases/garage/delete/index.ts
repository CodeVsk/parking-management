import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import Mapper from "@/application/mappers";

import { DeleteGarageController } from "./delete-garage-controller";
import { DeleteGarageUseCase } from "./delete-garage-usecase";

const repository = new PrismaGarageRepository();
const mapper = new GarageMapper();
const loader = new DeleteGarageUseCase(repository, mapper);

const deleteGarageController = new DeleteGarageController(loader);

export { deleteGarageController };
