import { PrismaUserRepository } from "@/infra/repositories";
import { AuthLoginController } from "./auth-login-controller";
import { AuthLoginUseCase } from "./auth-login-usecase";
import { AuthProvider } from "@/infra/providers";

const provider = new AuthProvider();
const repository = new PrismaUserRepository();
const loader = new AuthLoginUseCase(provider, repository);

const authLoginController = new AuthLoginController(loader);

export { authLoginController };
