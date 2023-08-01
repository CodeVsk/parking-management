import { VehicleRepository } from "../../../domain/contracts";
import { Vehicle } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaVehicleRepository implements VehicleRepository {
  async create(vehicle: Vehicle): Promise<Vehicle> {
    const result = await prisma.vehicle.create({
      data: {
        ...vehicle,
      },
    });

    return result;
  }

  async update(vehicle: Vehicle): Promise<Vehicle> {
    const result = await prisma.vehicle.update({
      where: {
        id: vehicle.id,
      },
      data: {
        ...vehicle,
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
    });

    return result;
  }
}
