import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByEnrollmentUserController } from "./find-by-enrollment-user-controller";
import { FindByEnrollmentUserUseCase } from "./find-by-enrollment-user-usecase";

const repository = new PrismaUserRepository();
//
const loader = new FindByEnrollmentUserUseCase(repository);

const findByEnrollmentUserController = new FindByEnrollmentUserController(
  loader
);

export { findByEnrollmentUserController };
