import { Prisma, Status } from "@prisma/client";
import { Entity } from "../../core/domain/entity";

export class Garage
  extends Entity
  implements Prisma.GarageUncheckedCreateInput
{
  status: Status;
  entryTime: Date;
  departureTime: Date;
  collegeId: string;
  vehicleId: string;
  userEntryId: string;
  userDepartureId: string;
  created_at?: Date;
  updated_at?: Date;
}
