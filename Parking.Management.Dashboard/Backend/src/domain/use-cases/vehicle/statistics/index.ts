import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { StatisticsVehicleController } from "./statistics-vehicle-controller";
import { StatisticsVehicleUseCase } from "./statistics-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const loader = new StatisticsVehicleUseCase(repository);

const statisticsVehicleController = new StatisticsVehicleController(loader);

export { statisticsVehicleController };
