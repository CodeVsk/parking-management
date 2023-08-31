import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { GetAllUserController } from "./get-all-user-controller";
import { GetAllUserUseCase } from "./get-all-user-usecase";

const repository = new PrismaUserRepository();

const loader = new GetAllUserUseCase(repository);

const getAllUserController = new GetAllUserController(loader);

export { getAllUserController };
