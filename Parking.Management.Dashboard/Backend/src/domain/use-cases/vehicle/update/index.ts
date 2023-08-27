import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { UpdateVehicleController } from "./update-vehicle-controller";
import { UpdateVehicleUseCase } from "./update-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const loader = new UpdateVehicleUseCase(repository);

const updateVehicleController = new UpdateVehicleController(loader);

export { updateVehicleController };
