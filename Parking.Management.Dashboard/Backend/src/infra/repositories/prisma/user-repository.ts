import { IUserRepository } from "../../../domain/contracts/prisma/user-repository";
import { User } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaUserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const result = await prisma.user.create({
      data: {
        ...user,
      },
    });

    return result;
  }

  async createMany(users: User[]): Promise<number> {
    const result = await prisma.user.createMany({
      data: {
        ...users,
      },
    });

    return result.count;
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

  async findByEnrollment(enrollment: string): Promise<User> {
    console.log(enrollment);
    const result = await prisma.user.findFirst({
      where: {
        enrollment: enrollment,
      },
    });

    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return result;
  }

  async getAll(): Promise<User[]> {
    const result = await prisma.user.findMany();

    return result;
  }

  async count(): Promise<number> {
    const result = await prisma.user.count();

    return result;
  }

  async countByDate(startDate: Date, endDate: Date): Promise<number> {
    const result = await prisma.user.count({
      where: {
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return result;
  }
}
