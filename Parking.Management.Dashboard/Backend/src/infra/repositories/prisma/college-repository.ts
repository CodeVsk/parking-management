import { CollegeRepository } from "../../../domain/contracts/prisma/college-repository";
import { College } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaCollegeRepository implements CollegeRepository {
  async create(college: College): Promise<College> {
    console.table(college);
    const result = await prisma.college.create({
      data: {
        ...college,
      },
    });

    return result;
  }
}
