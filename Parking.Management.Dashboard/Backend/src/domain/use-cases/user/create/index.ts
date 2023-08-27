import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { mapper } from "@/application/mappers/mapper-config";

import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";

const repository = new PrismaUserRepository();

const loader = new CreateUserUseCase(repository);

const createUserController = new CreateUserController(loader);

export { createUserController };
