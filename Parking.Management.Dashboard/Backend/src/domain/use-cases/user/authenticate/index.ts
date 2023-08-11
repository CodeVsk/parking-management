import { PrismaUserRepository } from "@/infra/repositories";
import { AuthUserController } from "./auth-user-controller";
import { AuthUserUseCase } from "./auth-user-usecase";
import { AuthProvider } from "@/infra/providers";

const provider = new AuthProvider();
const repository = new PrismaUserRepository();
const loader = new AuthUserUseCase(provider, repository);

const authUserController = new AuthUserController(loader);

export { authUserController };
