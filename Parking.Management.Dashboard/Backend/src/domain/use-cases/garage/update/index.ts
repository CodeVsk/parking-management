import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { UpdateGarageController } from "./update-garage-controller";
import { UpdateGarageUseCase } from "./update-garage-usecase";

const repository = new PrismaGarageRepository();
const loader = new UpdateGarageUseCase(repository);

const updateGarageController = new UpdateGarageController(loader);

export { updateGarageController };
