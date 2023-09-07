import { ICourseRepository } from "../../../domain/contracts/prisma/course-repository";
import { Course } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaCourseRepository implements ICourseRepository {
  async create(course: Course): Promise<Course> {
    const result = await prisma.course.create({
      data: {
        ...course,
      },
    });

    return result;
  }

  async update(course: Course): Promise<Course> {
    const result = await prisma.course.update({
      where: {
        id: course.id,
      },
      data: {
        ...course,
      },
    });

    return result;
  }

  async delete(id: string): Promise<Course> {
    const result = await prisma.course.delete({
      where: {
        id: id,
      },
    });

    return result;
  }

  async findById(id: string): Promise<Course> {
    const result = await prisma.course.findUnique({
      where: {
        id: id,
      },
    });

    return result;
  }

  async getAll(): Promise<Course[]> {
    const result = await prisma.course.findMany();

    return result;
  }
}
