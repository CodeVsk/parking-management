import { AuthProvider } from "@/infra/providers";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { DeleteVehicleByTokenController } from "./delete-vehicle-by-token-controller";
import { DeleteVehicleByTokenUseCase } from "./delete-vehicle-by-token-usecase";

const repository = new PrismaVehicleRepository();
const loader = new DeleteVehicleByTokenUseCase(repository);
const provider = new AuthProvider();

const deleteVehicleByTokenController = new DeleteVehicleByTokenController(
  loader,
  provider
);

export { deleteVehicleByTokenController };
