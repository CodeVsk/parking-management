import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { DeleteVehicleResponsibleByTokenController } from "./delete-vehicle-responsible-by-token-controller";
import { DeleteVehicleResponsibleByTokenUseCase } from "./delete-vehicle-responsible-by-token-usecase";
import { AuthProvider } from "@/infra/providers";

const repository = new PrismaVehicleResponsibleRepository();
const loader = new DeleteVehicleResponsibleByTokenUseCase(repository);
const provider = new AuthProvider();

const deleteVehicleResponsibleByTokenController =
  new DeleteVehicleResponsibleByTokenController(loader, provider);

export { deleteVehicleResponsibleByTokenController };
