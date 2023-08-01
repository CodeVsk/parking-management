import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-usecase";

const repository = new PrismaUserRepository();
const mapper = new UserMapper();
const loader = new DeleteUserUseCase(repository, mapper);

const deleteUserController = new DeleteUserController(loader);

export { deleteUserController };
