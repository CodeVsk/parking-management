import { AuthProvider } from "@/infra/providers";
import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { CreateVehicleResponsibleByTokenController } from "./create-vehicle-responsible-by-token-controller";
import { CreateVehicleResponsibleByTokenUseCase } from "./create-vehicle-responsible-by-token-usecase";
import {
  PrismaUserRepository,
  PrismaVehicleRepository,
} from "@/infra/repositories";

const repository = new PrismaVehicleResponsibleRepository();
const vehicleRepository = new PrismaVehicleRepository();
const userRepository = new PrismaUserRepository();
const provider = new AuthProvider();
const loader = new CreateVehicleResponsibleByTokenUseCase(
  repository,
  vehicleRepository,
  userRepository
);

const createVehicleResponsibleByTokenController =
  new CreateVehicleResponsibleByTokenController(loader, provider);

export { createVehicleResponsibleByTokenController };
