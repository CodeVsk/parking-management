import { AuthProvider } from "@/infra/providers";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { FindByTokenVehicleController } from "./find-by-token-vehicle-controller";
import { FindByTokenVehicleUseCase } from "./find-by-token-vehicle-usecase";

const repository = new PrismaVehicleRepository();
const provider = new AuthProvider();
const loader = new FindByTokenVehicleUseCase(repository);

const findByTokenVehicleController = new FindByTokenVehicleController(
  loader,
  provider
);

export { findByTokenVehicleController };
