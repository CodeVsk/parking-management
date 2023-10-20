import { AuthProvider, QRCodeProvider } from "@/infra/providers";
import { PrismaUserRepository } from "@/infra/repositories";
import { CreateByUserIdUseCase } from "./create-by-userid-usecase";
import { CreateByUserIdController } from "./create-by-userid-controller";

const repository = new PrismaUserRepository();

const authProvider = new AuthProvider();
const qrCodeProvider = new QRCodeProvider();

const loader = new CreateByUserIdUseCase(
  repository,
  authProvider,
  qrCodeProvider
);

const createByUserIdController = new CreateByUserIdController(loader);

export { createByUserIdController };
