import { IVehicleNoteRepository } from "../../../domain/contracts";
import { VehicleNote } from "../../../domain/entities";
import { prisma } from "../../database/Prisma";

export class PrismaVehicleNoteRepository implements IVehicleNoteRepository {
  async create(vehicleNote: VehicleNote): Promise<VehicleNote> {
    const result = await prisma.vehicleNote.create({
      data: {
        ...vehicleNote,
      },
    });

    return result;
  }

  async update(vehicleNote: VehicleNote): Promise<VehicleNote> {
    const result = await prisma.vehicleNote.update({
      where: {
        id: vehicleNote.id,
      },
      data: {
        ...vehicleNote,
      },
    });

    return result;
  }

  async delete(id: string): Promise<VehicleNote> {
    const result = await prisma.vehicleNote.delete({
      where: {
        id: id,
      },
    });

    return result;
  }

  async findById(id: string): Promise<VehicleNote[]> {
    const result = await prisma.vehicleNote.findMany({
      where: {
        vehicleId: id,
      },
    });

    return result;
  }
}
