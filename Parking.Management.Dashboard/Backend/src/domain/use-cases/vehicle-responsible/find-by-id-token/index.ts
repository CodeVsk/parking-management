import { AuthProvider } from "@/infra/providers";
import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { FindByIdTokenVehicleResponsibleController } from "./find-by-id-token-vehicle-responsible-controller";
import { FindByIdTokenVehicleResponsibleUseCase } from "./find-by-id-token-vehicle-responsible-usecase";

const repository = new PrismaVehicleResponsibleRepository();
const provider = new AuthProvider();
const loader = new FindByIdTokenVehicleResponsibleUseCase(repository);

const findByIdTokenVehicleResponsibleController =
  new FindByIdTokenVehicleResponsibleController(loader, provider);

export { findByIdTokenVehicleResponsibleController };
