import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { CreateVehicleResponsibleController } from "./create-vehicle-responsible-controller";
import { CreateVehicleResponsibleUseCase } from "./create-vehicle-responsible-usecase";

const repository = new PrismaVehicleResponsibleRepository();
const mapper = new VehicleResponsibleMapper();
const loader = new CreateVehicleResponsibleUseCase(repository, mapper);

const createVehicleResponsibleController =
  new CreateVehicleResponsibleController(loader);

export { createVehicleResponsibleController };
