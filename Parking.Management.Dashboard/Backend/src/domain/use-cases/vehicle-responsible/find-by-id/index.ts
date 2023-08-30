import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { FindByIdVehicleResponsibleController } from "./find-by-id-vehicle-responsible-controller";
import { FindByIdVehicleResponsibleUseCase } from "./find-by-id-vehicle-responsible-usecase";

const repository = new PrismaVehicleResponsibleRepository();
const loader = new FindByIdVehicleResponsibleUseCase(repository);

const findByIdVehicleResponsibleController =
  new FindByIdVehicleResponsibleController(loader);

export { findByIdVehicleResponsibleController };
