import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { DeleteVehicleController } from "./delete-vehicle-controller";
import { DeleteVehicleUseCase } from "./delete-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const mapper = new VehicleMapper();
const loader = new DeleteVehicleUseCase(repository, mapper);

const deleteVehicleController = new DeleteVehicleController(loader);

export { deleteVehicleController };
