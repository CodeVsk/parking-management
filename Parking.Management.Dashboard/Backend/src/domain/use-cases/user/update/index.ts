import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import Mapper from "@/application/mappers";

import { UpdateUserController } from "./update-user-controller";
import { UpdateUserUseCase } from "./update-user-usecase";

const repository = new PrismaUserRepository();

const loader = new UpdateUserUseCase(repository);

const updateUserController = new UpdateUserController(loader);

export { updateUserController };
