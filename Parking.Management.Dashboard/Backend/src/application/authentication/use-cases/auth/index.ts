import { UserMapper } from "@/application/mappers";
import { AuthProvider } from "@/infra/providers";
import { AuthUseCase } from "./auth-usecase";
import { AuthController } from "./auth-controller";

const provider = new AuthProvider();
const mapper = new UserMapper();
const loader = new AuthUseCase(mapper, provider);

const authController = new AuthController(loader);

export { authController };
