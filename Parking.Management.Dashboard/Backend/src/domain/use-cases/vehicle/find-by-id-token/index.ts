import { AuthProvider } from "@/infra/providers";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { FindByIdTokenVehicleController } from "./find-by-id-token-vehicle-controller";
import { FindByIdTokenVehicleUseCase } from "./find-by-id-token-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const provider = new AuthProvider();
const loader = new FindByIdTokenVehicleUseCase(repository);

const findByIdTokenVehicleController = new FindByIdTokenVehicleController(
  loader,
  provider
);

export { findByIdTokenVehicleController };
