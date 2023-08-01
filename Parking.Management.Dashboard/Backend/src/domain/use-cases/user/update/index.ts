import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { UpdateUserController } from "./update-user-controller";
import { UpdateUserUseCase } from "./update-user-usecase";

const repository = new PrismaUserRepository();
const mapper = new UserMapper();
const loader = new UpdateUserUseCase(repository, mapper);

const updateUserController = new UpdateUserController(loader);

export { updateUserController };
