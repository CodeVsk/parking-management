import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { CreateVehicleController } from "./create-vehicle-controller";
import { CreateVehicleUseCase } from "./create-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const loader = new CreateVehicleUseCase(repository);

const createVehicleController = new CreateVehicleController(loader);

export { createVehicleController };
