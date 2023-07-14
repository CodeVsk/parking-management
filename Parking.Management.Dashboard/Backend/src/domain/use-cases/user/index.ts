import { PrismaGenericRepository } from "../../../infra/repositories";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-usecase";

const repository = new PrismaGenericRepository();
const loader = new CreateUserUseCase(repository);

const createUserController = new CreateUserController(loader);

export { createUserController };
