import { UserRepository } from "../../../domain/contracts/prisma/user-repository";

export class PrismaUserRepository implements UserRepository {
  async findById(id: string) {}
}
