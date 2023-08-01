import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";

const repository = new PrismaUserRepository();
const mapper = new UserMapper();
const loader = new CreateUserUseCase(repository, mapper);

const createUserController = new CreateUserController(loader);

export { createUserController };
