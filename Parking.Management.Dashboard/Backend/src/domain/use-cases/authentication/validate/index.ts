import { PrismaUserRepository } from "@/infra/repositories";
import { AuthValidateController } from "./auth-validate-controller";
import { AuthValidateUseCase } from "./auth-validate-usecase";
import { AuthProvider } from "@/infra/providers";

const provider = new AuthProvider();
const loader = new AuthValidateUseCase(provider);

const authValidateController = new AuthValidateController(loader);

export { authValidateController };
