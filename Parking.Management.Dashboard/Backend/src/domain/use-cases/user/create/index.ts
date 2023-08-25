import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import Mapper from "@/application/mappers";

import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";

const repository = new PrismaUserRepository();

const loader = new CreateUserUseCase(repository);

const createUserController = new CreateUserController(loader);

export { createUserController };
