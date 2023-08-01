import { UserRepository } from "../../../domain/contracts/prisma/user-repository";
import { User } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const result = await prisma.user.create({
      data: {
        ...user,
      },
    });

    return result;
  }

  async update(user: User): Promise<User> {
    const result = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...user,
      },
    });

    return result;
  }

  async delete(id: string): Promise<User> {
    const result = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return result;
  }

  async findById(id: string): Promise<User> {
    const result = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return result;
  }
}
