import { IVehicleRepository } from "../../../domain/contracts";
import { Vehicle } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaVehicleRepository implements IVehicleRepository {
  async create(vehicle: Vehicle): Promise<Vehicle> {
    const { user, college, ...vehicleData } = vehicle;
    const result = await prisma.vehicle.create({
      data: {
        ...vehicleData,
      },
    });

    return result;
  }

  async update(vehicle: Vehicle): Promise<Vehicle> {
    const { user, college, ...vehicleData } = vehicle;
    const result = await prisma.vehicle.update({
      where: {
        id: vehicleData.id,
      },
      data: {
        ...vehicleData,
      },
    });

    return result;
  }

  async delete(id: string): Promise<Vehicle> {
    const result = await prisma.vehicle.delete({
      where: {
        id: id,
      },
    });

    return result;
  }

  async findById(id: string): Promise<Vehicle> {
    const result = await prisma.vehicle.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
        college: true,
      },
    });

    return result;
  }

  async findByYear(year: number): Promise<Vehicle[]> {
    const result = await prisma.vehicle.findMany({
      where: {
        created_at: {
          gte: new Date(`${year}-01-01`),
          lt: new Date(`${year + 1}-01-01`),
        },
      },
    });

    return result;
  }

  async getAll(): Promise<Vehicle[]> {
    const result = await prisma.vehicle.findMany({
      include: {
        user: true,
        college: true,
      },
    });

    return result;
  }
}
