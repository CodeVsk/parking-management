import { ICollegeRepository } from "../../../domain/contracts/prisma/college-repository";
import { College } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaCollegeRepository implements ICollegeRepository {
  async create(college: College): Promise<College> {
    const result = await prisma.college.create({
      data: {
        ...college,
      },
    });

    return result;
  }

  async update(college: College): Promise<College> {
    const result = await prisma.college.update({
      where: {
        id: college.id,
      },
      data: {
        ...college,
      },
    });

    return result;
  }

  async delete(id: string): Promise<College> {
    const result = await prisma.college.delete({
      where: {
        id: id,
      },
    });

    return result;
  }

  async findById(id: string): Promise<College> {
    const result = await prisma.college.findUnique({
      where: {
        id: id,
      },
    });

    return result;
  }
}
