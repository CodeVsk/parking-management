import { PrismaUserRepository } from "@/infra/repositories";
import { AuthValidateController } from "./auth-validate-controller";
import { AuthValidateUseCase } from "./auth-validate-usecase";
import { AuthProvider } from "@/infra/providers";

const provider = new AuthProvider();
const repository = new PrismaUserRepository();
const loader = new AuthValidateUseCase(provider, repository);

const authValidateController = new AuthValidateController(loader);

export { authValidateController };
