import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { DeleteGarageController } from "./delete-garage-controller";
import { DeleteGarageUseCase } from "./delete-garage-usecase";

const repository = new PrismaGarageRepository();
const loader = new DeleteGarageUseCase(repository);

const deleteGarageController = new DeleteGarageController(loader);

export { deleteGarageController };
