import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { DeleteVehicleResponsibleController } from "./delete-vehicle-responsible-controller";
import { DeleteVehicleResponsibleUseCase } from "./delete-vehicle-responsible-usecase";

const repository = new PrismaVehicleResponsibleRepository();
const loader = new DeleteVehicleResponsibleUseCase(repository);

const deleteVehicleResponsibleController =
  new DeleteVehicleResponsibleController(loader);

export { deleteVehicleResponsibleController };
