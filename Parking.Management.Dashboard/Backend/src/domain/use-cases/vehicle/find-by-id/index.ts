import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { FindByIdVehicleController } from "./find-by-id-vehicle-controller";
import { FindByIdVehicleUseCase } from "./find-by-id-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const loader = new FindByIdVehicleUseCase(repository);

const findByIdVehicleController = new FindByIdVehicleController(loader);

export { findByIdVehicleController };
