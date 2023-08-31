import { AuthProvider } from "@/infra/providers";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByTokenUserUseCase } from "./find-by-token-user-usecase";
import { FindByTokenUserController } from "./find-by-token-user-controller";
import { FindByIdUserUseCase } from "../find-by-id/find-by-id-user-usecase";

const repository = new PrismaUserRepository();
const useCase = new FindByIdUserUseCase(repository);
const provider = new AuthProvider();

const loader = new FindByTokenUserUseCase(useCase, provider);

const findByTokenUserController = new FindByTokenUserController(loader);

export { findByTokenUserController };
