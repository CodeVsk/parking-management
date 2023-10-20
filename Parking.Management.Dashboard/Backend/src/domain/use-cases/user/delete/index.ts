import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByIdUserUseCase } from "../find-by-id/find-by-id-user-usecase";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-usecase";

const repository = new PrismaUserRepository();

const loader = new DeleteUserUseCase(repository);

const deleteUserController = new DeleteUserController(loader);

export { deleteUserController };
