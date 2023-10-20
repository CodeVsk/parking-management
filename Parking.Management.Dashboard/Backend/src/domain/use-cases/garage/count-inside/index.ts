import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { CountInsideGarageController } from "./count-inside-garage-controller";
import { CountInsideGarageUseCase } from "./count-inside-garage-usecase";

const repository = new PrismaGarageRepository();
const loader = new CountInsideGarageUseCase(repository);

const countInsideGarageController = new CountInsideGarageController(loader);

export { countInsideGarageController };
