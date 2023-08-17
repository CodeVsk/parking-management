import { PrismaUserRepository } from "@/infra/repositories";
import { AuthRegisterController } from "./auth-register-controller";
import { AuthRegisterUseCase } from "./auth-register-usecase";
import { AuthProvider } from "@/infra/providers";
import { UserMapper } from "@/application/mappers";

const mapper = new UserMapper();
const repository = new PrismaUserRepository();
const loader = new AuthRegisterUseCase(mapper, repository);

const authRegisterController = new AuthRegisterController(loader);

export { authRegisterController };
