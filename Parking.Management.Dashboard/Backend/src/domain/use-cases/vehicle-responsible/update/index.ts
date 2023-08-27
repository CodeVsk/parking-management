import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { UpdateVehicleResponsibleController } from "./update-vehicle-responsible-controller";
import { UpdateVehicleResponsibleUseCase } from "./update-vehicle-responsible-usecase";

const repository = new PrismaVehicleResponsibleRepository();
const loader = new UpdateVehicleResponsibleUseCase(repository);

const updateVehicleResponsibleController =
  new UpdateVehicleResponsibleController(loader);

export { updateVehicleResponsibleController };
