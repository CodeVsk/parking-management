import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { UpdateVehicleController } from "./update-vehicle-controller";
import { UpdateVehicleUseCase } from "./update-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const mapper = new VehicleMapper();
const loader = new UpdateVehicleUseCase(repository, mapper);

const updateVehicleController = new UpdateVehicleController(loader);

export { updateVehicleController };
