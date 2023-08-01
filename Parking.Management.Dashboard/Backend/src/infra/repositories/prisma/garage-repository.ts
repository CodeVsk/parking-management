import { GarageRepository } from "../../../domain/contracts/prisma/garage-repository";
import { Garage } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaGarageRepository implements GarageRepository {
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
}
