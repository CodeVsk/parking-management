import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { UpdateByTokenVehicleController } from "./update-by-token-vehicle-controller";
import { UpdateByTokenVehicleUseCase } from "./update-by-token-vehicle-usecase";
import { AuthProvider } from "@/infra/providers";

const repository = new PrismaVehicleRepository();
const loader = new UpdateByTokenVehicleUseCase(repository);
const provider = new AuthProvider();

const updateByTokenVehicleController = new UpdateByTokenVehicleController(
  loader,
  provider
);

export { updateByTokenVehicleController };
