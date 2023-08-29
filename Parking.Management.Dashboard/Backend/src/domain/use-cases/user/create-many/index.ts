import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { mapper } from "@/application/mappers/mapper-config";
import { CreateManyUserUseCase } from "./create-many-user-usecase";
import { CreateManyUserController } from "./create-many-user-controller";

const repository = new PrismaUserRepository();
const loader = new CreateManyUserUseCase(repository);

const createManyUserController = new CreateManyUserController(loader);

export { createManyUserController };
