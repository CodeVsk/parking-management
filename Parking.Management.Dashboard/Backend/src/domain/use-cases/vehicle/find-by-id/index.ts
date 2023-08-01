import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { FindByIdVehicleController } from "./find-by-id-vehicle-controller";
import { FindByIdVehicleUseCase } from "./find-by-id-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const mapper = new VehicleMapper();
const loader = new FindByIdVehicleUseCase(repository, mapper);

const findByIdVehicleController = new FindByIdVehicleController(loader);

export { findByIdVehicleController };
