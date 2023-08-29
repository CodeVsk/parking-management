import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByIdUserController } from "./find-by-id-user-controller";
import { FindByIdUserUseCase } from "./find-by-id-user-usecase";

const repository = new PrismaUserRepository();
//
const loader = new FindByIdUserUseCase(repository);

const findByIdUserController = new FindByIdUserController(loader);

export { findByIdUserController };
