import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { StatisticsUserController } from "./statistics-user-controller";
import { StatisticsUserUseCase } from "./statistics-user-usecase";

const repository = new PrismaUserRepository();

const loader = new StatisticsUserUseCase(repository);

const statisticsUserController = new StatisticsUserController(loader);

export { statisticsUserController };
