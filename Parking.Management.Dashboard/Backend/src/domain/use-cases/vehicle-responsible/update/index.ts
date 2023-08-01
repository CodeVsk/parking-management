import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { UpdateVehicleResponsibleController } from "./update-vehicle-responsible-controller";
import { UpdateVehicleResponsibleUseCase } from "./update-vehicle-responsible-usecase";

const repository = new PrismaVehicleResponsibleRepository();
const mapper = new VehicleResponsibleMapper();
const loader = new UpdateVehicleResponsibleUseCase(repository, mapper);

const updateVehicleResponsibleController =
  new UpdateVehicleResponsibleController(loader);

export { updateVehicleResponsibleController };
