import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { LatestUpdatedGarageController } from "./latest-updated-garage-controller";
import { LatestUpdatedGarageUseCase } from "./latest-updated-garage-usecase";

const repository = new PrismaGarageRepository();
const loader = new LatestUpdatedGarageUseCase(repository);

const latestUpdatedGarageController = new LatestUpdatedGarageController(loader);

export { latestUpdatedGarageController };
