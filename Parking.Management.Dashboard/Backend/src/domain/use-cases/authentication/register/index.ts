import { PrismaUserRepository } from "@/infra/repositories";
import { AuthRegisterController } from "./auth-register-controller";
import { AuthRegisterUseCase } from "./auth-register-usecase";

const repository = new PrismaUserRepository();
const loader = new AuthRegisterUseCase(repository);

const authRegisterController = new AuthRegisterController(loader);

export { authRegisterController };
