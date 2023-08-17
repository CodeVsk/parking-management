import { IVehicleResponsibleRepository } from "../../../domain/contracts";
import { VehicleResponsible } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaVehicleResponsibleRepository
  implements IVehicleResponsibleRepository
{
  async create(
    vehicleResponsible: VehicleResponsible
  ): Promise<VehicleResponsible> {
    const result = await prisma.vehicleResponsible.create({
      data: {
        ...vehicleResponsible,
      },
    });

    return result;
  }

  async update(
    vehicleResponsible: VehicleResponsible
  ): Promise<VehicleResponsible> {
    const result = await prisma.vehicleResponsible.update({
      where: {
        id: vehicleResponsible.id,
      },
      data: {
        ...vehicleResponsible,
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
    const result = await prisma.vehicleResponsible.findUnique({
      where: {
        id: id,
      },
    });

    return result;
  }
}
