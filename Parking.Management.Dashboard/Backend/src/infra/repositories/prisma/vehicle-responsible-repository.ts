import { IVehicleResponsibleRepository } from "../../../domain/contracts";
import { VehicleResponsible } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaVehicleResponsibleRepository
  implements IVehicleResponsibleRepository
{
  async create(
    vehicleResponsible: VehicleResponsible
  ): Promise<VehicleResponsible> {
    const { user, vehicle, ...vehicleResponsibleData } = vehicleResponsible;
    const result = await prisma.vehicleResponsible.create({
      data: {
        ...vehicleResponsibleData,
      },
    });

    return result;
  }

  async update(
    vehicleResponsible: VehicleResponsible
  ): Promise<VehicleResponsible> {
    const { user, vehicle, ...vehicleResponsibleData } = vehicleResponsible;
    const result = await prisma.vehicleResponsible.update({
      where: {
        id: vehicleResponsible.id,
      },
      data: {
        ...vehicleResponsibleData,
      },
    });

    return result;
  }

  async delete(id: string): Promise<VehicleResponsible> {
    const result = await prisma.vehicleResponsible.delete({
      where: {
        id: id,
      },
    });

    return result;
  }

  async findById(id: string): Promise<VehicleResponsible> {
    const result = await prisma.vehicleResponsible.findFirst({
      where: {
        id: id,
      },
      include: {
        user: true,
        vehicle: true,
      },
    });

    return result;
  }

  async findByIdToken(id: string, userId: string): Promise<VehicleResponsible> {
    const result = await prisma.vehicleResponsible.findFirst({
      where: {
        id: id,
        vehicle: {
          userId: userId,
        },
      },
      include: {
        user: true,
        vehicle: true,
      },
    });

    return result;
  }

  async findByVehicleUserId(
    id: string,
    userId: string
  ): Promise<VehicleResponsible[]> {
    const result = await prisma.vehicleResponsible.findMany({
      where: {
        vehicleId: id,
        vehicle: {
          userId: userId,
        },
      },
      include: {
        user: true,
        vehicle: true,
      },
    });

    return result;
  }
}
