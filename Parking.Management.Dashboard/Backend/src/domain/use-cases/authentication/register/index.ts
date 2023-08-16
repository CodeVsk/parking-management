import { PrismaUserRepository } from "@/infra/repositories";
import { AuthRegisterController } from "./auth-register-controller";
import { AuthRegisterUseCase } from "./auth-register-usecase";
import { AuthProvider } from "@/infra/providers";

const provider = new AuthProvider();
const repository = new PrismaUserRepository();
const loader = new AuthRegisterUseCase(provider, repository);

const authRegisterController = new AuthRegisterController(loader);

export { authRegisterController };
