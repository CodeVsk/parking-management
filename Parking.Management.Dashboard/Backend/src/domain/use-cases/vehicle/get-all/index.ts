import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { GetAllVehicleController } from "./get-all-vehicle-controller";
import { GetAllVehicleUseCase } from "./get-all-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const loader = new GetAllVehicleUseCase(repository);

const getAllVehicleController = new GetAllVehicleController(loader);

export { getAllVehicleController };
