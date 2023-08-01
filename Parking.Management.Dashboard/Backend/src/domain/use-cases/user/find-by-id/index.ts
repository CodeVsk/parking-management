import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { FindByIdUserController } from "./find-by-id-user-controller";
import { FindByIdUserUseCase } from "./find-by-id-user-usecase";

const repository = new PrismaUserRepository();
const mapper = new UserMapper();
const loader = new FindByIdUserUseCase(repository, mapper);

const findByIdUserController = new FindByIdUserController(loader);

export { findByIdUserController };
