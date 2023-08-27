import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { DeleteVehicleController } from "./delete-vehicle-controller";
import { DeleteVehicleUseCase } from "./delete-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const loader = new DeleteVehicleUseCase(repository);

const deleteVehicleController = new DeleteVehicleController(loader);

export { deleteVehicleController };
