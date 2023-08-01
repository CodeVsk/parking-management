import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { CreateVehicleController } from "./create-vehicle-controller";
import { CreateVehicleUseCase } from "./create-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const mapper = new VehicleMapper();
const loader = new CreateVehicleUseCase(repository, mapper);

const createVehicleController = new CreateVehicleController(loader);

export { createVehicleController };
