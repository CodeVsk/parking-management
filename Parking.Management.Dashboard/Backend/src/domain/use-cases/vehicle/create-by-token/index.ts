import { AuthProvider } from "@/infra/providers";
import { CreateVehicleByTokenController } from "./create-vehicle-by-token-controller";
import { CreateVehicleByTokenUseCase } from "./create-vehicle-by-token-usecase";
import {
  PrismaUserRepository,
  PrismaVehicleRepository,
} from "@/infra/repositories";

const vehicleRepository = new PrismaVehicleRepository();
const userRepository = new PrismaUserRepository();
const provider = new AuthProvider();
const loader = new CreateVehicleByTokenUseCase(
  vehicleRepository,
  userRepository
);

const createVehicleByTokenController = new CreateVehicleByTokenController(
  loader,
  provider
);

export { createVehicleByTokenController };
