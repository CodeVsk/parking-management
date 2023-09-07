import { IGarageRepository } from "../../../domain/contracts/prisma/garage-repository";
import { Garage } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaGarageRepository implements IGarageRepository {
  async create(garage: Garage): Promise<Garage> {
    const result = await prisma.garage.create({
      data: {
        ...garage,
      },
    });

    return result;
  }

  async update(garage: Garage): Promise<Garage> {
    const result = await prisma.garage.update({
      where: {
        id: garage.id,
      },
      data: {
        ...garage,
      },
    });

    return result;
  }

  async delete(id: string): Promise<Garage> {
    const result = await prisma.garage.delete({
      where: {
        id: id,
      },
    });

    return result;
  }

  async findById(id: string): Promise<Garage> {
    const result = await prisma.garage.findUnique({
      where: {
        id: id,
      },
    });

    return result;
  }

  async getAll(): Promise<Garage[]> {
    const result = await prisma.garage.findMany();

    return result;
  }
}
